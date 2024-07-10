import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';

import $api from '@/http';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { addCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { sendSaveFavorite, sendRemoveFavorite } from '@/redux/actions/favorites';
import { ProductBlock } from '@/components';
import { Product } from '@/models/IProduct';
import { CartItem } from '@/models/ICartItem';
import { APP_ROUTE } from '@/constants/routes';

const AlyonaDoletskayaProductSection: React.FC = () => {
    const dispatch = useDispatch();

    const [items, setItems] = React.useState<Product[]>([]);

    const cartItems = useTypedSelector(({ cart }) => cart.items);
    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

    const SliderRef = React.useRef<any>(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    React.useEffect(() => {
        $api.get<{ items: Product[] }>(
            `/catalog/?category=Сумки&category=Аксессуары&category=Обувь&category=Одежда&availability=1&availability=-1&selections=1`,
        ).then(({ data }) => {
            setItems(data.items);
        });
    }, []);

    const onClickPrev = () => {
        SliderRef.current.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current.slickNext();
    };

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
        <div className="container">
            <div className="catalog-product-section">
                <Link href={APP_ROUTE.catalog} className="catalog-product-section__title">
                    Архив Алёны Долецкой
                </Link>

                <div className="catalog-product-section-slider-wrapper">
                    <button className="catalog-product-section-slider-arrow prev" onClick={onClickPrev}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                            <path
                                d="M24 12.4766L16 20.4766L24 28.4766"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <Slider {...settings} className="catalog-product-section-slider" ref={SliderRef}>
                        {items.map((item, index) =>
                            item.availability && !item.is_trial && item.images.length && item.price ? (
                                <ProductBlock
                                    addClass="catalog-slider-product-block"
                                    key={`catalog-slider-product-block-${index}`}
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
                                    isCart={cartItems[item.article] ? true : false}
                                    addFavorite={() => addFavorite(item)}
                                    removeFavorite={() => removeFavorite(item)}
                                    isFavorite={favoritesItems[item.id] ? true : false}
                                    {...item}
                                />
                            ) : null,
                        )}
                    </Slider>

                    <button className="catalog-product-section-slider-arrow next" onClick={onClickNext}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                            <path d="M16 28.4766L24 20.4766L16 12.4766" fill="white" />
                            <path
                                d="M16 28.4766L24 20.4766L16 12.4766"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="alyona-doletskaya-slider-btn">
                    <Link
                        href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                        className="btn alyona-doletskaya-slider-btn__btn"
                    >
                        Смотреть весь архив
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AlyonaDoletskayaProductSection;
