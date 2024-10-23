'use client';

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';

import {
    HomeMainBanner,
    HomeBrands,
    HomeConciergeMobile,
    HomeCategories,
    SelectionsSlider,
    SelectionsBanners,
    HomeVisit,
    HomeSell,
    HomeSellPartners,
    HomeAbout,
    HomeWaiting,
    HomeWaitingMedia,
    HomeNewProducts,
} from '@/components';

const Home: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`, { initializeWithValue: false });

    return (
        <>
            <HomeMainBanner />

            <section className="home">
                <div className="container">
                    <div className="home-wrapper">
                        {isMobile ? (
                            <>
                                <HomeBrands />
                                <HomeConciergeMobile />
                                <HomeCategories />
                                <SelectionsSlider />
                                <SelectionsBanners />
                                <HomeAbout />
                                <HomeWaitingMedia />
                            </>
                        ) : (
                            <>
                                <HomeCategories />
                                <SelectionsSlider />
                                <HomeNewProducts />
                                <SelectionsBanners />
                                <HomeVisit />
                                <HomeSell />
                                <HomeSellPartners />
                                <HomeAbout />
                                <HomeWaiting />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
