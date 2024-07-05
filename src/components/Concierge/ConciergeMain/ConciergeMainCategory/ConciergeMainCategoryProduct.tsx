import React from 'react';
import Link from 'next/link';

import { BuyerTheCulttProduct } from '@/models/IBuyerTheCultt';
import { APP_ROUTE } from '@/constants/routes';

const BuyerTheCulttMainCategoryProduct: React.FC<BuyerTheCulttProduct> = ({ id, image, title }) => {
    return (
        <Link href={`${APP_ROUTE.concierge.product}/${id}`} className="buyer-thecultt-category-product">
            <div className="buyer-thecultt-category-product-image" style={{ backgroundImage: `url(${image})` }}></div>

            <h4 className="buyer-thecultt-category-product__title">{title}</h4>
        </Link>
    );
};

export default BuyerTheCulttMainCategoryProduct;
