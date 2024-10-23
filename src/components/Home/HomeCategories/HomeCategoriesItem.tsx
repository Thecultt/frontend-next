'use client';

import React from 'react';
import Link from 'next/link';

import { IHomeCategoriesItem } from './constants';

const HomeCategoriesItem: React.FC<IHomeCategoriesItem> = ({ url, image, title }) => (
    <Link href={url} className="home-categories-slider-item">
        <div className="home-categories-slider-item-image" style={{ backgroundImage: `url("${image}")` }}></div>

        <h2 className="home-categories-slider-item__title">{title}</h2>
    </Link>
);

export default HomeCategoriesItem;
