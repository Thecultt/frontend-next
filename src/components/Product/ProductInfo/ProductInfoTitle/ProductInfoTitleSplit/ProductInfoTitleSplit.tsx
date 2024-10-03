import React from 'react';

import { ProductInfoTitleSplitPopup } from '@/components';
import { YANDEX_SPLIT_MERCHANT_ID } from '@/constants/env';
import { getClassNames } from '@/functions/getClassNames';
import { usePopupInfo } from '@/hooks/usePopupInfo';

interface ProductInfoTitleSplitProps {
    price: number;
    disabled?: boolean;
}

const ProductInfoTitleSplit: React.FC<ProductInfoTitleSplitProps> = ({ price, disabled = false }) => {
    const { openPopupInfo } = usePopupInfo();

    const openSplitPopup = () => {
        openPopupInfo({
            content: <ProductInfoTitleSplitPopup price={price} />,
            btn: { label: 'Вернуться к товару' },
        });
    };

    return (
        <div
            className={getClassNames('product-content-info-title-split', {
                'product-content-info-title-split--disabled': disabled,
            })}
            onClick={openSplitPopup}
        >
            {/* @ts-ignore */}
            <yandex-pay-badge
                type="bnpl"
                amount={`${price}.00`}
                size="m"
                variant="detailed"
                color="primary"
                merchant-id={YANDEX_SPLIT_MERCHANT_ID}
                class="product-content-info-title-split__badge"
            />

            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="product-content-info-title-split__icon"
            >
                <path
                    d="M7.2395 9.82789V7.50006M7.2395 5.17223H7.2429M13.0591 7.50006C13.0591 10.7141 10.4536 13.3196 7.2395 13.3196C4.02544 13.3196 1.41992 10.7141 1.41992 7.50006C1.41992 4.28599 4.02544 1.68048 7.2395 1.68048C10.4536 1.68048 13.0591 4.28599 13.0591 7.50006Z"
                    stroke="#070707"
                    strokeWidth="0.872937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default ProductInfoTitleSplit;
