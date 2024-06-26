import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { addCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { sendSaveFavorite, sendRemoveFavorite } from '@/redux/actions/favorites';
import { ProductBlock, CatalogProductsPagination, CatalogProductsNull, PageLoader } from '@/components';
import { Product } from '@/models/IProduct';
import { CartItem } from '@/models/ICartItem';
import { getClassNames } from '@/functions/getClassNames';

const CatalogProducts: React.FC = () => {
    const dispatch = useDispatch();

    const { items, isLoaded, itemsCount, isFetchMore, isFetchPage } = useTypedSelector(({ products }) => products);
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

    return (
        <div className="catalog-product-wrapper">
            {isLoaded ? (
                items.length ? (
                    <>
                        <div
                            className={getClassNames('catalog-product-blocks-wrapper', {
                                isFetch: isFetchMore || isFetchPage,
                            })}
                        >
                            {items.map((item, index) => (
                                <ProductBlock
                                    addClass="catalog-product-block"
                                    key={`catalog-product-block-${item.article}-${index}`}
                                    addCart={() =>
                                        addCart({
                                            id: item.id,
                                            checked: true,
                                            article: item.article,
                                            manufacturer: item.manufacturer,
                                            category: item.category,
                                            subcategory: item.subcategory,
                                            name: item.name,
                                            image: item.images[0],
                                            price: item.price,
                                            availability: item.availability,
                                            is_trial: item.is_trial,
                                        })
                                    }
                                    onClickProduct={() => onClickProduct(item, index)}
                                    isCart={cartItems[item.id] ? true : false}
                                    addFavorite={() => addFavorite(item)}
                                    removeFavorite={() => removeFavorite(item)}
                                    isFavorite={favoritesItems[item.id] ? true : false}
                                    {...item}
                                />
                            ))}
                        </div>

                        {itemsCount > 20 ? <CatalogProductsPagination /> : null}
                    </>
                ) : (
                    <CatalogProductsNull />
                )
            ) : (
                <PageLoader />
            )}
        </div>
    );
};

export default CatalogProducts;
