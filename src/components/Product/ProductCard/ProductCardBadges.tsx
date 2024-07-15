import React from 'react';

import { Badge } from '@/components';
import { Product } from '@/models/IProduct';

interface Props {
    productData: Product;
}

export const ProductCardBadges: React.FC<Props> = ({ productData }) => {
    const { from_boutique, from_parnter, price_drop } = productData;

    return (
        <div className="product-card-cover__badges">
            {from_boutique && <Badge className="product-card-cover__badge">Из бутика</Badge>}
            {from_parnter && <Badge className="product-card-cover__badge">От партнеров</Badge>}
            {price_drop && (
                <Badge className="product-card-cover__badge" isGreen>
                    Цена снизилась
                </Badge>
            )}
        </div>
    );
};
