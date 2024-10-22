'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { Button } from '@/shared/ui';

export const OrderSidebar = () => {
    const { submitForm } = useFormikContext();

    return (
        <div>
            <Button label="Click" onClick={submitForm} />
        </div>
    );
};
