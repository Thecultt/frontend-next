'use client';

import React from 'react';
import { useField } from 'formik';

import { InputProps } from '@/types/ui';
import { NewInput } from '@/components';

interface Props extends Omit<InputProps, 'value' | 'onChange' | 'name'> {
    name: string;
}

export const FormikInput: React.FC<Props> = ({ name, error: errorMessage, ...props }) => {
    const [field, { error, touched }] = useField(name);

    return <NewInput {...field} {...props} error={touched && error ? error : errorMessage} />;
};
