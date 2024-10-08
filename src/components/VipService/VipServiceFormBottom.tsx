import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RenderInput, Loader } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';

import validate from './validate';

const VipServiceFormBottom: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
}) => {
    const { isSending } = useTypedSelector(({ vipservice }) => vipservice);

    return (
        <form className="vipservice-form" onSubmit={handleSubmit}>
            <div className="vipservice-form-content">
                <h2 className="vipservice-form-content__title">Закажите VIP-сервис в один клик</h2>

                <div className="vipservice-form-content-input-wrapper">
                    <div className="vipservice-form-content-input">
                        <Field
                            component={RenderInput}
                            label="Ваш телефон"
                            name="phone"
                            type="text"
                            // {...createTextMask({
                            // 	pattern: "+9 999 999 99-99",
                            // 	guide: false,
                            // 	stripMask: false,
                            // })}
                        />
                    </div>
                    <div className="vipservice-form-content-input">
                        <Field component={RenderInput} label="Ваше имя" name="name" type="text" />
                    </div>
                </div>

                <p className="vipservice-form-content__description">
                    Нажимая на кнопку, вы принимаете условия{' '}
                    <Link href={APP_ROUTE.help.userAgreement}>пользовательского соглашения</Link> и{' '}
                    <Link href={APP_ROUTE.help.publicOffer}>публичной оферты</Link>.
                </p>

                {isSending ? (
                    <button className="btn disabled loader vipservice-form-content__btn" disabled>
                        <Loader />
                    </button>
                ) : (
                    <button
                        className={getClassNames('btn vipservice-form-content__btn', {
                            disabled: invalid || submitting || pristine,
                        })}
                        disabled={invalid || submitting || pristine}
                    >
                        Отправить заявку
                    </button>
                )}
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'vipservice-form-bottom',
    validate,
})(VipServiceFormBottom);
