import React from 'react';

import { Popup, ProductInfoTitleBoutiquePopup } from '@/components';

const ProductInfoTitleBoutique: React.FC = () => {
    const [isStateBoutiquePopup, setIsStateBoutiquePopup] = React.useState<boolean>(false);

    return (
        <div className="product-content-info-title-boutique">
            <div className="product-content-info-title-boutique-badge" onClick={() => setIsStateBoutiquePopup(true)}>
                <span className="product-content-info-title-boutique-badge__text">Из бутика</span>

                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#285141"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <Popup state={isStateBoutiquePopup} setState={() => setIsStateBoutiquePopup(!isStateBoutiquePopup)}>
                <ProductInfoTitleBoutiquePopup />
            </Popup>
        </div>
    );
};

export default ProductInfoTitleBoutique;
