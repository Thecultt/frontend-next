'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

import {
    BackButton,
    CinemaAuctionProductCarousel,
    CinemaAuctionProductForm,
    CinemaAuctionProductProperty,
    PageLoader,
} from '@/components';
import { getCinemaAuctionProductById } from '@/redux/actions/cinema_artistic';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { APP_ROUTE } from '@/constants/routes';

type PageParams = {
    id?: string;
};

export const CinemaArtisticProduct = () => {
    const { id } = useParams<PageParams>();

    const dispatch = useDispatch();
    const { item, isLoadedPage } = useTypedSelector(({ cinema_artistic }) => cinema_artistic);

    React.useEffect(() => {
        if (id) {
            dispatch(getCinemaAuctionProductById(+id) as any);
        }
    }, [id]);

    return (
        <section className="cinema-auction-product container">
            <BackButton className="cinema-auction-product__back" link={APP_ROUTE.cinema.root} />

            {isLoadedPage && item ? (
                <div className="cinema-auction-product__content">
                    <div className="cinema-auction-product-item">
                        <div className="cinema-auction-product-item__info">
                            <CinemaAuctionProductCarousel images={item.images ?? []} />
                            <div className="cinema-auction-product-item-text">
                                <h1 className="cinema-auction-product-item-text__title">{item.title ?? ''}</h1>
                                <div className="cinema-auction-product-item-text__properties">
                                    <CinemaAuctionProductProperty
                                        title="Год выпуска модели"
                                        value={item.release_year ?? '-'}
                                    />
                                    <CinemaAuctionProductProperty title="Фильм" value={item.film ?? '-'} />
                                </div>
                                <div className="cinema-auction-product-item-text__properties">
                                    <CinemaAuctionProductProperty title="Тип" value={item.type ?? '-'} />
                                    <CinemaAuctionProductProperty title="Цвет" value={item.color ?? '-'} />
                                    <CinemaAuctionProductProperty title="Комплект" value={item.set ?? '-'} />
                                    <CinemaAuctionProductProperty title="Размер" value={item.size ?? '-'} />
                                </div>
                                <p className="cinema-auction-product-item-text__description">
                                    {item.description ?? ''}
                                </p>
                            </div>
                        </div>
                        <div className="cinema-auction-product-item__offer">
                            *предложение не является публичной офертой.
                        </div>
                    </div>
                    {id && (
                        <CinemaAuctionProductForm
                            productId={id}
                            currentBid={item.current_bid ? +item.current_bid : 0}
                        />
                    )}
                </div>
            ) : (
                <PageLoader />
            )}
        </section>
    );
};
