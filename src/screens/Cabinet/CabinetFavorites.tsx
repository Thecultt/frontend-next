'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CartItem } from '@/models/ICartItem';
import { fetchFavorites } from '@/redux/actions/favorites';
import { addCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { sendSaveFavorite, sendRemoveFavorite } from '@/redux/actions/favorites';
import { ProductBlock, CabinetFavoritesShare, CabinetFavoritesNull, PageLoader } from '@/components';
import { Product } from '@/models/IProduct';

const CabinetFavorites: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, items } = useTypedSelector(({ favorites }) => favorites);
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

    React.useEffect(() => {
        dispatch(fetchFavorites() as any);
    }, []);

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

    if (!isLoaded) {
        return <PageLoader />;
    }

    return (
        <div className="cabinet-content cabinet-favorites">
            <CabinetFavoritesShare />

            {Object.keys(items).length ? (
                <div className="cabinet-favorites-blocks-wrapper">
                    {Object.keys(items).map((key, index) => (
                        <ProductBlock
                            addClass="cabinet-favorites-block"
                            key={`cabinet-favorites-block-${items[key].article}-${index}`}
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
        </div>
    );
};

export default CabinetFavorites;
