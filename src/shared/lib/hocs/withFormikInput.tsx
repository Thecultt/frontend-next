'use client';

import React from 'react';
import { useField } from 'formik';

interface IName {
    name: string;
}

export const withFormikInput = <P extends object>(Component: React.ComponentType<P>) => {
    const WrappedComponent: React.FC<Omit<P, 'value' | 'name' | 'onChange'> & IName> = ({ name, ...props }) => {
        const [field, { error, touched }, { setValue }] = useField<string>(name);

        const handleChange = (value: string) => {
            setValue(value);
        };

        return (
            <Component
                {...field}
                {...(props as P)}
                onChange={handleChange}
                error={touched && error ? error : undefined}
            />
        );
    };

    return WrappedComponent;
};
