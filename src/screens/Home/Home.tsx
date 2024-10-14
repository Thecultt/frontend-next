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
    SelectionsSlider,
    SelectionsBanners,
    HomeNewProducts,
} from '@/components';

const Home: React.FC = () => (
    <>
        <HomeMainBanner />
        <section className="home">
            <div className="container">
                <div className="home-wrapper">
                    <HomeCategories />
                    <SelectionsSlider />
                    <HomeNewProducts />
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
