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
    NoSsr,
} from '@/components';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { CATEGORY_SLUGS } from '@/constants/catalog';

const Home: React.FC = () => (
    <>
        <NoSsr>
            <HomeMainBanner />
        </NoSsr>
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
                    <NoSsr>
                        <HomeAbout />
                    </NoSsr>
                    <HomeWaiting />
                </div>
            </div>
        </section>
    </>
);

export default Home;
