import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import { getClassNames } from '@/functions/getClassNames';

interface CheckboxProps extends WrappedFieldProps {
    label: string;
    small?: boolean;
    gray?: boolean;
}

const RenderCheckbox: React.FC<CheckboxProps> = ({ label, input, small, gray }) => (
    <label className="checkbox-wrapper">
        <input
            {...input}
            type="checkbox"
            className={getClassNames('checkbox', {
                small: !!small,
                gray: !!gray,
            })}
        />

        <p
            className={getClassNames('checkbox__label', {
                small: !!small,
                gray: !!gray,
            })}
        >
            <span className="checkbox__label__text" dangerouslySetInnerHTML={{ __html: label }} />
        </p>
    </label>
);

export default RenderCheckbox;
