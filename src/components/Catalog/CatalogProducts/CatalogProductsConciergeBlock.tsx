import React from 'react';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { APP_ROUTE } from '@/constants/routes';

const CatalogProductsConciergeBlock: React.FC = () => {
    return (
        <Link
            href={`${APP_ROUTE.concierge}?utm_source=website&utm_medium=catalog&utm_campaign=concierge_snippet`}
            className="catalog-product-concierge-block-wrapper"
        >
            <div className="catalog-product-concierge-block">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.0688 10.0023V35.6689M9.23544 22.8356H34.9021"
                        stroke="#303030"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <h4 className="catalog-product-concierge-block__title">
                    Нет нужного лота? <br />
                    Закажите его через нас
                </h4>
            </div>

            <Button theme="light" label="Заказать сейчас" size="m" wide />
        </Link>
    );
};

export default CatalogProductsConciergeBlock;
