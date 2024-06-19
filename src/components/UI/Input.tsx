import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface InputProps {
    type: string;
    name: string;
    label: string;
    bgWhite?: boolean;
}

const Input: React.FC<InputProps> = ({ type, name, label, bgWhite }) => {
    return (
        <div
            className={getClassNames('input', {
                bgWhite: !!bgWhite,
            })}
        >
            <input type={type} className="input__field" id={name} placeholder={label} />
        </div>
    );
};

export default Input;
