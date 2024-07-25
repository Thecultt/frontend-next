'use client';

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

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
import { MEDIA_SIZES } from '@/constants/styles';

import { ProductInfoBottomSheet } from './ProductInfoBottomSheet';

interface Props {
    product: ProductPage;
    setBoutiquePopupVisible: (state: boolean) => void;
    setPartnerPopupVisible: (state: boolean) => void;
}

const ProductInfo: React.FC<Props> = ({ product, setBoutiquePopupVisible, setPartnerPopupVisible }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    return (
        <div className="product-content-info">
            <ProductInfoTitle
                product={product}
                setBoutiquePopupVisible={setBoutiquePopupVisible}
                setPartnerPopupVisible={setPartnerPopupVisible}
            />

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

            {!isMobile ? (
                <>
                    <ProductInfoState {...product} />
                    <ProductInfoDescription description={product.description} />
                    <ProductInfoParameters {...product} />
                </>
            ) : (
                <ProductInfoBottomSheet product={product} />
            )}

            <div className="product-content-info__auth-tabs">
                <ProductInfoAuth />
                <ProductInfoTabs />
            </div>
        </div>
    );
};

export default ProductInfo;
