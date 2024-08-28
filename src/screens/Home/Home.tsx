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
import { CATEGORY_SLUGS } from '@/constants/catalog';

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
                            category_slug: CATEGORY_SLUGS.new,
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
