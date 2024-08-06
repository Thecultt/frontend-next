import React from 'react';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SELECTIONS_IDS, SORT, CATEGORY_SLUG_NAMES, CATEGORY_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

import CatalogBannerImagePriceDrop from '@/assets/images/catalog/catalog-banner-price-drop.jpg';
import CatalogBannerImagePriceDrop2 from '@/assets/images/catalog/catalog-banner-price-drop2.jpg';
import CatalogBannerImageBoutique from '@/assets/images/catalog/catalog-banner-boutique.jpg';
import CatalogBannerImagePopular from '@/assets/images/catalog/catalog-banner-popular.jpg';

const CatalogBanner: React.FC = React.memo(() => {
    const {
        filters: { sort, selection: selectionId, price_drop, boutique, categories: selectedCategories, category_slug },
    } = useCatalogFilters();
    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const categories = category_slug ? [CATEGORY_SLUG_NAMES[category_slug]] : selectedCategories;
    const currentSelection = selectionId ? selections.find(({ id }) => id.toString() === selectionId) ?? null : null;

    return price_drop ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImagePriceDrop.src}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">THE CULTT SALE</h3>
                <p className="catalog-banner-text__description">
                    Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то ещё.
                </p>
            </div>
        </div>
    ) : boutique ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImageBoutique.src}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">Из бутика</h3>
                <p className="catalog-banner-text__description">
                    Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных байеров. Все
                    аксессуары в этой подборке — новые и никогда не были в использовании.
                </p>
            </div>
        </div>
    ) : currentSelection ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${currentSelection.background_image}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">{currentSelection.title}</h3>
                <p className="catalog-banner-text__description">{currentSelection.description}</p>
            </div>
        </div>
    ) : categories.length === 1 && categories[0] === CATEGORY_NAMES.bags ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage:
                        'url("https://storage.yandexcloud.net/prod-cultt-banner/4/vjV7bKViGmD432RLEDaB8D8Y3GjiklBXktYFrjy6.jpg")',
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">Летние сумки</h3>
                <p className="catalog-banner-text__description">
                    Мастхэвы, без которых мы не представляем свой летний гардероб
                </p>
                <Link
                    href={getCatalogFiltersUrl({
                        selection: SELECTIONS_IDS.summerBags.toString(),
                    })}
                    className="btn catalog-banner-text__btn"
                >
                    Смотреть подборку
                </Link>
            </div>
        </div>
    ) : sort === SORT.popular ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImagePopular.src}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">Горячие лоты</h3>
                <p className="catalog-banner-text__description">
                    Успейте заказать: лоты в единственном экземпляре и с максимумом «сердечек»
                </p>
            </div>
        </div>
    ) : (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImagePriceDrop2.src}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">THE CULTT SALE</h3>
                <p className="catalog-banner-text__description">
                    Культовые лоты по сниженным ценам — успейте забрать их первыми
                </p>
                <Link
                    href={getCatalogFiltersUrl({
                        category_slug: CATEGORY_SLUGS.sale,
                    })}
                    className="btn catalog-banner-text__btn"
                >
                    Смотреть подборку
                </Link>
            </div>
        </div>
    );
});

export default CatalogBanner;
