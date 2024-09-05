'use client';

import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';

interface Props {
    image: string;
    title: React.ReactNode;
    description: React.ReactNode;
    imageExtraStyles?: React.CSSProperties;
    link?: {
        title: string;
        href: string;
    };
}

export const CatalogBannerTemplate: React.FC<Props> = ({ image, title, description, imageExtraStyles, link }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    return !isMobile ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${image}")`,
                    ...imageExtraStyles,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">{title}</h3>
                <p className="catalog-banner-text__description">{description}</p>

                {link && (
                    <Link href={link.href} className="btn catalog-banner-text__btn">
                        {link.title}
                    </Link>
                )}
            </div>
        </div>
    ) : (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${image}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">{title}</h3>
                <p className="catalog-banner-media-text__description">{description}</p>

                {link && (
                    <Link href={link.href} className="btn-light catalog-banner-media-text__btn">
                        {link.title}
                    </Link>
                )}
            </div>
        </div>
    );
};
