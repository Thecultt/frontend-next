import React from 'react';
import Link from 'next/link';

import { ConciergeProduct } from '@/models/IConcierge';
import { APP_ROUTE } from '@/constants/routes';

const ConciergeMainCatalogProduct: React.FC<ConciergeProduct> = ({ id, image, title }) => {
    return (
        <Link href={`${APP_ROUTE.concierge.product}/${id}`} className="concierge-catalog-products-product">
            <div
                className="concierge-catalog-products-product-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <h4 className="concierge-catalog-products-product__title">{title}</h4>
        </Link>
    );
};

export default ConciergeMainCatalogProduct;
