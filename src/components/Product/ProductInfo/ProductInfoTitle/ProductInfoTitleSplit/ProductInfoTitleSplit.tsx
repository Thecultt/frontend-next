import React from 'react';

import { Popup, ProductInfoTitleSplitPopup } from '@/components';

interface ProductInfoTitleSplitProps {
    price: number;
}

const ProductInfoTitleSplit: React.FC<ProductInfoTitleSplitProps> = ({ price }) => {
    const [isStateSplitPopup, setIsStateSplitPopup] = React.useState(false);

    return (
        <div className="product-content-info-title-price-split">
            {/* @ts-ignore */}
            <yandex-pay-badge
                type="bnpl"
                amount={`${price}.00`}
                size="m"
                variant="detailed"
                color="primary"
                merchant-id="40d34cdd-8666-4829-9988-aaea1b87ed9a"
            />

            <div className="product-content-info-title-price-split-icon" onClick={() => setIsStateSplitPopup(true)}>
                <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.2194 10.9388V8.27214M8.2194 5.60547H8.22329M14.8861 8.27213C14.8861 11.954 11.9013 14.9388 8.2194 14.9388C4.5375 14.9388 1.55273 11.954 1.55273 8.27213C1.55273 4.59024 4.5375 1.60547 8.2194 1.60547C11.9013 1.60547 14.8861 4.59024 14.8861 8.27213Z"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <Popup state={isStateSplitPopup} setState={() => setIsStateSplitPopup(!isStateSplitPopup)}>
                <ProductInfoTitleSplitPopup
                    price={price}
                    onClosePopup={() => setIsStateSplitPopup(!isStateSplitPopup)}
                />
            </Popup>
        </div>
    );
};

export default ProductInfoTitleSplit;
