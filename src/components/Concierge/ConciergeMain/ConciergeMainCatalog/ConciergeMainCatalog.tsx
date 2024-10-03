import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ConciergeMainCatalogCategories, ConciergeMainCatalogBrand, ConciergeMainCatalogProduct } from '@/components';
import { PageLoader } from '@/shared/ui';

interface Props {
    scrollToForm: () => void;
}

const ConciergeMainCatalog: React.FC<Props> = ({ scrollToForm }) => {
    const { isLoadedCategories, categories, currentCategory, currentBrand } = useTypedSelector(
        ({ concierge }) => concierge,
    );

    return (
        <>
            {isLoadedCategories ? (
                <div className="concierge-catalog">
                    <div className="concierge-catalog-filters">
                        <ConciergeMainCatalogCategories />

                        <ConciergeMainCatalogBrand />
                    </div>

                    <div className="concierge-catalog-products">
                        {categories[currentCategory].products
                            .filter((product) => (currentBrand === '' ? product : product.brand === currentBrand))
                            .map((product, index) => (
                                <ConciergeMainCatalogProduct
                                    {...product}
                                    key={`concierge-catalog-products-product-${product.id}-${index}`}
                                />
                            ))}

                        <div className="concierge-catalog-products-application" onClick={scrollToForm}>
                            <h3 className="concierge-catalog-products-application__title">
                                Нет нужного лота?
                                <br />
                                Закажите его через нас
                            </h3>

                            <button
                                className={'btn-light-green concierge-catalog-products-application__btn'}
                                // onClick={onClickOpenCustomForm}
                            >
                                Заказать сейчас
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <PageLoader />
            )}
        </>
    );
};

export default ConciergeMainCatalog;
