import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RenderInput, RenderCheckbox, Loader } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useHash } from '@/hooks/useHash';
import { EXTERNAL_LINKS } from '@/constants/routes';

import { validate } from './validate';

const ReglogRegister: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const { removeHash } = useHash();

    const { email } = useTypedSelector(({ check_email }) => check_email);
    const { isSend } = useTypedSelector(({ register }) => register);

    React.useEffect(() => {
        if (email) {
            initialize({
                email,
                policyCheckbox: true,
                promoCheckbox: true,
            });
        } else {
            removeHash();
        }
    }, []);

    return (
        <>
            <form className="reglog-content-form reglog-content-form-register" onSubmit={handleSubmit}>
                <h3 className="reglog-content-form__title">Завершить регистрацию</h3>

                <p className="reglog-content-form__description">
                    Аккаунт, зарегистрированный на указанную почту, не найден. Завершите регистрацию для использования
                    платформы.
                </p>

                <div className="reglog-content-form-input-wrapper">
                    <div className="reglog-content-form-input">
                        <h4 className="reglog-content-form-input__title">Имя</h4>

                        <Field component={RenderInput} label="Ваше имя" name="name" type="text" />
                    </div>

                    <div className="reglog-content-form-input">
                        <h4 className="reglog-content-form-input__title">Фамилия</h4>

                        <Field component={RenderInput} label="Ваша фамилия" name="lastname" type="text" />
                    </div>

                    <div className="reglog-content-form-input">
                        <h4 className="reglog-content-form-input__title">Почта</h4>

                        <Field component={RenderInput} label="Ваша почта" name="email" type="text" disabled />
                    </div>

                    <div className="reglog-content-form-input">
                        <h4 className="reglog-content-form-input__title">Пароль</h4>

                        <Field component={RenderInput} label="Придумайте пароль" name="password" type="password" />
                    </div>
                </div>

                <div className="reglog-content-form-checkbox-wrapper">
                    <div className="reglog-content-form-checkbox">
                        <Field
                            component={RenderCheckbox}
                            name="policyCheckbox"
                            // label={`
                            // 	Я принимаю условия <a href="https://storage.yandexcloud.net/the-cultt-docs/17.07.2024/Оферта для продавца 120724.docx.pdf">агентского договора</a>, договора <a href="https://storage.yandexcloud.net/the-cultt-docs/17.07.2024/Оферта для покупателя 120724.docx.pdf ">купли-продажи</a> и даю свое согласие на <a href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Положение_об_обработке_персональных_данных_с_Ботом.pdf">обработку персональных данных</a>.
                            // `}
                            label={`
								Я принимаю <a href="https://www.thecultt.com/help/thecultt">условия продажи</a> и даю свое согласие на <a href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Положение_об_обработке_персональных_данных_с_Ботом.pdf">обработку персональных данных</a>.
							`}
                            small
                        />
                    </div>

                    <div className="reglog-content-form-checkbox">
                        <Field
                            component={RenderCheckbox}
                            name="promoCheckbox"
                            label={`
								Согласен (-а) <a href="${EXTERNAL_LINKS.advertisingConsent}" target="_blank" rel="noreferrer">получать</a> информационные письма и персональные предложения на указанную почту
							`}
                            small
                        />
                    </div>
                </div>

                <div className="reglog-content-form-btn">
                    {isSend ? (
                        <button className="btn disabled loader reglog-content-form-btn__btn" disabled>
                            <Loader />
                        </button>
                    ) : (
                        <button
                            className={getClassNames('btn reglog-content-form-btn__btn', {
                                disabled: invalid || submitting || pristine,
                            })}
                            disabled={invalid || submitting || pristine}
                        >
                            Согласиться и продолжить
                        </button>
                    )}
                </div>

                <p className="reglog-content-form__subtitle">
                    В личном кабинете вы сможете отследить статус вашей продажи/заказа
                </p>
            </form>
        </>
    );
};

export default reduxForm<{}, {}>({
    form: 'reglog-register-form',
    validate,
})(ReglogRegister);
