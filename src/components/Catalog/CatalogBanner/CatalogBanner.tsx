'use client';

import React from 'react';

import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SELECTIONS_IDS, SORT, CATEGORY_SLUG_NAMES, CATEGORY_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';
import { APP_ROUTE } from '@/constants/routes';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectSelectionsItems } from '@/redux/slices/selections/selectors';

import CatalogBannerImagePriceDrop from '@/assets/images/catalog/catalog-banner-price-drop.jpg';
import CatalogBannerImagePriceDrop2 from '@/assets/images/catalog/catalog-banner-price-drop2.jpg';
import CatalogBannerImageBoutique from '@/assets/images/catalog/catalog-banner-boutique.jpg';
import CatalogBannerImagePopular from '@/assets/images/catalog/catalog-banner-popular.jpg';
import CatalogBannerImageConcierge from '@/assets/images/concierge/concierge-main.jpg';

import { CatalogBannerTemplate } from './CatalogBannerTemplate';

const CatalogBanner: React.FC = React.memo(() => {
    const {
        filters: { sort, selection: selectionId, price_drop, boutique, categories: selectedCategories, category_slug },
    } = useCatalogFilters();
    const selections = useAppSelector(selectSelectionsItems);

    const categories = category_slug ? [CATEGORY_SLUG_NAMES[category_slug]] : selectedCategories;
    const currentSelection = selectionId ? selections.find(({ id }) => id.toString() === selectionId) ?? null : null;

    if (
        (category_slug && [CATEGORY_SLUGS.shoes, CATEGORY_SLUGS.accessories].includes(category_slug)) ||
        (categories.length === 1 &&
            (categories[0] === CATEGORY_NAMES.shoes || categories[0] === CATEGORY_NAMES.accessories)) ||
        sort === SORT.a
    ) {
        return (
            <CatalogBannerTemplate
                image="https://storage.yandexcloud.net/prod-cultt-banner/15/mEnb5jp0fXe8jZsR6332V31ZWnLpqM595tnSj3An.jpg"
                title="Осенние лоты"
                description="Мастхэвы, без которых мы не представляем свой осенний гардероб"
                link={{
                    href: getCatalogFiltersUrl({
                        selection: SELECTIONS_IDS.autumnBags.toString(),
                    }),
                    title: 'В подборку',
                }}
            />
        );
    }

    if (
        (category_slug && [CATEGORY_SLUGS.bags, CATEGORY_SLUGS.decorations].includes(category_slug)) ||
        (categories.length === 1 &&
            (categories[0] === CATEGORY_NAMES.bags || categories[0] === CATEGORY_NAMES.decorations))
    ) {
        return (
            <CatalogBannerTemplate
                image={CatalogBannerImageConcierge.src}
                imageExtraStyles={{ backgroundPosition: 'center -50px' }}
                title={
                    <>
                        Доставим для вас сумки <br /> и&nbsp;ювелирные украшения
                    </>
                }
                description={
                    <>
                        Консьерж-сервис THE CULTT доставит для вас из&nbsp;Европы и&nbsp;США любые позиции
                        с&nbsp;официальных сайтов Herm&egrave;s, Chanel, Cartier, Panerai и&nbsp;других культовых
                        брендов
                    </>
                }
                link={{
                    title: 'Заказать через консьержа',
                    href: APP_ROUTE.concierge.root,
                }}
            />
        );
    }

    return price_drop ? (
        <CatalogBannerTemplate
            image={CatalogBannerImagePriceDrop.src}
            title="THE CULTT SALE"
            description="Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то ещё."
        />
    ) : boutique ? (
        <CatalogBannerTemplate
            image={CatalogBannerImageBoutique.src}
            title="Из бутика"
            description="Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных байеров. Все аксессуары в этой подборке — новые и никогда не были в использовании."
        />
    ) : currentSelection ? (
        <CatalogBannerTemplate
            image={currentSelection.background_image ?? ''}
            title={currentSelection.title ?? ''}
            description={currentSelection.description ?? ''}
        />
    ) : sort === SORT.popular ? (
        <CatalogBannerTemplate
            image={CatalogBannerImagePopular.src}
            title="Горячие лоты"
            description="Успейте заказать: лоты в единственном экземпляре и с максимумом «сердечек»"
        />
    ) : (
        <CatalogBannerTemplate
            image={CatalogBannerImagePriceDrop2.src}
            title="THE CULTT SALE"
            description="Культовые лоты по сниженным ценам — успейте забрать их первыми"
            link={{
                title: 'Смотреть подборку',
                href: getCatalogFiltersUrl({
                    category_slug: CATEGORY_SLUGS.sale,
                }),
            }}
        />
    );
});

export default CatalogBanner;
