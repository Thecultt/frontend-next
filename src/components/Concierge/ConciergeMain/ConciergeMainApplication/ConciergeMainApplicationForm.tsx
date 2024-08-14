import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { Loader, RenderTextarea, RenderInput } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { CONTACTS } from '@/constants/contacts';

import { validate } from './validate';

const ConciergeMainApplicationForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
}) => {
    const { isSendFormCustomProductSuccess } = useTypedSelector(({ concierge }) => concierge);

    const { isLoaded, user } = useAuthUser();

    React.useEffect(() => {
        if (isLoaded) {
            initialize({ name: `${user.name}`, phone: user.phone });
        }
    }, [isLoaded]);

    return (
        <form className="concierge-application-form" onSubmit={handleSubmit}>
            <h3 className="concierge-application-form__title">
                Нет нужного лота? <br /> Закажите его через нас
            </h3>

            <div className="concierge-application-form-input">
                <Field component={RenderInput} label="Имя" name="name" type="text" white />
            </div>

            <div className="concierge-application-form-input">
                <Field component={RenderInput} label="Контактный номер телефона" name="phone" type="text" white />
            </div>

            <div className="concierge-application-form-input">
                <Field component={RenderTextarea} label="Комментарий" name="comment" type="text" white />
            </div>

            <div className="concierge-application-form-btn">
                <button
                    className={getClassNames('btn concierge-application-form-btn__btn', {
                        loader: isSendFormCustomProductSuccess,
                    })}
                    disabled={isSendFormCustomProductSuccess || invalid || submitting}
                >
                    {isSendFormCustomProductSuccess ? <Loader /> : 'Отправить заявку'}
                </button>

                <a
                    href={CONTACTS.whatsappLinkConcierge}
                    target="__blank"
                    className="concierge-application-form-btn__social"
                >
                    <svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.48303" y="4.14844" width="48" height="48" rx="24" fill="#F2F5F4" />
                        <path
                            d="M36.2772 19.9911C35.2637 18.9724 34.0564 18.1647 32.7259 17.6152C31.3953 17.0656 29.9681 16.7851 28.5275 16.7901C22.4913 16.7901 17.5717 21.6851 17.5717 27.6911C17.5717 29.6161 18.0803 31.4861 19.031 33.1361L17.4833 38.79L23.2873 37.272C24.8903 38.141 26.6923 38.603 28.5275 38.603C34.5637 38.603 39.4833 33.7081 39.4833 27.7021C39.4833 24.7871 38.3446 22.0481 36.2772 19.9911ZM28.5275 36.755C26.8913 36.755 25.2883 36.315 23.8843 35.49L23.5526 35.292L20.1034 36.194L21.021 32.8501L20.7999 32.5091C19.8908 31.0647 19.4082 29.3952 19.4069 27.6911C19.4069 22.6971 23.4973 18.6271 28.5164 18.6271C30.9486 18.6271 33.237 19.5731 34.9506 21.2891C35.7991 22.1294 36.4715 23.129 36.9288 24.2299C37.3862 25.3307 37.6194 26.5109 37.6149 27.7021C37.637 32.6961 33.5466 36.755 28.5275 36.755ZM33.5245 29.9791C33.2481 29.8471 31.8994 29.1871 31.6561 29.0881C31.4019 29.0001 31.225 28.9561 31.037 29.2201C30.8491 29.4951 30.3295 30.1111 30.1747 30.2871C30.02 30.4741 29.8541 30.4961 29.5777 30.3531C29.3014 30.2211 28.4169 29.9241 27.3777 29.0001C26.5597 28.2741 26.0179 27.3831 25.8521 27.1081C25.6973 26.8331 25.83 26.6901 25.9737 26.5471C26.0953 26.4261 26.2501 26.2281 26.3828 26.0741C26.5154 25.9201 26.5707 25.7991 26.6592 25.6231C26.7476 25.4361 26.7034 25.2821 26.637 25.1501C26.5707 25.0181 26.0179 23.6761 25.7968 23.1261C25.5757 22.5981 25.3436 22.6641 25.1777 22.6531H24.6471C24.4592 22.6531 24.1717 22.7191 23.9174 22.9941C23.6742 23.2691 22.9667 23.9291 22.9667 25.2711C22.9667 26.6131 23.9506 27.9111 24.0833 28.0871C24.2159 28.2741 26.0179 31.0241 28.7597 32.2011C29.4119 32.4871 29.9205 32.6521 30.3185 32.7731C30.9707 32.9821 31.5677 32.9491 32.0431 32.8831C32.5737 32.8061 33.6682 32.2231 33.8893 31.5851C34.1215 30.9471 34.1215 30.4081 34.0441 30.2871C33.9667 30.1661 33.8009 30.1111 33.5245 29.9791Z"
                            fill="#285141"
                        />
                    </svg>
                </a>

                <a href={CONTACTS.tgHelp} target="__blank" className="concierge-application-form-btn__social">
                    <svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.48303" y="4.14844" width="48" height="48" rx="24" fill="#F2F5F4" />
                        <path
                            d="M28.483 16.79C22.411 16.79 17.483 21.718 17.483 27.79C17.483 33.862 22.411 38.79 28.483 38.79C34.555 38.79 39.483 33.862 39.483 27.79C39.483 21.718 34.555 16.79 28.483 16.79ZM33.587 24.27C33.422 26.008 32.707 30.232 32.344 32.179C32.19 33.004 31.882 33.279 31.596 33.312C30.958 33.367 30.474 32.894 29.858 32.487C28.89 31.849 28.34 31.453 27.405 30.837C26.316 30.122 27.02 29.726 27.647 29.088C27.812 28.923 30.628 26.36 30.683 26.129C30.6907 26.0941 30.6897 26.0577 30.6801 26.0232C30.6705 25.9887 30.6526 25.9571 30.628 25.931C30.562 25.876 30.474 25.898 30.397 25.909C30.298 25.931 28.758 26.954 25.755 28.978C25.315 29.275 24.919 29.429 24.567 29.418C24.171 29.407 23.423 29.198 22.862 29.011C22.169 28.791 21.63 28.67 21.674 28.285C21.696 28.087 21.971 27.889 22.488 27.68C25.7 26.283 27.834 25.359 28.901 24.919C31.959 23.643 32.586 23.423 33.004 23.423C33.092 23.423 33.301 23.445 33.433 23.555C33.543 23.643 33.576 23.764 33.587 23.852C33.576 23.918 33.598 24.116 33.587 24.27Z"
                            fill="#285141"
                        />
                    </svg>
                </a>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'concierge-form',
    validate,
})(ConciergeMainApplicationForm);
