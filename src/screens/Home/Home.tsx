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

const Home: React.FC = () => (
    <>
        <HomeMainBanner />
        <section className="home">
            <div className="container">
                <div className="home-wrapper">
                    <HomeCategories />
                    <SelectionsSlider />
                    <CatalogProductsSection title="Новинки" />
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
