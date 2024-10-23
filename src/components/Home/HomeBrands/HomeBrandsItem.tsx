'use client';

import React from 'react';
import Link from 'next/link';

import { IHomeBrandItem } from './constants';

const HomeBrandsItem: React.FC<IHomeBrandItem> = ({ url, image, title }) => (
    <Link href={url} className="home-brands-slider-item">
        <div className="home-brands-slider-item-image" style={{ backgroundImage: `url("${image}")` }}></div>

        <h2 className="home-brands-slider-item__title">{title}</h2>
    </Link>
);

export default HomeBrandsItem;
