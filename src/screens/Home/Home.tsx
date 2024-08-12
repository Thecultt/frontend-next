'use client';

import React from 'react';

import {
    HomeMainBanner,
    HomeCategories,
    HomeVisit,
    HomeSell,
    HomeSellPartners,
    HomeAbout,
    HomeWaiting,
    CatalogProductsSection,
    SelectionsSlider,
    SelectionsBanners,
} from '@/components';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { CATEGORIES, SORT } from '@/constants/catalog';

const Home: React.FC = () => (
    <>
        <HomeMainBanner />
        <section className="home">
            <div className="container">
                <div className="home-wrapper">
                    <HomeCategories />
                    <SelectionsSlider />
                    <CatalogProductsSection
                        title="Новинки"
                        titleLink={getCatalogFiltersUrl({
                            categories: CATEGORIES,
                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                            price_drop: false,
                            boutique: false,
                            page: 1,
                            sort: SORT.a,
                        })}
                    />
                    <SelectionsBanners />
                    <HomeVisit />
                    <HomeSell />
                    <HomeSellPartners />
                    <HomeAbout />
                    <HomeWaiting />
                </div>
            </div>
        </section>
    </>
);

export default Home;
