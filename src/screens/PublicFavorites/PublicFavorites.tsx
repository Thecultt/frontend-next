'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { PageLoader, ProductBlock, CabinetFavoritesNull } from '@/components';
import { CartItem } from '@/models/ICartItem';
import { Product } from '@/models/IProduct';
import { addCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { fetchPublicFavorites } from '@/redux/actions/public_favorites';
import { sendSaveFavorite, sendRemoveFavorite } from '@/redux/actions/favorites';

type PageParams = {
    userId?: string;
};

const PublicFavorites: React.FC = () => {
    const { userId } = useParams<PageParams>();
    const dispatch = useDispatch();

    const { isLoaded, name, items } = useTypedSelector(({ public_favorites }) => public_favorites);
    const cartItems = useTypedSelector(({ cart }) => cart.items);
    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

    const addCart = (item: CartItem) => {
        dispatch(setCartIsVisibleMessage(true));
        dispatch(addCartItem(item));

        setTimeout(() => {
            dispatch(setCartIsVisibleMessage(false));
        }, 5000);
    };

    const addFavorite = (item: Product) => {
        dispatch(sendSaveFavorite(item) as any);
    };

    const removeFavorite = (item: Product) => {
        dispatch(sendRemoveFavorite(item) as any);
    };

    const onClickProduct = (item: any, index: number) => {
        window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            event: 'select_item',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                items: [
                    {
                        item_name: item.model_name,
                        item_id: `${item.id}`,
                        price: `${item.price}`,
                        item_brand: item.manufacturer,
                        item_category: item.category,
                        item_category2: item.subcategory,
                        item_category3: '-',
                        item_category4: '-',
                        item_list_name: 'Search Results',
                        item_list_id: item.article,
                        index,
                        quantity: 1,
                    },
                ],
            },
        });
    };

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

                            {Object.keys(items).length ? (
                                <div className="public-favorites-products">
                                    {Object.keys(items).map((key, index) => (
                                        <ProductBlock
                                            addClass="public-favorites-products-block"
                                            key={`public-favorites-products-block-${items[key].article}-${index}`}
                                            addCart={() =>
                                                addCart({
                                                    id: items[key].id,
                                                    checked: true,
                                                    article: items[key].article,
                                                    manufacturer: items[key].manufacturer,
                                                    category: items[key].category,
                                                    subcategory: items[key].subcategory,
                                                    name: items[key].name,
                                                    image: items[key].images[0],
                                                    price: items[key].price,
                                                    availability: items[key].availability,
                                                    is_trial: items[key].is_trial,
                                                })
                                            }
                                            onClickProduct={() => onClickProduct(items[key], index)}
                                            isCart={cartItems[items[key].article] ? true : false}
                                            addFavorite={() => addFavorite(items[key])}
                                            removeFavorite={() => removeFavorite(items[key])}
                                            isFavorite={favoritesItems[items[key].id] ? true : false}
                                            {...items[key]}
                                        />
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
