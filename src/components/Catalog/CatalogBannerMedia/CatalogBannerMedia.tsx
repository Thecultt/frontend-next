import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SELECTIONS_IDS } from '@/constants/catalog';

import CatalogBannerImageBoutiqueMedia from '@/assets/images/catalog/catalog-banner-boutique-media.jpg';
import CatalogBannerImagePriceDropMedia from '@/assets/images/catalog/catalog-banner-price-drop-media.jpg';
import CatalogBannerImagePopularMedia from '@/assets/images/catalog/catalog-banner-popular-media.jpg';

const CatalogBannerMedia: React.FC = () => {
    const searchParams = useSearchParams();
    const querySelection = searchParams.get('selection');

    const {
        filters: { sort },
    } = useTypedSelector(({ products }) => products);
    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const currentSelection = querySelection ? selections.find(({ id }) => id === +querySelection) || null : null;

    return searchParams.get('price_drop') == 'true' ? (
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
    ) : searchParams.get('boutique') == 'true' ? (
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
    ) : searchParams.getAll('categories').length === 1 && searchParams.get('categories') === 'Сумки' ? (
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
                        selection: SELECTIONS_IDS.summerBags,
                        sort: 'popular',
                    })}
                    className="btn-light catalog-banner-media-text__btn"
                >
                    Смотреть подборку
                </Link>
            </div>
        </div>
    ) : sort === 'popular' ? (
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
    ) : null;
};

export default CatalogBannerMedia;
