import React from 'react';

import { BuyerTheCulttCategory } from '@/models/IBuyerTheCultt';
import { ConciergeMainCategoryBrands, ConciergeMainCategoryProduct } from '@/components';

interface BuyerTheCulttMainCategoryProps extends BuyerTheCulttCategory {
    title: string;
    onClickOpenCustomForm: () => void;
}

const BuyerTheCulttMainCategory: React.FC<BuyerTheCulttMainCategoryProps> = ({
    title,
    brands,
    products,
    onClickOpenCustomForm,
}) => {
    const [isViewAllProducts, setIsViewAllProducts] = React.useState<boolean>(false);

    const [currentFilterBrand, setCurrentFilterBrand] = React.useState<string>(brands[0]);

    const onClickCurrentFilterBrand = (brand: string) => {
        if (currentFilterBrand === brand) {
            setCurrentFilterBrand('');
        } else {
            setCurrentFilterBrand(brand);
        }
    };

    return (
        <div className="buyer-thecultt-category">
            <h2 className="buyer-thecultt-category__title">{title}</h2>

            <ConciergeMainCategoryBrands
                brands={brands}
                currentFilterBrand={currentFilterBrand}
                setCurrentFilterBrand={onClickCurrentFilterBrand}
            />

            <div className="buyer-thecultt-category-products-wrapper">
                {products
                    .filter((product) => (currentFilterBrand === '' ? product : product.brand === currentFilterBrand))
                    .map((product, index) => (
                        <ConciergeMainCategoryProduct
                            {...product}
                            key={`buyer-thecultt-category-${product.id}-${index}`}
                        />
                    ))
                    .slice(0, isViewAllProducts ? products.length : 8)}
            </div>

            {!isViewAllProducts && products.length > 8 ? (
                <button className="buyer-thecultt-category__view" onClick={() => setIsViewAllProducts(true)}>
                    Показать все
                </button>
            ) : null}

            <p className="buyer-thecultt-category__subtext">*предложение не является публичной офертой.</p>

            <p className="buyer-thecultt-category__subtitle">
                К заказу доступны все материалы и размеры из коллекции бренда. Если желаемой модели нет в этой подборке,
                свяжитесь с нами.
            </p>

            <button className="btn buyer-thecultt-category__btn" onClick={onClickOpenCustomForm}>
                Хочу другую модель
            </button>
        </div>
    );
};

export default BuyerTheCulttMainCategory;
