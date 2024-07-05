import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { EXTERNAL_LINKS } from '@/constants/routes';
import validate from './validate';

const FooterEmailSubscribeForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    // initialize,
    // invalid,
    // submitting
}) => {
    return (
        <form onSubmit={handleSubmit} className="footer-email-form">
            <div className="footer-email-form-input">
                <Field
                    component={'input'}
                    className="footer-email-form-input__field"
                    placeholder="Ваша почта"
                    name="email"
                />

                <button className="footer-email-form-input__btn">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="1.46973" width="27" height="27" rx="13.5" stroke="#838383" />
                        <path
                            d="M11 20.9697L17 14.9697L11 8.96973"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="footer-email-form-radio">
                <div className="footer-email-form-radio-item">
                    <Field
                        component="input"
                        id={'footer-email-form-input-buyer'}
                        type="radio"
                        className="footer-email-form-radio-item__field"
                        value={'Prodavec'}
                        name="type"
                    />
                    {/* <input
						id={"footer-email-form-input-buyer"}
						type="radio"
						className="footer-email-form-radio-item__field"
						value={"Prodavec"}
						name="type"
					// checked={checked}
					// onChange={onChange}
					/> */}

                    <label htmlFor={'footer-email-form-input-buyer'} className="footer-email-form-radio-item__label">
                        <p className="footer-email-form-radio-item__label__text">Продавец</p>
                    </label>
                </div>

                <div className="footer-email-form-radio-item">
                    <Field
                        component="input"
                        id={'footer-email-form-input-seller'}
                        type="radio"
                        className="footer-email-form-radio-item__field"
                        value={'Pokupatel'}
                        name="type"
                    />
                    {/* <input
						id={"footer-email-form-input-seller"}
						type="radio"
						className="footer-email-form-radio-item__field"
						value={"Pokupatel"}
						name="type"
					// checked={checked}
					// onChange={onChange}
					/> */}

                    <label htmlFor={'footer-email-form-input-seller'} className="footer-email-form-radio-item__label">
                        <p className="footer-email-form-radio-item__label__text">Покупатель</p>
                    </label>
                </div>
            </div>

            <p className="footer-email-form__subtitle">
                Подписываясь на рассылку,{' '}
                <a href={EXTERNAL_LINKS.advertisingConsent} target="_blank" rel="noreferrer">
                    вы соглашаетесь получать
                </a>{' '}
                информационные письма и персональные предложения на указанную почту.
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'footer-email-form',
    validate,
})(FooterEmailSubscribeForm);
