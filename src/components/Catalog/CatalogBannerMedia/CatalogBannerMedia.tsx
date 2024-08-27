'use client';

import React from 'react';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SELECTIONS_IDS, SORT, CATEGORY_SLUG_NAMES, CATEGORY_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';
import { APP_ROUTE } from '@/constants/routes';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

import CatalogBannerImageBoutiqueMedia from '@/assets/images/catalog/catalog-banner-boutique-media.jpg';
import CatalogBannerImagePriceDropMedia from '@/assets/images/catalog/catalog-banner-price-drop.jpg';
import CatalogBannerImagePriceDrop2 from '@/assets/images/catalog/catalog-banner-price-drop2.jpg';
import CatalogBannerImagePopularMedia from '@/assets/images/catalog/catalog-banner-popular-media.jpg';
import CatalogBannerImageAutumn from '@/assets/images/catalog/catalog-banner-price-autumn-promocode.jpg';
import CatalogBannerImageConcierge from '@/assets/images/concierge/concierge-main.jpg';

const CatalogBannerMedia: React.FC = () => {
    const {
        filters: { sort, selection: selectionId, price_drop, boutique, categories: selectedCategories, category_slug },
    } = useCatalogFilters();
    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const categories = category_slug ? [CATEGORY_SLUG_NAMES[category_slug]] : selectedCategories;
    const currentSelection = selectionId ? selections.find(({ id }) => id.toString() === selectionId) ?? null : null;

    if (category_slug === 'obuv' || category_slug === 'aksessuary') {
        return (
            <div
                className="catalog-banner-media"
                style={{
                    backgroundImage: `url("${CatalogBannerImageAutumn.src}")`,
                }}
            >
                <div className="catalog-banner-media-text">
                    <h3 className="catalog-banner-media-text__title">
                        5 000 ₽ на ваш гардероб <br />к осеннему сезону
                    </h3>
                    <p className="catalog-banner-media-text__description">
                        Решайтесь: промокод AUTUMN24 действует с&nbsp;28&nbsp;августа по&nbsp;4&nbsp;сентября
                        на&nbsp;все лоты от&nbsp;70 000₽. Ваша новая сумка мечты ждёт здесь:
                    </p>
                    <Link
                        href={getCatalogFiltersUrl({
                            category_slug: CATEGORY_SLUGS.new,
                        })}
                        className="btn-light catalog-banner-media-text__btn"
                    >
                        Популярно сейчас
                    </Link>
                </div>
            </div>
        );
    }

    if (sort === SORT.a) {
        return (
            <div
                className="catalog-banner-media"
                style={{
                    backgroundImage: `url("${CatalogBannerImageAutumn.src}")`,
                }}
            >
                <div className="catalog-banner-media-text">
                    <h3 className="catalog-banner-media-text__title">
                        5 000 ₽ на ваш гардероб <br />к осеннему сезону
                    </h3>
                    <p className="catalog-banner-media-text__description">
                        Решайтесь: промокод AUTUMN24 действует с&nbsp;28&nbsp;августа по&nbsp;4&nbsp;сентября
                        на&nbsp;все лоты от&nbsp;70 000₽. Ваша новая сумка мечты ждёт вас
                    </p>
                </div>
            </div>
        );
    }

    if (category_slug === 'sumki' || category_slug === 'ukrasheniia') {
        return (
            <div
                className="catalog-banner-media"
                style={{
                    backgroundImage: `url("${CatalogBannerImageConcierge.src}")`,
                }}
            >
                <div className="catalog-banner-media-text">
                    <h3 className="catalog-banner-media-text__title">
                        Доставим для вас сумки <br /> и&nbsp;ювелирные украшения
                    </h3>
                    <p className="catalog-banner-media-text__description">
                        Консьерж-сервис THE CULTT доставит для вас из&nbsp;Европы и&nbsp;США любые позиции
                        с&nbsp;официальных сайтов Herm&egrave;s, Chanel, Cartier, Panerai и&nbsp;других культовых
                        брендов{' '}
                    </p>
                    <Link href={APP_ROUTE.concierge.root} className="btn-light catalog-banner-media-text__btn">
                        Заказать через консьержа
                    </Link>
                </div>
            </div>
        );
    }

    return price_drop ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${CatalogBannerImagePriceDropMedia.src}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">THE CULTT SALE</h3>
                <p className="catalog-banner-media-text__description">
                    Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то ещё.
                </p>
            </div>
        </div>
    ) : boutique ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${CatalogBannerImageBoutiqueMedia.src}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">Из бутика</h3>
                <p className="catalog-banner-media-text__description">
                    Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных байеров. Все
                    аксессуары в этой подборке — новые и никогда не были в использовании.
                </p>
            </div>
        </div>
    ) : currentSelection ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${currentSelection.background_image}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">{currentSelection.title}</h3>
                <p className="catalog-banner-media-text__description">{currentSelection.description}</p>
            </div>
        </div>
    ) : categories.length === 1 && categories[0] === CATEGORY_NAMES.bags ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage:
                    'url("https://storage.yandexcloud.net/prod-cultt-banner/4/vjV7bKViGmD432RLEDaB8D8Y3GjiklBXktYFrjy6.jpg")',
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">Летние сумки</h3>
                <p className="catalog-banner-media-text__description">
                    Мастхэвы, без которых мы не представляем свой летний гардероб
                </p>
                <Link
                    href={getCatalogFiltersUrl({
                        selection: SELECTIONS_IDS.summerBags.toString(),
                    })}
                    className="btn-light catalog-banner-media-text__btn"
                >
                    Смотреть подборку
                </Link>
            </div>
        </div>
    ) : sort === SORT.popular ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${CatalogBannerImagePopularMedia.src}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">Горячие лоты</h3>
                <p className="catalog-banner-media-text__description">
                    Успейте заказать: лоты в единственном экземпляре и с максимумом «сердечек»
                </p>
            </div>
        </div>
    ) : (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${CatalogBannerImagePriceDrop2.src}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">THE CULTT SALE</h3>
                <p className="catalog-banner-media-text__description">
                    Культовые лоты по сниженным ценам — успейте забрать их первыми
                </p>
                <Link
                    href={getCatalogFiltersUrl({
                        category_slug: CATEGORY_SLUGS.sale,
                    })}
                    className="btn-light catalog-banner-media-text__btn"
                >
                    Смотреть подборку
                </Link>
            </div>
        </div>
    );
};

export default CatalogBannerMedia;
