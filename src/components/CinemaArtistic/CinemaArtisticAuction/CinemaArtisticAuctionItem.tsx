import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

const CinemaArtisticAuctionItem: React.FC<any> = ({ id, image, title }) => {
    return (
        <Link href={`${APP_ROUTE.cinema}/${id}`} className="cinema-artistic-auction-products-item">
            <div
                className="cinema-artistic-auction-products-item-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <h4 className="cinema-artistic-auction-products-item__title">{title}</h4>
        </Link>
    );
};

export default CinemaArtisticAuctionItem;
