'use client';

import React from 'react';
import { useField } from 'formik';

import { NewSelect } from '@/components';
import { SelectProps } from '@/types/ui';

interface Props extends Omit<SelectProps, 'value' | 'onChange'> {
    name: string;
}

// TODO check @ts-ignore

export const FormikSelect: React.FC<Props> = ({ name, error: errorMessage, ...props }) => {
    const [field, { error, touched }, { setValue, setTouched }] = useField<string | string[]>(name);

    const handleChange = (value: string | string[]) => {
        !touched && setTouched(true);
        setValue(value);
    };

    return (
        // @ts-ignore
        <NewSelect
            {...props}
            value={field.value}
            error={touched && error ? error : errorMessage}
            onChange={handleChange}
        />
    );
};
