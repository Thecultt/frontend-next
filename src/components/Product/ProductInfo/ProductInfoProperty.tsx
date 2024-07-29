import React from 'react';

interface Props {
    title: string;
    value: string;
    className?: string;
}

export const ProductInfoProperty: React.FC<Props> = ({ title, value, className = '' }) => (
    <p className={`product-info-property ${className}`}>
        <span className="product-info-property__title">{title}</span>
        {value}
    </p>
);
