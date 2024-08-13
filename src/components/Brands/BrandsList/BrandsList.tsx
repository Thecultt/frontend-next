import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { BrandsListBlock } from '@/components';

const BrandsList: React.FC = () => {
    const { brands, letter, search } = useTypedSelector(({ brands }) => brands);

    return (
        <div className="brands-list">
            {!!letter && !search ? (
                <BrandsListBlock letter={letter} brands={brands[letter]} />
            ) : (
                Object.keys(brands).map((key, index) => (
                    <BrandsListBlock letter={key} brands={brands[key]} key={`brands-list-block-${index}`} />
                ))
            )}
        </div>
    );
};

export default BrandsList;
