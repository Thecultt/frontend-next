'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setOrderIsValid } from '@/redux/actions/order';
import { useAuthUser } from '@/hooks/useAuthUser';
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
}) => {
    const dispatch = useDispatch();

    const [indexForm, setIndexForm] = React.useState<number>(0);

    const { isLoggedIn, isLoaded, user } = useAuthUser();

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
                email: user.email || '',
                name: `${user.lastname ? `${user.lastname} ` : ''}${user.name ? `${user.name} ` : ''}${user.middlename ? `${user.middlename} ` : ''}`,
                phone: user.phone,
            });
        } else {
            initialize({
                promo: true,
            });
        }
    }, [isLoggedIn, isLoaded]);

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <OrderFormContact emailValue={emailValue} />

            {indexForm >= 1 && <OrderFormCountry />}

            {indexForm >= 2 && <OrderFormDelivery />}

            {indexForm >= 3 && deliveryValue !== 'Самовывоз' && <OrderFormAddress />}

            {indexForm >= 4
                ? deliveryValue !== 'Доставка с примеркой (по Москве)' && (
                      <OrderFormPayments paymentValue={paymentValue} />
                  )
                : deliveryValue == 'Самовывоз' && <OrderFormPayments paymentValue={paymentValue} />}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'order-form',
    validate,
})(OrderForm);
