import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { RenderInput } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';

const CabinetSettingContactBlock: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    // const { user, isSending } = useTypedSelector(({ user }) => user);
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
        <form onSubmit={handleSubmit} className={getClassNames('cabinet-setting-block', { active: isEdit })}>
            <div className="cabinet-setting-block-title">
                <h3 className="cabinet-setting-block-title__title">Контактные данные</h3>

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
                        <Field component={RenderInput} label="Ваша почта" name="email" bgWhite disabled />
                    </div>

                    <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                        <Field
                            component={RenderInput}
                            name="phone"
                            label="Ваш номер телефона"
                            bgWhite
                            // {...createTextMask({
                            // 	pattern: "+9 999 999 99-99",
                            // 	guide: false,
                            // 	stripMask: false,
                            // })}
                        />
                    </div>

                    <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                        <Field
                            component={RenderInput}
                            name="username_telegram"
                            label="Укажите ваш ник в Telegram"
                            bgWhite
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'cabinet-setting-contact-form',
    // validate,
})(CabinetSettingContactBlock);
