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
    ProductInfoConcierge,
    ProductInfoAuth,
    ProductInfoTabs,
} from '@/components';
import { MEDIA_SIZES } from '@/constants/styles';
import { Noop } from '@/types/functions';

import { ProductInfoBottomSheet } from './ProductInfoBottomSheet';

interface Props {
    product: ProductPage;
    onBoutiquePopupVisible: Noop;
    onPartnerPopupVisible: Noop;
}

const ProductInfo: React.FC<Props> = ({ product, onBoutiquePopupVisible, onPartnerPopupVisible }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    return (
        <div className="product-content-info">
            <ProductInfoTitle
                product={product}
                onBoutiquePopupVisible={onBoutiquePopupVisible}
                onPartnerPopupVisible={onPartnerPopupVisible}
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

            <ProductInfoExchange canBuy={!!product.availability && !product.is_trial} />

            {product.price >= 500000 && (!product.availability || product.is_trial) && (
                <ProductInfoConcierge article={product.article} />
            )}

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
