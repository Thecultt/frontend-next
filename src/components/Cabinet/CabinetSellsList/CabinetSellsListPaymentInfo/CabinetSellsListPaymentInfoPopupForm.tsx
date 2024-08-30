import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';

import { Loader, RenderCheckbox, RenderInput } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';

import { validate } from './validate';

const CabinetSellsListPaymentInfoPopupForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
    initialize,
}) => {
    // const { user, isLoaded, isSending } = useTypedSelector(({ user }) => user);
    const { isLoaded, isSending, user } = useAuthUser();

    React.useEffect(() => {
        if (isLoaded) {
            initialize({ email: user.email, confirm: true });
        }
    }, [isLoaded]);

    return (
        <form className="cabinet-sells-list-payment-info-popup" onSubmit={handleSubmit}>
            <h3 className="cabinet-sells-list-payment-info-popup__title">Реквизиты</h3>

            <p className="cabinet-sells-list-payment-info-popup__subtitle">
                Введите паспортные и банковские данные для формирования заявки на выплату
            </p>

            <div className="cabinet-sells-list-payment-info-popup-block">
                <div className="cabinet-sells-list-payment-info-popup-block-input">
                    <Field component={RenderInput} name="email" label="Ваша почта" disabled />
                </div>
            </div>

            <div className="cabinet-sells-list-payment-info-popup-block">
                <h4 className="cabinet-sells-list-payment-info-popup-block__title">
                    Паспортные данные
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6516_213682)">
                            <path
                                d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6516_213682">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="message-info-wrapper">
                        <span className="message-info">
                            Паспортные и банковские данные должны соответствовать указанным в заявке ФИО
                        </span>
                    </span>
                </h4>

                <div className="cabinet-sells-list-payment-info-popup-block-input-wrapper">
                    <div className="cabinet-sells-list-payment-info-popup-block-input" style={{ width: '100%' }}>
                        <Field component={RenderInput} name="passport" label="Серия и номер паспорта" />
                    </div>

                    <div
                        className="cabinet-sells-list-payment-info-popup-block-input"
                        style={{ width: 'calc(50% - 7.5px)' }}
                    >
                        <Field component={RenderInput} name="name" label="Имя" />
                    </div>

                    <div
                        className="cabinet-sells-list-payment-info-popup-block-input"
                        style={{ width: 'calc(50% - 7.5px)' }}
                    >
                        <Field component={RenderInput} name="middlename" label="Фамилия" />
                    </div>

                    <div
                        className="cabinet-sells-list-payment-info-popup-block-input"
                        style={{ width: 'calc(50% - 7.5px)', marginBottom: 0 }}
                    >
                        <Field component={RenderInput} name="lastname" label="Отчество" />
                    </div>

                    <div
                        className="cabinet-sells-list-payment-info-popup-block-input"
                        style={{ width: 'calc(50% - 7.5px)', marginBottom: 0 }}
                    >
                        <Field
                            component={RenderInput}
                            label="Дата рождения"
                            name="dr"
                            {...createTextMask({
                                pattern: '99.99.9999',
                                guide: false,
                                stripMask: false,
                            })}
                        />
                    </div>
                </div>
            </div>

            <div className="cabinet-sells-list-payment-info-popup-block">
                <h4 className="cabinet-sells-list-payment-info-popup-block__title">Банковские реквизиты</h4>

                <div className="cabinet-sells-list-payment-info-popup-block-input-wrapper">
                    <div className="cabinet-sells-list-payment-info-popup-block-input" style={{ width: '100%' }}>
                        <Field
                            component={RenderInput}
                            name="bik"
                            label="БИК"
                            {...createTextMask({
                                pattern: '999999999',
                                guide: false,
                                stripMask: false,
                            })}
                        />
                    </div>

                    <div className="cabinet-sells-list-payment-info-popup-block-input" style={{ width: '100%' }}>
                        <Field
                            component={RenderInput}
                            name="inn"
                            label="Ваш ИНН"
                            {...createTextMask({
                                pattern: '999999999999',
                                guide: false,
                                stripMask: false,
                            })}
                        />
                    </div>

                    <div
                        className="cabinet-sells-list-payment-info-popup-block-input"
                        style={{ width: '100%', marginBottom: 0 }}
                    >
                        <Field
                            component={RenderInput}
                            name="rs"
                            label="Расчетный счет"
                            {...createTextMask({
                                pattern: '99999999999999999999',
                                guide: false,
                                stripMask: false,
                            })}
                        />
                    </div>
                </div>
            </div>

            <div className="cabinet-sells-list-payment-info-popup-btn">
                <div className="cabinet-sells-list-payment-info-popup-btn-checkbox">
                    <Field
                        component={RenderCheckbox}
                        name="confirm"
                        label="Подтверждаю, что введенные данные соответствуют паспортным."
                    />
                </div>

                <button
                    className={getClassNames('btn cabinet-sells-list-payment-info-popup-btn__btn', {
                        disabled: invalid || pristine || submitting,
                        loader: isSending,
                    })}
                    disabled={invalid || pristine || submitting}
                >
                    {isSending ? <Loader /> : 'Сохранить данные'}
                </button>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'cabinet-sells-list-payment-info-form',
    validate,
})(CabinetSellsListPaymentInfoPopupForm);
