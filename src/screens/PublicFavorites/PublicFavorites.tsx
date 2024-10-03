'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CabinetFavoritesNull, ProductCard } from '@/components';
import { PageLoader } from '@/shared/ui';
import { fetchPublicFavorites } from '@/redux/actions/public_favorites';

type PageParams = {
    userId?: string;
};

const PublicFavorites: React.FC = () => {
    const { userId } = useParams<PageParams>();
    const dispatch = useDispatch();

    const { isLoaded, name, items } = useTypedSelector(({ public_favorites }) => public_favorites);
    const favoriteItems = Object.values(items);

    React.useEffect(() => {
        if (userId) {
            dispatch(fetchPublicFavorites(userId) as any);
        }
    }, [userId]);

    return (
        <div className="public-favorites">
            <div className="container">
                <div className="public-favorites-wrapper">
                    {isLoaded ? (
                        <>
                            <div className="public-favorites-name">
                                {name !== 'Подборка лотов от THE CULTT' ? (
                                    <p className="public-favorites-name__subtitle">Мой вишлист THE CULTT</p>
                                ) : null}
                                <p className="public-favorites-name__title">{name}</p>
                            </div>

                            {favoriteItems.length ? (
                                <div className="catalog-product-blocks-wrapper">
                                    {favoriteItems.map((item) => (
                                        <ProductCard key={item.id} productData={item} />
                                    ))}
                                </div>
                            ) : (
                                <CabinetFavoritesNull />
                            )}
                        </>
                    ) : (
                        <PageLoader />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PublicFavorites;
