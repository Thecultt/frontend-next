import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface BuyerTheCulttMainCategoryBrandsProps {
    brands: string[];
    currentFilterBrand: string;
    setCurrentFilterBrand: (brand: string) => void;
}

const BuyerTheCulttMainCategoryBrands: React.FC<BuyerTheCulttMainCategoryBrandsProps> = ({
    brands,
    currentFilterBrand,
    setCurrentFilterBrand,
}) => {
    return (
        <div className="buyer-thecultt-category-brands">
            {brands.map((brand, index) => (
                <button
                    key={`buyer-thecultt-category-brands__brand-${brand}-${index}`}
                    className={getClassNames('buyer-thecultt-category-brands__brand', {
                        active: currentFilterBrand === brand,
                    })}
                    onClick={() => setCurrentFilterBrand(brand)}
                >
                    {brand}
                </button>
            ))}
        </div>
    );
};

export default BuyerTheCulttMainCategoryBrands;
