import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { Loader, RenderInput } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

import { validate } from './validate';

const BuyerTheCulttProductForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
}) => {
    const { isSendFormProductPage } = useTypedSelector(({ buyer_thecultt }) => buyer_thecultt);

    // const { user, isLoaded } = useTypedSelector(({ user }) => user);
    const { isLoaded, user } = useAuthUser();

    React.useEffect(() => {
        if (isLoaded) {
            initialize({ ...user, fio: `${user.fullname}` });
        }
    }, [isLoaded]);

    return (
        <form className="buyer-thecultt-product-form" onSubmit={handleSubmit}>
            <h2 className="buyer-thecultt-product-form__title">Оформить заявку на изделие</h2>

            <p className="buyer-thecultt-product-form__description">
                Отправьте заявку на нужное изделие, и в течение суток мы вернемся к вам с информацией о доступности
                модели, стоимостью и сроками доставки.
            </p>

            <div className="buyer-thecultt-product-form-input">
                <Field component={RenderInput} label="ФИО" name="fio" type="text" />
            </div>

            <div className="buyer-thecultt-product-form-input">
                <Field component={RenderInput} label="Номер телефона" name="phone" type="text" />
            </div>

            <div className="buyer-thecultt-product-form-input">
                <Field component={RenderInput} label="Email" name="email" type="text" />
            </div>

            <button
                className={getClassNames('btn buyer-thecultt-product-form__btn', {
                    loader: isSendFormProductPage,
                })}
                disabled={isSendFormProductPage || invalid || submitting}
            >
                {isSendFormProductPage ? <Loader /> : 'Отправить заявку'}
            </button>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'buyer-thecultt-product-form',
    validate,
})(BuyerTheCulttProductForm);
