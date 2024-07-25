'use client';

import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

import { ProductPage } from '@/models/IProduct';
import NoSsr from '@/components/NoSsr/NoSsr';
import { ProductInfoDescription, ProductInfoParameters, ProductInfoState } from '@/components';

interface Props {
    product: ProductPage;
}

export const ProductInfoBottomSheet: React.FC<Props> = ({ product }) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <button className="product-content-info-button" onClick={() => setVisible(true)}>
                Информация о товаре
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="#070707"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <NoSsr>
                <BottomSheet open={visible} onDismiss={() => setVisible(false)}>
                    <div className="product-content-info-bottom-sheet">
                        <ProductInfoState {...product} />
                        <ProductInfoDescription description={product.description} />
                        <ProductInfoParameters {...product} />
                    </div>
                </BottomSheet>
            </NoSsr>
        </>
    );
};
