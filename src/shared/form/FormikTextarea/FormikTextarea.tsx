'use client';

import React from 'react';
import { useField } from 'formik';

import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { TextareaProps } from '@/types/ui';

interface Props extends Omit<TextareaProps, 'value' | 'onChange' | 'name'> {
    name: string;
}

export const FormikTextarea: React.FC<Props> = ({ name, error: errorMessage, ...props }) => {
    const [field, { error, touched }] = useField(name);

    return <Textarea {...field} {...props} error={touched && error ? error : errorMessage} />;
};
