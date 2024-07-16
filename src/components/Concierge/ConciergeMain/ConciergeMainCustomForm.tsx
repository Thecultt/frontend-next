import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { Loader, RenderInput } from '@/components';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getClassNames } from '@/functions/getClassNames';

import { validate } from './validate';

const BuyerTheCulttMainCustomForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const { isSendFormCustomProduct } = useTypedSelector(({ buyer_thecultt }) => buyer_thecultt);

    // const { user, isLoaded } = useTypedSelector(({ user }) => user);
    const { isLoaded, user } = useAuthUser();

    React.useEffect(() => {
        if (isLoaded) {
            initialize({ ...user, fio: `${user.fullname}` });
        }
    }, [isLoaded]);

    return (
        <form className="buyer-thecultt-custom-form" onSubmit={handleSubmit}>
            <h2 className="buyer-thecultt-custom-form__title">Оформить заявку</h2>

            <p className="buyer-thecultt-custom-form__description">
                Отправьте заявку на нужное изделие, и в течение суток мы вернемся к вам с информацией о доступности
                модели, стоимостью и сроками доставки.
            </p>

            <div className="buyer-thecultt-custom-form-input-wrapper">
                <div className="buyer-thecultt-custom-form-input" style={{ width: '100%' }}>
                    <Field component={RenderInput} label="ФИО" name="fio" type="text" />
                </div>

                <div className="buyer-thecultt-custom-form-input" style={{ width: '100%' }}>
                    <Field component={RenderInput} label="Номер телефона" name="phone" type="text" />
                </div>

                <div className="buyer-thecultt-custom-form-input" style={{ width: '100%' }}>
                    <Field component={RenderInput} label="Email" name="email" type="text" />
                </div>

                <div className="buyer-thecultt-custom-form-input" style={{ width: '100%' }}>
                    <Field component={RenderInput} label="Бренд, который хотели бы заказать" name="brand" type="text" />
                </div>

                <div className="buyer-thecultt-custom-form-input" style={{ width: '49%' }}>
                    <Field component={RenderInput} label="Ссылка на изделие" name="good_link" type="text" />
                </div>

                <div className="buyer-thecultt-custom-form-input" style={{ width: '49%' }}>
                    <Field
                        component={RenderInput}
                        label="Модель/название коллекции"
                        name="additional_link"
                        type="text"
                    />
                </div>
            </div>

            <button
                className={getClassNames('btn buyer-thecultt-custom-form__btn', {
                    loader: isSendFormCustomProduct,
                })}
                disabled={isSendFormCustomProduct || invalid || pristine || submitting}
            >
                {isSendFormCustomProduct ? <Loader /> : 'Отправить заявку'}
            </button>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'buyer-thecultt-custom-form',
    validate,
})(BuyerTheCulttMainCustomForm);
