import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface Props {
    title: string;
    value: string | number;
    className?: string;
    column?: boolean;
}

export const ProductInfoProperty: React.FC<Props> = ({ title, value, column = false, className = '' }) => (
    <p
        className={getClassNames(`product-info-property ${className}`, {
            'product-info-property--column': column,
        })}
    >
        <span className="product-info-property__title">{title}:</span>
        <span className="product-info-property__value">{value}</span>
    </p>
);
