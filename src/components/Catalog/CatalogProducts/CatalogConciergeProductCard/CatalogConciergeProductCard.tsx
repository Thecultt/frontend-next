'use client';

import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import { ConciergeProduct } from '@/models/IConcierge';
import { Badge } from '@/shared/ui';

import './styles.sass';

interface Props {
    data: ConciergeProduct;
}

export const CatalogConciergeProductCard: React.FC<Props> = ({ data }) => {
    return (
        <Link href={`${APP_ROUTE.concierge.product}/${data.id}`} className="catalog-concierge-product-card">
            <div className="catalog-concierge-product-card-cover">
                <Badge className="catalog-concierge-product-card-cover__badge">Только онлайн</Badge>
                {data.image && (
                    <div
                        style={{
                            backgroundImage: `url("${data.image}")`,
                        }}
                        className="catalog-concierge-product-card-cover__image"
                    />
                )}
            </div>
            <div className="catalog-concierge-product-card-info">
                <h3 className="catalog-concierge-product-card-info__name">{data.title}</h3>
                {data.condition && (
                    <p className="catalog-concierge-product-card-info__condition">
                        Состояние:{' '}
                        <span className="catalog-concierge-product-card-info__condition-value">{data.condition}</span>
                    </p>
                )}
                {data.price && <span className="catalog-concierge-product-card-info__price">{data.price}</span>}
            </div>
        </Link>
    );
};
