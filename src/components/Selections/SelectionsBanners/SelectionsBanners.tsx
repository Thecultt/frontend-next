import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { SELECTIONS_IDS } from '@/constants/catalog';
import { MEDIA_SIZES } from '@/constants/styles';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';

import summerBagsImage from '@/assets/images/selections/summer-bags-selection.jpg';

import './styles.sass';

export const SelectionsBanners: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);
    const { items } = useTypedSelector(({ selections }) => selections);

    if (!items.length) {
        return null;
    }

    const influencerSelection = items.find((item) => item.id === SELECTIONS_IDS.juliaKatkalo);

    const autumnBagsSelection = items.find((item) => item.id === SELECTIONS_IDS.autumnBags);
    const investmentsBagsSelection = items.find((item) => item.id === SELECTIONS_IDS.investmentsBags);
    const iiBagsSelection = items.find((item) => item.id === SELECTIONS_IDS.itBags);

    return (
        <section className="selections-banners">
            {influencerSelection && (
                <div className="selections-banners-influencer">
                    <svg
                        className="selections-banners-influencer__bookmark"
                        width="45"
                        height="56"
                        viewBox="0 0 45 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.9811 44.5059L12.8261 51.0508C7.38387 54.5583 4.66277 56.3121 2.57748 55.1752C0.492188 54.0383 0.492188 50.801 0.492188 44.3264V-11H22.4922H23.4922H44.4922V43.9631C44.4922 50.5772 44.4922 53.8843 42.3709 55.0129C40.2497 56.1414 37.5071 54.2935 32.0219 50.5975L22.9811 44.5059Z"
                            fill="#285141"
                        />
                    </svg>

                    <div className="selections-banners-influencer__content">
                        <h3 className="selections-banners-influencer__title">{influencerSelection.title}</h3>
                        <p className="selections-banners-influencer__description">{influencerSelection.description}</p>

                        <Link
                            href={getCatalogFiltersUrl({
                                selection: influencerSelection.id.toString(),
                            })}
                            className="btn selections-banners-influencer__button"
                        >
                            {isMobile ? 'Перейти' : 'Перейти в подборку'}
                        </Link>
                    </div>

                    {influencerSelection.background_image && (
                        <div
                            className="selections-banners-influencer__cover"
                            style={{ backgroundImage: `url(${influencerSelection.background_image})` }}
                        />
                    )}
                </div>
            )}

            <div className="selections-banners-bestsellers">
                {autumnBagsSelection && (
                    <div className="selections-banners-bestsellers-main-item hover-scale">
                        <div
                            className="selections-banners-bestsellers-main-item__cover"
                            style={{
                                backgroundImage: `url("${summerBagsImage.src}")`,
                            }}
                        />
                        <div className="selections-banners-bestsellers-main-item__content">
                            <h3 className="selections-banners-bestsellers-main-item__title">
                                {autumnBagsSelection.title}
                            </h3>
                            <p className="selections-banners-bestsellers-main-item__description">
                                {autumnBagsSelection.description}
                            </p>
                            <Link
                                href={getCatalogFiltersUrl({
                                    selection: SELECTIONS_IDS.autumnBags.toString(),
                                })}
                                className="btn selections-banners-bestsellers-main-item__btn"
                            >
                                Перейти
                            </Link>
                        </div>
                    </div>
                )}
                <div className="selections-banners-bestsellers__items">
                    {investmentsBagsSelection && (
                        <div className="selections-banners-bestsellers-item hover-scale">
                            <div
                                className="selections-banners-bestsellers-item__cover"
                                style={{
                                    backgroundImage: `url("${investmentsBagsSelection.background_image}")`,
                                }}
                            />
                            <div className="selections-banners-bestsellers-item__content">
                                <h3 className="selections-banners-bestsellers-item__title">
                                    {investmentsBagsSelection.title}
                                </h3>
                                <p className="selections-banners-bestsellers-item__description">
                                    {investmentsBagsSelection.description}
                                </p>
                            </div>
                            <div className="selections-banners-bestsellers-item__btn-wrap">
                                <Link
                                    href={getCatalogFiltersUrl({
                                        selection: SELECTIONS_IDS.investmentsBags.toString(),
                                    })}
                                    className="btn selections-banners-bestsellers-item__btn"
                                >
                                    Перейти
                                </Link>
                            </div>
                        </div>
                    )}

                    {iiBagsSelection && (
                        <div className="selections-banners-bestsellers-item selection-it-bags-banner hover-scale">
                            <div
                                className="selections-banners-bestsellers-item__cover selection-it-bags-banner__cover"
                                style={{
                                    backgroundImage: `url("${iiBagsSelection.background_image}")`,
                                }}
                            />
                            <div className="selections-banners-bestsellers-item__content">
                                <h3 className="selections-banners-bestsellers-item__title">{iiBagsSelection.title}</h3>
                                <p className="selections-banners-bestsellers-item__description">
                                    {iiBagsSelection.description}
                                </p>
                            </div>
                            <div className="selections-banners-bestsellers-item__btn-wrap">
                                <Link
                                    href={getCatalogFiltersUrl({
                                        selection: SELECTIONS_IDS.itBags.toString(),
                                    })}
                                    className="btn selections-banners-bestsellers-item__btn"
                                >
                                    Перейти
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
