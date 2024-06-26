import React from 'react';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { SELECTIONS_IDS } from '@/constants/catalog';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';

import './styles.sass';

export const SelectionsBanners = () => {
    const { items } = useTypedSelector(({ selections }) => selections);

    if (!items.length) {
        return null;
    }

    const summerBagsSelection = items.find((item) => item.id === SELECTIONS_IDS.summerBags);
    const investmentsBagsSelection = items.find((item) => item.id === SELECTIONS_IDS.investmentsBags);
    const iiBagsSelection = items.find((item) => item.id === SELECTIONS_IDS.itBags);

    return (
        <section className="selections-banners">
            <div className="selections-banners-bestsellers">
                {summerBagsSelection && (
                    <div className="selections-banners-bestsellers-main-item hover-scale">
                        <div className="selections-banners-bestsellers-main-item__cover">
                            {!!summerBagsSelection.background_image && !!summerBagsSelection.title && (
                                <img
                                    src={summerBagsSelection.background_image}
                                    className="selections-banners-bestsellers-main-item__image"
                                    alt={summerBagsSelection.title}
                                />
                            )}
                        </div>
                        <div className="selections-banners-bestsellers-main-item__content">
                            <h3 className="selections-banners-bestsellers-main-item__title">
                                {summerBagsSelection.title}
                            </h3>
                            <p className="selections-banners-bestsellers-main-item__description">
                                {summerBagsSelection.description}
                            </p>
                            <Link
                                href={getCatalogFiltersUrl({
                                    selection: SELECTIONS_IDS.summerBags,
                                    sort: 'popular',
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
                            <div className="selections-banners-bestsellers-item__cover">
                                {!!investmentsBagsSelection.background_image && !!investmentsBagsSelection.title && (
                                    <img
                                        src={investmentsBagsSelection.background_image}
                                        className="selections-banners-bestsellers-item__image"
                                        alt={investmentsBagsSelection.title}
                                    />
                                )}
                            </div>
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
                                        selection: SELECTIONS_IDS.investmentsBags,
                                        sort: 'popular',
                                    })}
                                    className="btn selections-banners-bestsellers-item__btn"
                                >
                                    Перейти
                                </Link>
                            </div>
                        </div>
                    )}

                    {iiBagsSelection && (
                        <div className="selections-banners-bestsellers-item hover-scale">
                            <div className="selections-banners-bestsellers-item__cover">
                                {!!iiBagsSelection.background_image && !!iiBagsSelection.title && (
                                    <img
                                        src={iiBagsSelection.background_image}
                                        className="selections-banners-bestsellers-item__image"
                                        alt={iiBagsSelection.title}
                                    />
                                )}
                            </div>
                            <div className="selections-banners-bestsellers-item__content">
                                <h3 className="selections-banners-bestsellers-item__title">{iiBagsSelection.title}</h3>
                                <p className="selections-banners-bestsellers-item__description">
                                    {iiBagsSelection.description}
                                </p>
                            </div>
                            <div className="selections-banners-bestsellers-item__btn-wrap">
                                <Link
                                    href={getCatalogFiltersUrl({
                                        selection: SELECTIONS_IDS.itBags,
                                        sort: 'popular',
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
