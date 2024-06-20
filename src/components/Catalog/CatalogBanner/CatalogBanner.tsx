import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SELECTIONS_IDS } from '@/constants/catalog';

import CatalogBannerImagePriceDrop from '@/assets/images/catalog/catalog-banner-price-drop.jpg';
import CatalogBannerImageBoutique from '@/assets/images/catalog/catalog-banner-boutique.jpg';
import CatalogBannerImageItbag from '@/assets/images/catalog/catalog-banner-price-itbag.jpg';
import CatalogBannerImagePopular from '@/assets/images/catalog/catalog-banner-popular.jpg';

const CatalogBanner: React.FC = React.memo(() => {
    const searchParams = useSearchParams();
    const querySelection = searchParams.get('selection');

    const {
        filters: { sort },
    } = useTypedSelector(({ products }) => products);
    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const currentSelection = querySelection ? selections.find(({ id }) => id === +querySelection) || null : null;

    return searchParams.get('price_drop') == 'true' ? (
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
    ) : searchParams.get('boutique') == 'true' ? (
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
    ) : searchParams.getAll('categories').length === 1 && searchParams.get('categories') === 'Сумки' ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImageItbag.src}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">Лучшие it-bags этого года</h3>
                <p className="catalog-banner-text__description">
                    Самые узнаваемые дизайнерские сумки, которые носят селебрити и инфлюенсеры
                </p>
                <Link
                    href={getCatalogFiltersUrl({
                        selection: SELECTIONS_IDS.itBags,
                        sort: 'popular',
                    })}
                    className="btn catalog-banner-text__btn"
                >
                    Выбрать it-bag
                </Link>
            </div>
        </div>
    ) : sort === 'popular' ? (
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
    ) : null;
});

export default CatalogBanner;
