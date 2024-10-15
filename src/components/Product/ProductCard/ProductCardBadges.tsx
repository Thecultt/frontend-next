'use client';

import React from 'react';

import { Badge } from '@/shared/ui';
import { Product } from '@/models/IProduct';
import { BadgeTheme } from '@/types/ui';

interface Props {
    productData: Product;
}

interface IBadge {
    title: string;
    theme?: BadgeTheme;
}

export const ProductCardBadges: React.FC<Props> = ({ productData }) => {
    const { from_boutique, from_parnter, price_drop } = productData;

    const getBadge = (): IBadge | null => {
        if (from_boutique || from_parnter) {
            return {
                title: 'Новое от брендов',
                theme: 'default',
            };
        }

        if (price_drop) {
            return {
                title: 'Цена снизилась',
                theme: 'green',
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
            <Badge className="product-card-cover__badge" theme={badge.theme}>
                {badge.title}
            </Badge>
        </div>
    );
};
