'use client';

import React from 'react';
import { useField } from 'formik';

import { TextareaProps } from '@/types/ui';
import { NewTextarea } from '@/components';

interface Props extends Omit<TextareaProps, 'name'> {
    name: string;
}

export const FormikTextarea: React.FC<Props> = ({ name, error: errorMessage, ...props }) => {
    const [field, { error, touched }] = useField(name);

    return <NewTextarea {...field} {...props} error={touched && error ? error : errorMessage} />;
};
