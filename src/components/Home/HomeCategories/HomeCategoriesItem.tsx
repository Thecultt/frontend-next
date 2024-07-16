import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import { CategoriesItem } from './HomeCategories';

const HomeCategoriesItem: React.FC<CategoriesItem> = ({ image, title }) => {
    let url = '';

    if (title === 'Ремни' || title === 'Платки и шарфы') {
        url = `${APP_ROUTE.catalog}?categories=Аксессуары${title === 'Платки и шарфы' ? `&types=Платки&types=Платки+и+шарфы&types=Шарфы` : `&types=${title}`}`;
    } else if (title === 'Часы') {
        url = `${APP_ROUTE.catalog}?categories=Украшения&types=${title}`;
    } else {
        url = `${APP_ROUTE.catalog}?categories=${title}`;
    }

    return (
        <Link href={url} className="home-categories-item-wrapper">
            <div className="home-categories-item">
                <div className="home-categories-item-image" style={{ backgroundImage: `url("${image}")` }}></div>

                <h2 className="home-categories-item__title">{title}</h2>
            </div>
        </Link>
    );
};

export default HomeCategoriesItem;
