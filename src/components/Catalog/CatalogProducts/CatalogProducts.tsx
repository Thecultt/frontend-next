import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogProductsPagination, CatalogProductsNull, PageLoader, ProductCard } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

const CatalogProducts: React.FC = () => {
    const { items, isLoaded, itemsCount, isFetchMore, isFetchPage } = useTypedSelector(({ products }) => products);

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
                                <ProductCard key={index} productData={item} />
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
