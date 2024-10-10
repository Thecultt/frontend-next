'use client';

import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { RenderInput, RenderCheckbox } from '@/components';
import { Button } from '@/shared/ui';
import { useHash } from '@/hooks/useHash';
import { EXTERNAL_LINKS } from '@/constants/routes';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectAuthEmail, selectRegisterIsLoading } from '@/redux/slices/auth/selectors';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

import { validate } from './validate';

const ReglogRegister: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
}) => {
    const { changeHash } = useHash();

    const email = useAppSelector(selectAuthEmail);
    const registerIsLoading = useAppSelector(selectRegisterIsLoading);

    React.useEffect(() => {
        if (email) {
            initialize({
                email,
                policyCheckbox: true,
                promoCheckbox: true,
            });
        } else {
            changeHash(ReglogStateTypesNotLogin.REGLOG);
        }
    }, []);

    return (
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

                    <Field
                        component={RenderInput}
                        label="Придумайте пароль"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                    />
                </div>
            </div>

            <div className="reglog-content-form-checkbox-wrapper">
                <div className="reglog-content-form-checkbox">
                    <Field
                        component={RenderCheckbox}
                        type="checkbox"
                        name="policyCheckbox"
                        label={`
								Я принимаю <a href="https://www.thecultt.com/help/thecultt">условия продажи</a> и даю свое согласие на <a href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Положение_об_обработке_персональных_данных_с_Ботом.pdf">обработку персональных данных</a>.
							`}
                        small
                    />
                </div>

                <div className="reglog-content-form-checkbox">
                    <Field
                        component={RenderCheckbox}
                        type="checkbox"
                        name="promoCheckbox"
                        label={`
								Согласен (-а) <a href="${EXTERNAL_LINKS.advertisingConsent}" target="_blank" rel="noreferrer">получать</a> информационные письма и персональные предложения на указанную почту
							`}
                        small
                    />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <Button type="submit" label="Продолжить" disabled={registerIsLoading || invalid || submitting} wide />
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'reglog-register-form',
    validate,
})(ReglogRegister);
