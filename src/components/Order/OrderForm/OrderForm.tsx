'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setOrderIsValid } from '@/redux/actions/order';
import { PAYMENTS_METHODS } from '@/constants/pay';
import { DELIVERY_VALUES } from '@/constants/delivery';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useOrder } from '@/hooks/order/useOrder';
import {
    OrderFormContact,
    OrderFormCountry,
    OrderFormDelivery,
    OrderFormAddress,
    OrderFormPayments,
} from '@/components';

import validate from './validate';

const OrderForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
    initialize,
    change,
}) => {
    const dispatch = useDispatch();

    const [indexForm, setIndexForm] = React.useState(0);

    const { isLoggedIn, isLoaded, user } = useAuthUser();
    const { isJewelry, cartSum } = useOrder();

    const {
        address: { country, city, street },
    } = useTypedSelector(({ order }) => order);

    const selector = formValueSelector('order-form');

    const { emailValue, nameValue, phoneValue, deliveryValue, houseValue, paymentValue } = useTypedSelector((state) => {
        const { email, name, phone, delivery, house, payment } = selector(
            state,
            'email',
            'name',
            'phone',
            'delivery',
            'house',
            'payment',
        );
        return {
            emailValue: email,
            nameValue: name,
            phoneValue: phone,
            deliveryValue: delivery,

            houseValue: house,

            paymentValue: payment,
        };
    });

    const handleSelectDeliveryType = (type: any) => {
        change('delivery', type);
    };

    React.useEffect(() => {
        if (nameValue && phoneValue) {
            setIndexForm(1);
        }

        if (country.value !== '' && city.value !== '') {
            setIndexForm(2);
        }

        if (deliveryValue) {
            setIndexForm(3);
        }

        if (street.value !== '' && houseValue) {
            setIndexForm(4);
        }
    }, [nameValue, phoneValue, country, city, street, deliveryValue, houseValue]);

    React.useEffect(() => {
        if (invalid || pristine || submitting) {
            dispatch(setOrderIsValid(false) as any);
        } else {
            dispatch(setOrderIsValid(true) as any);
        }
    }, [invalid, pristine, submitting]);

    React.useEffect(() => {
        if (isLoggedIn && isLoaded) {
            initialize({
                email: user.email ?? '',
                name: user.fullname ?? '',
                phone: user.phone ?? '',
                passport: user.pasport ?? '',
                country: user.country ?? '',
                city: user.city ?? '',
                street: user.street ?? '',
                house: user.house ?? '',
                flat: user.flat ?? '',
                comment: user.comment ?? '',
                payment: PAYMENTS_METHODS.card.title,
            });
        } else {
            initialize({
                promo: true,
            });
        }
    }, [isLoggedIn, isLoaded]);

    React.useEffect(() => {
        change('isJewelry', isJewelry);
    }, [isJewelry]);

    React.useEffect(() => {
        change('cartSum', cartSum);
    }, [cartSum]);

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <OrderFormContact emailValue={emailValue} />

            {indexForm >= 1 && <OrderFormCountry />}

            {indexForm >= 2 && <OrderFormDelivery onChange={handleSelectDeliveryType} />}

            {indexForm >= 3 && deliveryValue !== DELIVERY_VALUES.pickup && <OrderFormAddress />}

            {indexForm >= 4
                ? deliveryValue !== DELIVERY_VALUES.withFittingMoscow && (
                      <OrderFormPayments paymentValue={paymentValue} />
                  )
                : deliveryValue == DELIVERY_VALUES.pickup && <OrderFormPayments paymentValue={paymentValue} />}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'order-form',
    validate,
})(OrderForm);
