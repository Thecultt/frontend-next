'use client';

import React from 'react';

import { Badge } from '@/components';
import { Product } from '@/models/IProduct';

interface Props {
    productData: Product;
}

export const ProductCardBadges: React.FC<Props> = ({ productData }) => {
    const { from_boutique, from_parnter, price_drop } = productData;

    const getBadge = () => {
        if (from_boutique) {
            return {
                title: 'Из бутика',
                isGreen: false,
            };
        }

        if (from_parnter) {
            return {
                title: 'От партнеров',
                isGreen: false,
            };
        }

        if (price_drop) {
            return {
                title: 'Цена снизилась',
                isGreen: true,
            };
        }

        return null;
    };

    const badge = getBadge();

    if (!badge) {
        return null;
    }

    return (
        <div className="product-card-cover__badges">
            <Badge className="product-card-cover__badge" isGreen={badge.isGreen}>
                {badge.title}
            </Badge>
        </div>
    );
};
