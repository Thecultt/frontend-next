'use client';

import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';

import { RenderInput } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';

const CabinetSettingPaymentBlock: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const {
        isSending,
        user: {
            dr,
            pasport,
            inn,
            bik,
            fullname,
            rs,
            issued_by,
            issued_code,
            issued_date,
            place_of_birth,
            registration_address,
            citizenship,
        },
    } = useAuthUser();

    const [state, setState] = React.useState(!!pasport);
    const [isEdit, setIsEdit] = React.useState(!pasport);

    React.useEffect(() => {
        initialize({
            dr,
            pasport,
            inn,
            bik,
            fullname,
            rs,
            issued_by,
            issued_code,
            issued_date,
            place_of_birth,
            registration_address,
            citizenship,
        });
    }, [isEdit]);

    const toggleState = () => {
        setState(!state);
    };

    React.useEffect(() => {
        if (!isSending) {
            setIsEdit(false);
        }
    }, [isSending]);

    return (
        <form
            onSubmit={handleSubmit}
            className={getClassNames('cabinet-setting-block', {
                active: state,
            })}
        >
            <div className="cabinet-setting-block-title">
                <h3 className="cabinet-setting-block-title__title">Реквизиты получателя</h3>

                {state ? (
                    isEdit ? (
                        <>
                            <button
                                type="submit"
                                className={getClassNames('cabinet-setting-block-title__btn', {
                                    disabled: invalid || pristine || submitting,
                                })}
                            >
                                Сохранить
                            </button>

                            <button
                                type="button"
                                className="cabinet-setting-block-title__btn"
                                onClick={() => setIsEdit(!isEdit)}
                            >
                                Отменить
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            className="cabinet-setting-block-title__btn"
                            onClick={() => setIsEdit(true)}
                        >
                            Изменить
                        </button>
                    )
                ) : null}
            </div>

            {state ? (
                <div
                    className={getClassNames('cabinet-setting-block-form', {
                        active: isEdit,
                    })}
                >
                    <div className="cabinet-setting-block-form-input-wrapper">
                        <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                            <Field
                                component={RenderInput}
                                name="pasport"
                                label="Серия и номер паспорта"
                                bgWhite
                                {...createTextMask({
                                    pattern: '9999 999999',
                                    guide: false,
                                    stripMask: false,
                                })}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                            <Field
                                component={RenderInput}
                                name="bik"
                                label="БИК банка"
                                bgWhite
                                {...createTextMask({
                                    pattern: '999999999',
                                    guide: false,
                                    stripMask: false,
                                })}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                            <Field
                                component={RenderInput}
                                name="inn"
                                label="ИНН получателя"
                                bgWhite
                                {...createTextMask({
                                    pattern: '999999999999',
                                    guide: false,
                                    stripMask: false,
                                })}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                            <Field
                                component={RenderInput}
                                name="rs"
                                label="Расчетный счёт"
                                bgWhite
                                {...createTextMask({
                                    pattern: '99999999999999999999',
                                    guide: false,
                                    stripMask: false,
                                })}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                            <Field component={RenderInput} name="issued_by" label="Кем выдан паспорт" bgWhite />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                            <Field
                                component={RenderInput}
                                name="issued_date"
                                label="Дата выдачи паспорта"
                                bgWhite
                                {...createTextMask({
                                    pattern: '99.99.9999',
                                    guide: false,
                                    stripMask: false,
                                })}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                            <Field
                                component={RenderInput}
                                name="issued_code"
                                label="Код подразделения"
                                bgWhite
                                {...createTextMask({
                                    pattern: '999-999',
                                    guide: false,
                                    stripMask: false,
                                })}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                            <Field component={RenderInput} name="place_of_birth" label="Место рождения" bgWhite />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                            <Field
                                component={RenderInput}
                                label="Дата рождения"
                                name="dr"
                                bgWhite
                                {...createTextMask({
                                    pattern: '99.99.9999',
                                    guide: false,
                                    stripMask: false,
                                })}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                            <Field component={RenderInput} label="Гражданство" name="citizenship" bgWhite />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                            <Field
                                component={RenderInput}
                                label="Адрес регистрации"
                                name="registration_address"
                                bgWhite
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <button className="cabinet-setting-block-form-add__btn" onClick={toggleState}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="30" height="30" rx="6" fill="#F7F4F0" />
                        <path
                            d="M15 8.5V22.5"
                            stroke="#838383"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 15.5H22"
                            stroke="#838383"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Добавить реквизиты для выплат
                </button>
            )}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'cabinet-setting-payment-form',
    // validate,
})(CabinetSettingPaymentBlock);
