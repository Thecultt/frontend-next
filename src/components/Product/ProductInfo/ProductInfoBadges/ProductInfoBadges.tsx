'use client';

import React from 'react';

import { ProductPage } from '@/models/IProduct';
import { Noop } from '@/types/functions';
import { BadgeTheme } from '@/types/ui';
import { Badge } from '@/shared/ui';

interface Props {
    product: ProductPage;
    className?: string;
    onNewBrandClick?: Noop;
    onFromPartnerClick?: Noop;
}

interface IBadge {
    title: string;
    theme?: BadgeTheme;
    onClick?: Noop;
}

export const ProductInfoBadges: React.FC<Props> = ({ product, className, onNewBrandClick, onFromPartnerClick }) => {
    const { from_boutique, from_parnter, price_drop } = product;

    const getBadges = (): IBadge[] => {
        if (from_boutique) {
            if (price_drop) {
                return [
                    {
                        title: 'Новое от брендов',
                        theme: 'default',
                        onClick: onNewBrandClick,
                    },
                    {
                        title: 'Цена снизилась',
                        theme: 'green',
                    },
                ];
            }

            return [
                {
                    title: 'Новое от брендов',
                    theme: 'default',
                    onClick: onNewBrandClick,
                },
            ];
        }

        if (from_parnter) {
            return [
                {
                    title: 'Новое от брендов',
                    theme: 'default',
                    onClick: onNewBrandClick,
                },
                {
                    title: 'Только онлайн',
                    theme: 'green',
                    onClick: onFromPartnerClick,
                },
            ];
        }

        if (price_drop) {
            return [
                {
                    title: 'Цена снизилась',
                    theme: 'green',
                },
            ];
        }

        return [];
    };

    const badges = getBadges();

    if (!badges.length) {
        return null;
    }

    return (
        <div className={className}>
            {badges.map((badge, index) => (
                <Badge key={index} theme={badge.theme} onClick={badge.onClick}>
                    {badge.title}
                </Badge>
            ))}
        </div>
    );
};
