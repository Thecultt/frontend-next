import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface CheckboxProps {
    id?: string;
    label: string;
    checked?: boolean;
    onChange?: () => void;
    textEllipsis?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, textEllipsis = false, onChange }) => (
    <label className="checkbox-wrapper">
        <input type="checkbox" className="checkbox" checked={checked} onChange={onChange} />

        <p
            className={getClassNames('checkbox__label', {
                'checkbox__label--ellipsis': textEllipsis,
            })}
        >
            <span className="checkbox__label__text">{label}</span>
        </p>
    </label>
);

export default Checkbox;
