import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import { ICinemaArtisticAuction } from '@/redux/types/ICinemaArtistic';

const CinemaArtisticAuctionItem: React.FC<ICinemaArtisticAuction> = ({ id, images, title }) => {
    return (
        <Link href={`${APP_ROUTE.cinema.product}/${id}`} className="cinema-artistic-auction-products-item">
            <div
                className="cinema-artistic-auction-products-item__image"
                style={images?.[0] ? { backgroundImage: `url(${images[0]})` } : undefined}
            />
            <h4 className="cinema-artistic-auction-products-item__title">{title ?? '-'}</h4>
        </Link>
    );
};

export default CinemaArtisticAuctionItem;
