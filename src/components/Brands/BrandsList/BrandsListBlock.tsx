import React from 'react';
import Link from 'next/link';

import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SORT } from '@/constants/catalog';

interface BrandsListBlockProps {
    letter: string;
    brands: string[];
}

const BrandsListBlock: React.FC<BrandsListBlockProps> = ({ letter, brands }) => {
    return (
        <div className="brands-list-block">
            <h3 className="brands-list-block__title">{letter}</h3>

            <div className="brands-list-block-items-wrapper">
                {brands.map((brand, index) => (
                    <Link
                        href={getCatalogFiltersUrl({
                            brands: [brand],
                            sort: SORT.a,
                        })}
                        className="brands-list-block__item"
                        key={`brands-list-block__item-${index}`}
                    >
                        {brand}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BrandsListBlock;
