import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';

import validate from './validate';

interface Props {
    dark?: boolean;
}

type CinemaArtisticFormSubscribeProps = Props & InjectedFormProps<{}, {}>;

const CinemaArtisticFormSubscribe: React.FC<CinemaArtisticFormSubscribeProps> = ({
    handleSubmit,
    invalid,
    submitting,
    submitSucceeded,
    initialize,
    dark = false,
}) => {
    const { isLoaded, user } = useAuthUser();

    React.useEffect(() => {
        if (isLoaded && user.email) {
            initialize({ email: user.email });
        }
    }, [isLoaded]);

    return submitSucceeded ? (
        <div
            className={getClassNames('cinema-artistic-auction-form-success', {
                dark,
            })}
        >
            <p className="cinema-artistic-auction-form__subbtn">
                Подпишитесь на рассылку, чтобы получить уведомление о начале аукциона.
            </p>

            <button
                className={getClassNames('cinema-artistic__btn cinema-artistic-auction-form-success__btn', {
                    white: !dark,
                })}
                disabled
            >
                ПОДПИСКА ОФОРМЛЕНА
            </button>

            <p className="cinema-artistic-auction-form-success__subtitle">Мы пришлём уведомление о начале аукциона.</p>
        </div>
    ) : (
        <form
            className={getClassNames('cinema-artistic-auction-form', {
                dark,
            })}
            onSubmit={handleSubmit}
        >
            <p className="cinema-artistic-auction-form__subbtn">
                Подпишитесь на рассылку, чтобы получить уведомление о начале аукциона.
            </p>

            <div className="cinema-artistic-auction-form-input">
                <Field
                    component="input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="cinema-artistic-auction-form-input__field"
                />
            </div>

            <button
                className={getClassNames('cinema-artistic__btn cinema-artistic-auction-form__btn', {
                    white: !dark,
                })}
                disabled={invalid || submitting}
            >
                ПОДПИСАТЬСЯ
            </button>

            <p className="cinema-artistic-auction-form__policy">
                Подписываясь на&nbsp;рассылку,{' '}
                <a
                    href="https://storage.yandexcloud.net/the-cultt-docs/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B0%D1%83%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0.docx"
                    target="__blank"
                >
                    вы&nbsp;соглашаетесь получать
                </a>{' '}
                информационные письма и&nbsp;персональные предложения на&nbsp;указанную почту.
            </p>
        </form>
    );
};

export default reduxForm<{}, Props>({
    form: 'cinema-artistic-auction-form',
    validate,
})(CinemaArtisticFormSubscribe);
