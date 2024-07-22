'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchFavorites } from '@/redux/actions/favorites';
import { CabinetFavoritesShare, CabinetFavoritesNull, PageLoader, ProductCard } from '@/components';

const CabinetFavorites: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, items } = useTypedSelector(({ favorites }) => favorites);
    const favoriteItems = Object.values(items);

    React.useEffect(() => {
        dispatch(fetchFavorites() as any);
    }, []);

    if (!isLoaded) {
        return <PageLoader />;
    }

    return (
        <div className="cabinet-content cabinet-favorites">
            <CabinetFavoritesShare />

            {favoriteItems.length ? (
                <div className="catalog-product-blocks-wrapper">
                    {favoriteItems.map((item) => (
                        <ProductCard key={item.id} productData={item} />
                    ))}
                </div>
            ) : (
                <CabinetFavoritesNull />
            )}
        </div>
    );
};

export default CabinetFavorites;
