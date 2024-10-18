'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { Button } from '@/shared/ui';

interface Props {
    title: string;
    isValid: boolean;
    dirty: boolean;

    isEdit: boolean;
    setIsEdit: (value: boolean) => void;
}

const CabinetSettingFormEditButtons: React.FC<Props> = ({ title, isValid, dirty, isEdit, setIsEdit }) => {
    return (
        <div className="cabinet-setting-block-title">
            <h3 className="cabinet-setting-block-title__title">{title}</h3>

            {isEdit ? (
                dirty ? (
                    <Button
                        label="Сохранить"
                        type="submit"
                        className={getClassNames('cabinet-setting-block-title__btn', {
                            disabled: !isValid,
                        })}
                        theme="inline"
                    />
                ) : (
                    <Button
                        label="Отменить"
                        type="button"
                        className="cabinet-setting-block-title__btn"
                        onClick={() => setIsEdit(false)}
                        theme="inline"
                    />
                )
            ) : (
                <Button
                    label="Изменить"
                    type="button"
                    className="cabinet-setting-block-title__btn"
                    onClick={() => setIsEdit(true)}
                    theme="inline"
                />
            )}
        </div>
    );
};

export default CabinetSettingFormEditButtons;
