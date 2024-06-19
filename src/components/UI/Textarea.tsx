import React from 'react';
import { getClassNames } from '@/functions/getClassNames';

interface InputProps {
    name: string;
    label: string;
    bgWhite?: boolean;
}

const Textarea: React.FC<InputProps> = ({ name, label, bgWhite }) => {
    return (
        <div
            className={getClassNames('textarea', {
                bgWhite: !!bgWhite,
            })}
        >
            <textarea className="textarea__field" id={name} placeholder={label} />
        </div>
    );
};

export default Textarea;
