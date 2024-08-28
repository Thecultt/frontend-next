'use client';

import React from 'react';
import Link from 'next/link';

import { IHomeCategoriesItem } from './constants';

const HomeCategoriesItem: React.FC<IHomeCategoriesItem> = ({ url, image, title }) => (
    <Link href={url} className="home-categories-item-wrapper">
        <div className="home-categories-item">
            <div className="home-categories-item-image" style={{ backgroundImage: `url("${image}")` }}></div>

            <h2 className="home-categories-item__title">{title}</h2>
        </div>
    </Link>
);

export default HomeCategoriesItem;
