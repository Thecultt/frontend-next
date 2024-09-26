import React from 'react';
import Link from 'next/link';

import { Product } from '@/models/IProduct';
import { APP_ROUTE } from '@/constants/routes';
import { APP_PROD_DOMAIN } from '@/constants/app';

// TODO

interface Props {
    items?: Product[];
}

const ServerCatalog: React.FC<Props> = ({ items }) => (
    <div>
        <ul className="static-catalog">
            {items?.map((item) => (
                <li key={item.article} className="static-catalog__item">
                    <Link href={`${APP_PROD_DOMAIN}/${APP_ROUTE.product}/${item.article}`} title={item.name}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default ServerCatalog;
