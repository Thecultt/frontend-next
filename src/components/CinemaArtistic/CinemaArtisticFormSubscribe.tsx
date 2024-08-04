import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import validate from './validate';

const CinemaArtisticFormSubscribe: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    submitting,
    pristine,
    submitSucceeded,
}) => {
    return (
        <section className="cinema-artistic-auction">
            <div className="container">
                <div className="cinema-artistic-auction-wrapper">
                    <h2 className="cinema-artistic-auction__title">АУКЦИОН</h2>

                    <p className="cinema-artistic-auction__subtitle">
                        15% средств, вырученных на онлайн-аукционе, будут перечислены в культурно-благотворительный фонд
                        Action!
                    </p>

                    <p className="cinema-artistic-auction__description">
                        Фонд Action! Светланы Бондарчук и&nbsp;Евгении Поповой объединяет известных российских
                        кинематографистов и&nbsp;меценатов для помощи детям и&nbsp;взрослым, попавшим в&nbsp;сложную
                        ситуацию. При участии фонда уже более 10&nbsp;лет проводятся благотворительные киновечера: для
                        них режиссеры бесплатно снимают короткометражки с&nbsp;участием признанных звезд кино. Все
                        вырученные средства поступают в&nbsp;благотворительные организации.
                    </p>

                    {submitSucceeded ? (
                        <div className="cinema-artistic-auction-form-success">
                            <p className="cinema-artistic-auction-form__subbtn">
                                Подпишитесь на рассылку, чтобы получить уведомление о начале аукциона.
                            </p>

                            <button
                                className="cinema-artistic__btn white cinema-artistic-auction-form-success__btn"
                                disabled
                            >
                                ПОДПИСКА ОФОРМЛЕНА
                            </button>

                            <p className="cinema-artistic-auction-form-success__subtitle">
                                Мы пришлём уведомление о начале аукциона.
                            </p>
                        </div>
                    ) : (
                        <form className="cinema-artistic-auction-form" onSubmit={handleSubmit}>
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
                                className="cinema-artistic__btn white cinema-artistic-auction-form__btn"
                                disabled={invalid || submitting || pristine}
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default reduxForm<{}, {}>({
    form: 'cinema-artistic-auction-form',
    validate,
})(CinemaArtisticFormSubscribe);
