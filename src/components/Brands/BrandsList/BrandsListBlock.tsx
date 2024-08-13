import React from 'react';
import Link from 'next/link';

import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SORT } from '@/constants/catalog';
import { IBrand } from '@/redux/types/IBrands';

interface BrandsListBlockProps {
    letter: string;
    brands: IBrand[];
}

const BrandsListBlock: React.FC<BrandsListBlockProps> = ({ letter, brands }) => {
    return (
        <div className="brands-list-block">
            <h3 className="brands-list-block__title">{letter}</h3>

            <div className="brands-list-block-items-wrapper">
                {brands.map((brand, index) => (
                    <Link
                        href={getCatalogFiltersUrl({
                            brands: [brand.word],
                            sort: SORT.a,
                        })}
                        className="brands-list-block__item"
                        key={`brands-list-block__item-${index}`}
                    >
                        {brand.word}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BrandsListBlock;
