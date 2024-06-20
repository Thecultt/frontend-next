import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Loader, RenderInput } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

import { validate } from './validate';

const ReglogRecoveryPassword: React.FC<{} & InjectedFormProps<{}, {}>> = ({ handleSubmit, invalid, submitting }) => {
    const { isSend } = useTypedSelector(({ recovery_password }) => recovery_password);

    return (
        <form className="reglog-content-form reglog-content-form-login" onSubmit={handleSubmit}>
            <h3 className="reglog-content-form__title">Забыли пароль?</h3>

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Новый пароль</h4>

                    <Field component={RenderInput} label="Новый пароль" name="password" type="password" />
                </div>

                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Повтор пароля</h4>

                    <Field component={RenderInput} label="Повтор пароля" name="password_repeat" type="password" />
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
                            disabled: invalid || submitting,
                        })}
                        disabled={invalid || submitting}
                    >
                        Войти в учётную запись
                    </button>
                )}
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'recovery-password-form',
    validate,
})(ReglogRecoveryPassword);
