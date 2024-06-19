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
} from '@/components';

const Home: React.FC = () => {
    return (
        <>
            <HomeMainBanner />

            <section className="home">
                <div className="container">
                    <div className="home-wrapper">
                        <HomeCategories />

                        <CatalogProductsSection title="Новинки" />

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
};

export default Home;
