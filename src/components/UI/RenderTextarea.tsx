import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { getClassNames } from '@/functions/getClassNames';

interface RenderTextareaProps extends WrappedFieldProps {
    name: string;
    label: string;
    bgWhite?: boolean;
    white?: boolean;
}

const RenderTextarea: React.FC<RenderTextareaProps> = ({ label, input, meta: { touched, error }, bgWhite, white }) => {
    return (
        <div
            className={getClassNames('textarea', {
                bgWhite: !!bgWhite,
                white: !!white,
            })}
        >
            {white && <span className="textarea__title">{label}</span>}

            <textarea {...input} className="textarea__field" placeholder={label} />
        </div>
    );
};

export default RenderTextarea;
