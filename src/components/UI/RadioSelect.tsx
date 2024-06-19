import React from 'react';
import { v4 } from 'uuid';

interface RadioSelectProps {
    label: string;
    name: string;
}

const RadioSelect: React.FC<RadioSelectProps> = ({ label, name }) => {
    const id = v4();

    return (
        <div className="radio-wrapper">
            <input
                id={id}
                type="radio"
                className="radio"
                name={name}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //     onChange && onChange(e.target.checked)
                // }
                // checked={checked}
            />

            <label htmlFor={id} className="radio__label">
                <p className="radio__label__text">{label}</p>
            </label>
        </div>
    );
};

export default RadioSelect;
