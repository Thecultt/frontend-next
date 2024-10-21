'use client';

import React from 'react';
import { useField } from 'formik';

import { Radio } from '@/shared/ui/Radio/Radio';
import { RadioProps } from '@/types/ui';

interface Props extends Omit<RadioProps, 'name' | 'checked' | 'onChange'> {
    name: string;
}

export const FormikRadio: React.FC<Props> = ({ name, value, ...props }) => {
    const [{ onChange: _, ...field }, { error: _e }, { setValue }] = useField({
        name,
        value,
        type: 'radio',
    });

    const handleChange = () => {
        setValue(value);
    };

    return <Radio {...props} value={value} onChange={handleChange} checked={field.checked} />;
};
