import React from 'react';

interface Props {
    title: string;
    value: string;
}

export const CinemaAuctionProductProperty: React.FC<Props> = ({ title, value }) => (
    <p className="cinema-auction-product-property">
        <span className="cinema-auction-product-property__title">{title}:</span> {value}
    </p>
);
