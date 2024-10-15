'use client';

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useCatalogFiltersTitle } from '@/hooks/catalog/useCatalogFiltersTitle';
import { MEDIA_SIZES } from '@/constants/styles';
import { CatalogFiltersTopBoutique, CatalogFiltersTopSort, CatalogFiltersTopSortMedia } from '@/components';
import { Skeleton } from '@/shared/ui';
import { pluralize } from '@/functions/pluralize';

interface Props {
    isOpenFiltersMedia: boolean;
    setIsOpenFiltersMedia: (value: boolean) => void;
}

const CatalogFiltersTop: React.FC<Props> = React.memo(({ isOpenFiltersMedia, setIsOpenFiltersMedia }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const { itemsCount } = useTypedSelector(({ products }) => products);
    const { isLoaded } = useTypedSelector(({ products_filters }) => products_filters);

    const title = useCatalogFiltersTitle();

    if (!isLoaded) {
        return (
            <div className="catalog-filters-top">
                <Skeleton className="catalog-filters-top-skeleton-top" />
                {isMobile && <Skeleton className="catalog-filters-top-skeleton-bottom" />}
            </div>
        );
    }

    return (
        <div className="catalog-filters-top">
            <div className="catalog-filters-top-title">
                <p className="catalog-filters-top-title__title">{title}</p>
                <p className="catalog-filters-top-title__count">
                    Найдено: {pluralize(itemsCount, ['товар', 'товара', 'товаров'])}
                </p>
            </div>

            {isMobile && (
                <div className="catalog-filters-top-media-btn">
                    <div className="catalog-filters-top-media-btn-filters-wrapper">
                        <button
                            className="catalog-filters-top-media-btn__btn"
                            onClick={() => setIsOpenFiltersMedia(!isOpenFiltersMedia)}
                        >
                            Фильтровать
                            <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.50008 7.45001C4.08587 7.45001 3.75008 7.7858 3.75008 8.20001C3.75008 8.61423 4.08587 8.95001 4.50008 8.95001V7.45001ZM16.2477 11.3398L16.0841 12.0717L16.2477 11.3398ZM14.3533 9.44531L13.6213 9.60891L14.3533 9.44531ZM20.7615 9.44531L21.4934 9.60891L20.7615 9.44531ZM18.867 11.3398L19.0306 12.0717L18.867 11.3398ZM18.867 5.0602L19.0306 4.32827L18.867 5.0602ZM20.7615 6.95466L21.4934 6.79105L20.7615 6.95466ZM16.2477 5.0602L16.0841 4.32827L16.2477 5.0602ZM14.3533 6.95466L13.6213 6.79105L14.3533 6.95466ZM20.8216 17.35C21.2358 17.35 21.5716 17.0142 21.5716 16.6C21.5716 16.1858 21.2358 15.85 20.8216 15.85V17.35ZM9.07399 19.7398L9.23759 20.4717L9.07399 19.7398ZM10.9684 17.8453L11.7004 18.0089L10.9684 17.8453ZM4.5602 17.8453L3.82827 18.0089L4.5602 17.8453ZM6.45466 19.7398L6.29105 20.4717L6.45466 19.7398ZM6.45466 13.4602L6.29105 12.7283L6.45466 13.4602ZM4.5602 15.3547L3.82827 15.1911L4.5602 15.3547ZM9.07399 13.4602L9.23759 12.7283L9.07399 13.4602ZM10.9684 15.3547L11.7004 15.1911L10.9684 15.3547ZM4.50008 8.95001H14.6338V7.45001H4.50008V8.95001ZM17.493 5.75H17.6217V4.25H17.493V5.75ZM17.6217 10.65H17.493V12.15H17.6217V10.65ZM17.493 10.65C16.802 10.65 16.5795 10.6454 16.4113 10.6078L16.0841 12.0717C16.4546 12.1545 16.8827 12.15 17.493 12.15V10.65ZM13.543 8.19998C13.543 8.81027 13.5385 9.23839 13.6213 9.60891L15.0852 9.2817C15.0476 9.11353 15.043 8.89099 15.043 8.19998H13.543ZM16.4113 10.6078C15.7497 10.4599 15.2331 9.94328 15.0852 9.2817L13.6213 9.60891C13.8959 10.8376 14.8555 11.7971 16.0841 12.0717L16.4113 10.6078ZM20.0717 8.19998C20.0717 8.89099 20.0671 9.11353 20.0295 9.2817L21.4934 9.60891C21.5762 9.23839 21.5717 8.81027 21.5717 8.19998H20.0717ZM17.6217 12.15C18.232 12.15 18.6601 12.1545 19.0306 12.0717L18.7034 10.6078C18.5353 10.6454 18.3127 10.65 17.6217 10.65V12.15ZM20.0295 9.2817C19.8817 9.94328 19.365 10.4599 18.7034 10.6078L19.0306 12.0717C20.2593 11.7971 21.2188 10.8376 21.4934 9.60891L20.0295 9.2817ZM17.6217 5.75C18.3127 5.75 18.5353 5.75455 18.7034 5.79214L19.0306 4.32827C18.6601 4.24545 18.232 4.25 17.6217 4.25V5.75ZM21.5717 8.19998C21.5717 7.58969 21.5762 7.16157 21.4934 6.79105L20.0295 7.11826C20.0671 7.28643 20.0717 7.50897 20.0717 8.19998H21.5717ZM18.7034 5.79214C19.365 5.94002 19.8817 6.45668 20.0295 7.11826L21.4934 6.79105C21.2188 5.56241 20.2593 4.60289 19.0306 4.32827L18.7034 5.79214ZM17.493 4.25C16.8827 4.25 16.4546 4.24545 16.0841 4.32827L16.4113 5.79214C16.5795 5.75455 16.802 5.75 17.493 5.75V4.25ZM15.043 8.19998C15.043 7.50897 15.0476 7.28643 15.0852 7.11826L13.6213 6.79105C13.5385 7.16158 13.543 7.58969 13.543 8.19998H15.043ZM16.0841 4.32827C14.8555 4.60289 13.8959 5.56241 13.6213 6.79105L15.0852 7.11826C15.2331 6.45668 15.7497 5.94002 16.4113 5.79214L16.0841 4.32827ZM7.82866 12.65H7.69998V14.15H7.82866V12.65ZM7.69998 20.55H7.82866V19.05H7.69998V20.55ZM7.82866 20.55C8.43895 20.55 8.86707 20.5545 9.23759 20.4717L8.91039 19.0078C8.74221 19.0454 8.51967 19.05 7.82866 19.05V20.55ZM10.2786 16.6C10.2786 17.291 10.2741 17.5136 10.2365 17.6817L11.7004 18.0089C11.7832 17.6384 11.7786 17.2103 11.7786 16.6H10.2786ZM9.23759 20.4717C10.4662 20.1971 11.4258 19.2376 11.7004 18.0089L10.2365 17.6817C10.0886 18.3433 9.57196 18.86 8.91039 19.0078L9.23759 20.4717ZM3.75 16.6C3.75 17.2103 3.74545 17.6384 3.82827 18.0089L5.29214 17.6817C5.25455 17.5136 5.25 17.291 5.25 16.6H3.75ZM7.69998 19.05C7.00897 19.05 6.78643 19.0454 6.61826 19.0078L6.29105 20.4717C6.66158 20.5545 7.08969 20.55 7.69998 20.55V19.05ZM3.82827 18.0089C4.10289 19.2376 5.06241 20.1971 6.29105 20.4717L6.61826 19.0078C5.95668 18.86 5.44002 18.3433 5.29214 17.6817L3.82827 18.0089ZM7.69998 12.65C7.08969 12.65 6.66158 12.6455 6.29105 12.7283L6.61826 14.1922C6.78643 14.1546 7.00897 14.15 7.69998 14.15V12.65ZM5.25 16.6C5.25 15.909 5.25455 15.6865 5.29214 15.5183L3.82827 15.1911C3.74545 15.5616 3.75 15.9897 3.75 16.6H5.25ZM6.29105 12.7283C5.06241 13.0029 4.10289 13.9624 3.82827 15.1911L5.29214 15.5183C5.44002 14.8567 5.95668 14.34 6.61826 14.1922L6.29105 12.7283ZM7.82866 14.15C8.51967 14.15 8.74221 14.1546 8.91039 14.1922L9.23759 12.7283C8.86707 12.6455 8.43896 12.65 7.82866 12.65V14.15ZM11.7786 16.6C11.7786 15.9897 11.7832 15.5616 11.7004 15.1911L10.2365 15.5183C10.2741 15.6865 10.2786 15.909 10.2786 16.6H11.7786ZM8.91039 14.1922C9.57196 14.34 10.0886 14.8567 10.2365 15.5183L11.7004 15.1911C11.4258 13.9624 10.4662 13.0029 9.23759 12.7283L8.91039 14.1922ZM20.8216 15.85H10.555V17.35H20.8216V15.85Z"
                                    fill="#202020"
                                />
                            </svg>
                        </button>
                    </div>

                    <CatalogFiltersTopSortMedia />
                </div>
            )}

            <CatalogFiltersTopBoutique />
            <CatalogFiltersTopSort />
        </div>
    );
});

export default CatalogFiltersTop;
