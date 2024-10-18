'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';

import { setOrderCurrentDelivery } from '@/redux/actions/order';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { getClassNames } from '@/functions/getClassNames';
import { RenderRadioSelect } from '@/components';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import {
    DELIVERY_ITEM,
    DELIVERY_VALUES,
    GLOBAL_DELIVERY_ITEMS,
    IDeliveryItem,
    RUSSIA_DELIVERY_ITEMS,
    RUSSIA_MOSCOW_DELIVERY_ITEMS,
    SNG_COUNTRIES,
    SNG_DELIVERY_ITEMS,
} from '@/constants/delivery';

interface Props {
    onChange: (type: string) => void;
}

const OrderFormDelivery: React.FC<Props> = ({ onChange }) => {
    const dispatch = useDispatch();

    const { isLoggedIn } = useAuthUser();

    const {
        address: { country, city },
    } = useTypedSelector(({ order }) => order);

    const [deliveryItems, setDeliveryItems] = React.useState<IDeliveryItem[]>([]);

    const currentCountry_lowerCase = country.title.toLocaleLowerCase();
    const currentCity_lowerCase = city.title.toLocaleLowerCase();

    const onClickSetCurrentDelivery = (delivery: { title: string; price: number; id: number }) => {
        dispatch(setOrderCurrentDelivery(delivery));
    };

    React.useEffect(() => {
        if (!currentCountry_lowerCase || !currentCity_lowerCase) {
            return;
        }

        if (currentCountry_lowerCase === 'россия') {
            if (currentCity_lowerCase.indexOf('москва') !== -1) {
                setDeliveryItems(RUSSIA_MOSCOW_DELIVERY_ITEMS);
                onChange(DELIVERY_VALUES.pickup);
                dispatch(
                    setOrderCurrentDelivery({
                        id: DELIVERY_ITEM.pickup.id,
                        title: DELIVERY_ITEM.pickup.title,
                        price: DELIVERY_ITEM.pickup.price,
                    }),
                );
                return;
            }

            setDeliveryItems(RUSSIA_DELIVERY_ITEMS);
            onChange(DELIVERY_VALUES.russiaFree);
            dispatch(
                setOrderCurrentDelivery({
                    id: DELIVERY_ITEM.russiaFree.id,
                    title: DELIVERY_ITEM.russiaFree.title,
                    price: DELIVERY_ITEM.russiaFree.price,
                }),
            );

            return;
        }

        if (SNG_COUNTRIES.includes(currentCountry_lowerCase)) {
            setDeliveryItems(SNG_DELIVERY_ITEMS);
            onChange(DELIVERY_VALUES.sng);
            dispatch(
                setOrderCurrentDelivery({
                    id: DELIVERY_ITEM.sng.id,
                    title: DELIVERY_ITEM.sng.title,
                    price: DELIVERY_ITEM.sng.price,
                }),
            );
            return;
        }

        if (!['россия', ...SNG_COUNTRIES].includes(currentCountry_lowerCase)) {
            setDeliveryItems(GLOBAL_DELIVERY_ITEMS);
            onChange(DELIVERY_VALUES.global);
            dispatch(
                setOrderCurrentDelivery({
                    id: DELIVERY_ITEM.global.id,
                    title: DELIVERY_ITEM.global.title,
                    price: DELIVERY_ITEM.global.price,
                }),
            );
            return;
        }
    }, [currentCity_lowerCase, currentCountry_lowerCase]);

    return (
        <div className="order-form-block order-form-block-delivery">
            <h3 className="order-form-block__title">Варианты доставки</h3>

            <div className="order-form-block-checkboxs-wrapper">
                {deliveryItems.map((item, index) => (
                    <div
                        className={getClassNames('order-form-block-checkbox', {
                            hidden: !isLoggedIn && item.title === DELIVERY_VALUES.withFittingMoscow,
                        })}
                        key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
                        onClick={() =>
                            onClickSetCurrentDelivery({
                                title: item.title,
                                price: item.price,
                                id: item.id,
                            })
                        }
                    >
                        <Field
                            component={RenderRadioSelect}
                            label={item.title}
                            description={item.description}
                            type="radio"
                            name="delivery"
                            value={item.title}
                        />

                        {currentCountry_lowerCase === 'россия' &&
                            currentCity_lowerCase.indexOf('москва') !== -1 &&
                            !isLoggedIn &&
                            item.title === DELIVERY_VALUES.withFittingMoscow && (
                                <p className="order-form-block-checkbox__login">
                                    Доступно только авторизованным пользователям -{' '}
                                    <Link href={`#${ReglogStateTypesNotLogin.LOGIN}`} scroll={false} prefetch={false}>
                                        Войти в аккаунт
                                    </Link>
                                </p>
                            )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderFormDelivery;
