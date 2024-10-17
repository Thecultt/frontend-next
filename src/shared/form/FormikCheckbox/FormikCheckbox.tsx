'use client';

import React from 'react';
import { useField } from 'formik';

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { CheckboxProps } from '@/types/ui';

interface Props extends Omit<CheckboxProps, 'name' | 'checked' | 'onChange'> {
    name: string;
}

export const FormikCheckbox: React.FC<Props> = ({ name, ...props }) => {
    const [{ onChange: _, ...field }, { error, touched }, { setValue, setTouched }] = useField<boolean>({
        name,
        type: 'checkbox',
    });

    const handleChange = () => {
        !touched && setTouched(true);
        setValue(!field.value);
    };

    return <Checkbox {...field} {...props} error={touched && error ? error : undefined} onChange={handleChange} />;
};
