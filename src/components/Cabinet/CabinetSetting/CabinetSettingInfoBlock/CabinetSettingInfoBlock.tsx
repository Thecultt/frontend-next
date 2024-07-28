'use client';

import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';

import { RenderInput, RenderRadioSelect } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { GENDERS } from '@/constants/catalog';

import { validate } from './validate';

const CabinetSettingInfoBlock: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    const { isSending, user } = useAuthUser();

    React.useEffect(() => {
        initialize(user);
    }, [isEdit]);

    React.useEffect(() => {
        if (!isSending) {
            setIsEdit(false);
        }
    }, [isSending]);

    return (
        <form
            onSubmit={handleSubmit}
            className={getClassNames('cabinet-setting-block', {
                active: isEdit,
            })}
        >
            <div className="cabinet-setting-block-title">
                <h3 className="cabinet-setting-block-title__title">Основные данные</h3>

                {isEdit ? (
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
                            onClick={() => setIsEdit(false)}
                        >
                            Отменить
                        </button>
                    </>
                ) : (
                    <button type="submit" className="cabinet-setting-block-title__btn" onClick={() => setIsEdit(true)}>
                        Изменить
                    </button>
                )}
            </div>

            <div
                className={getClassNames('cabinet-setting-block-form', {
                    active: isEdit,
                })}
            >
                <div className="cabinet-setting-block-form-input-wrapper">
                    <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                        <Field component={RenderInput} label="Имя" name="name" bgWhite />
                    </div>

                    <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                        <Field component={RenderInput} label="Фамилия" name="lastname" bgWhite />
                    </div>

                    <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                        <Field component={RenderInput} label="Отчество" name="middlename" bgWhite />
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
                </div>

                <div className="cabinet-setting-block-form-radio-wrapper">
                    <div className="cabinet-setting-block-form-radio">
                        <Field
                            component={RenderRadioSelect}
                            type="radio"
                            label={GENDERS.female}
                            name="gender"
                            value={GENDERS.female}
                        />
                    </div>
                    <div className="cabinet-setting-block-form-radio">
                        <Field
                            component={RenderRadioSelect}
                            type="radio"
                            label={GENDERS.male}
                            name="gender"
                            value={GENDERS.male}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'cabinet-setting-info-form',
    validate,
})(CabinetSettingInfoBlock);
