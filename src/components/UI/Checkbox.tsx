import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface CheckboxProps {
    id?: string;
    label: string;
    checked?: boolean;
    onChange?: () => void;
    textEllipsis?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, textEllipsis = false, onChange }) => {
    return (
        <div className="checkbox-wrapper">
            <input id={id} type="checkbox" className="checkbox" checked={checked} onChange={onChange} />

            <label
                htmlFor={id}
                className={getClassNames('checkbox__label', {
                    'checkbox__label--ellipsis': textEllipsis,
                })}
            >
                <p className="checkbox__label__text">{label}</p>
            </label>
        </div>
    );
};

export default Checkbox;
