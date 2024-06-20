import React from 'react';

import { ProductPage } from '@/models/IProduct';
import {
    ProductInfoTitle,
    ProductInfoExchange,
    ProductInfoState,
    ProductInfoDescription,
    ProductInfoParameters,
    ProductInfoAuth,
    ProductInfoTabs,
} from '@/components';

type ProductInfoProps = ProductPage;

const ProductInfo: React.FC<ProductInfoProps> = (product) => {
    return (
        <div className="product-content-info">
            <ProductInfoTitle {...product} article={product.article} />

            {/* {product.availability ? (
				<>
					<ProductInfoExchange />

					<ProductInfoState {...product} />

					{product.description && product.description !== "" ? < ProductInfoDescription {...product} /> : null}

					<ProductInfoParameters {...product} />
				</>
			) : null} */}

            {/* <ProductInfoParametersSize {...product} /> */}

            <ProductInfoExchange />

            <ProductInfoState {...product} />

            {product.description && product.description !== '' ? <ProductInfoDescription {...product} /> : null}

            <ProductInfoParameters {...product} />

            <ProductInfoAuth />

            <ProductInfoTabs />
        </div>
    );
};

export default ProductInfo;
