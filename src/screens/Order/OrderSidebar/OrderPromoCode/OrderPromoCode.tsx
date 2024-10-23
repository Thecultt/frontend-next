'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { Button, Input } from '@/shared/ui';
import { PROMOCODE_NOT_AVAILABLE_PAYMENTS } from '@/constants/pay';
import { useOrder } from '@/hooks/order/useOrder';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import {
    selectOrderPromoCode,
    selectOrderPromoCodeError,
    selectOrderPromoCodeIsLoading,
} from '@/redux/slices/order/selectors';
import { resetPromoCode } from '@/redux/slices/order/slice';
import { checkPromoCode } from '@/redux/slices/order/asyncActions';

import { IOrderFormValues } from '../../types';

import './styles.sass';

export const OrderPromoCode = () => {
    const dispatch = useAppDispatch();

    const { values } = useFormikContext<IOrderFormValues>();

    const error = useAppSelector(selectOrderPromoCodeError);
    const isLoading = useAppSelector(selectOrderPromoCodeIsLoading);
    const promoCode = useAppSelector(selectOrderPromoCode);

    const { checkedCartItems, cartSum, deliveryPrice } = useOrder();

    const [value, setValue] = React.useState(promoCode?.name ?? '');

    const isDisabled = React.useMemo(() => PROMOCODE_NOT_AVAILABLE_PAYMENTS.includes(values.payment), [values.payment]);

    const sendCheckPromoCode = () => {
        dispatch(checkPromoCode({ promoCode: value, totalPrice: cartSum + deliveryPrice }));
    };

    const handleApply = () => {
        if (!value.trim()) {
            dispatch(resetPromoCode());
            return;
        }

        sendCheckPromoCode();
    };

    React.useEffect(() => {
        if (!!value.trim() && checkedCartItems.length > 0) {
            sendCheckPromoCode();
        }
    }, [checkedCartItems.length]);

    return (
        <div className="order-promo-code">
            <Input
                label="Промокод"
                value={value}
                error={!!promoCode && isDisabled ? 'Промокод не действителен для выбранного типа оплаты' : error}
                disabled={isDisabled || checkedCartItems.length === 0}
                onChange={(v) => setValue(v.toUpperCase())}
            />
            <div className="order-promo-code__button-wrap">
                <Button
                    label={promoCode ? 'Изменить' : 'Применить'}
                    theme="transparent"
                    size="m"
                    className="order-promo-code__button"
                    disabled={isDisabled || isLoading || (!promoCode && !value.trim()) || checkedCartItems.length === 0}
                    onClick={handleApply}
                />
            </div>
        </div>
    );
};
