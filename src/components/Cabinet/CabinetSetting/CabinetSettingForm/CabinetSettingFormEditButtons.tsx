'use client';

import React from 'react';

import { Button } from '@/shared/ui';
import { Noop } from '@/types/functions';

interface Props {
    title: string;
    isValid: boolean;
    dirty: boolean;
    isEdit: boolean;
    isLoading: boolean;
    onReset: Noop;
    setIsEdit: (value: boolean) => void;
}

const CabinetSettingFormEditButtons: React.FC<Props> = ({
    title,
    isValid,
    dirty,
    isEdit,
    isLoading,
    onReset,
    setIsEdit,
}) => {
    const handleReset = () => {
        onReset();
        setIsEdit(false);
    };

    return (
        <div className="cabinet-setting-block-title">
            <h3 className="cabinet-setting-block-title__title">{title}</h3>

            {isEdit ? (
                <div className="cabinet-setting-block-title__buttons">
                    <Button
                        type="submit"
                        label="Сохранить"
                        className="cabinet-setting-block-title__btn"
                        theme="inline"
                        disabled={!isValid || !dirty || isLoading}
                    />

                    <Button
                        label="Отменить"
                        className="cabinet-setting-block-title__btn"
                        theme="inline"
                        disabled={isLoading}
                        onClick={handleReset}
                    />
                </div>
            ) : (
                <Button
                    label="Изменить"
                    className="cabinet-setting-block-title__btn"
                    theme="inline"
                    disabled={isLoading}
                    onClick={() => setIsEdit(true)}
                />
            )}
        </div>
    );
};

export default CabinetSettingFormEditButtons;
