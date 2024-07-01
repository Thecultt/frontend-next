import React from 'react';
import Link from 'next/link';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Loader, RenderInput, RenderRadioSelect } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';

import validate from './validate';

const SubscribeEmailForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const { isSending } = useTypedSelector(({ subscribe_email }) => subscribe_email);

    React.useEffect(() => {
        initialize({ type: 'Prodavec' });
    }, []);

    return (
        <form className="subscribe-email-text-form" onSubmit={handleSubmit}>
            <div className="subscribe-email-text-form-input-wrapper">
                <div className="subscribe-email-text-form-input">
                    <Field component={RenderInput} name="email" label="Ваша почта" type="text" />
                </div>

                {isSending ? (
                    <button className="btn subscribe-email-text-form-input__btn" disabled>
                        <Loader />
                    </button>
                ) : (
                    <button
                        className={getClassNames('btn subscribe-email-text-form-input__btn', {
                            disabled: invalid || pristine || submitting,
                        })}
                        disabled={invalid || pristine || submitting}
                    >
                        Получить гайд
                    </button>
                )}
            </div>

            <div className="subscribe-email-text-form-type-wrapper">
                <div className="subscribe-email-text-form-type">
                    <Field
                        component={RenderRadioSelect}
                        type="radio"
                        name="type"
                        label="Продавец"
                        value="Prodavec"
                        small
                    />
                </div>

                <div className="subscribe-email-text-form-type">
                    <Field
                        component={RenderRadioSelect}
                        type="radio"
                        name="type"
                        label="Покупатель"
                        value="Pokupatel"
                        small
                    />
                </div>
            </div>

            <p className="subscribe-email-text-form__text">
                Подписываясь на рассылку, вы соглашаетесь с условиями{' '}
                <Link href={APP_ROUTE.help.userAgreement}>пользовательского соглашения</Link>
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'subscribe-email-form',
    validate,
})(SubscribeEmailForm);
