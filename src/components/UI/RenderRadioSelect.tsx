import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface RenderRadioSelectProps extends WrappedFieldProps {
    label: string;
    description: string;
}

const RenderRadioSelect: React.FC<RenderRadioSelectProps> = ({ input, meta, label, description }) => {
    return (
        <div className="radio-wrapper">
            <div className="radio">
                <input {...input} id={`${input.name}-${label}`} className="radio__field" type="radio" />

                <label htmlFor={`${input.name}-${label}`} className="radio__label">
                    <p className="radio__label__text">{label}</p>
                </label>
            </div>

            {input.checked && description !== '' && description ? (
                <p className="radio__description" dangerouslySetInnerHTML={{ __html: description }}></p>
            ) : null}
        </div>
    );
};

export default RenderRadioSelect;
