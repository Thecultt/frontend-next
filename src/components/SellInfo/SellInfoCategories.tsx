import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import { CategoriesItem } from '@/components/Home/HomeCategories/HomeCategories';

import HomeCategoriesBagImage from '@/assets/images/home/home-categories-bag.jpg';
import HomeCategoriesShoesImage from '@/assets/images/home/home-categories-shoes.jpg';
import HomeCategoriesDecorationImage from '@/assets/images/home/home-categories-decoration.jpg';
import SellInfoCategoriesAccessoriesImage from '@/assets/images/sell-info/sell-info-categories-accessories.jpg';

const categories: CategoriesItem[] = [
    {
        image: HomeCategoriesBagImage.src,
        title: 'Сумки',
    },
    {
        image: HomeCategoriesShoesImage.src,
        title: 'Обувь',
    },
    {
        image: HomeCategoriesDecorationImage.src,
        title: 'Украшения',
    },
    {
        image: SellInfoCategoriesAccessoriesImage.src,
        title: 'Аксессуары',
    },
];

const SellInfoCategories: React.FC = () => {
    return (
        <div className="sell-info-categories">
            <h2 className="sell-info__title">Какие категории мы принимаем для продажи</h2>

            <div className="sell-info-categories-blocks">
                {categories.map((category, index) => (
                    <Link
                        href={APP_ROUTE.sell.create}
                        className="sell-info-categories-blocks-block"
                        key={`sell-info-categories-blocks-block-${index}`}
                    >
                        <div className="home-categories-item">
                            <div
                                className="home-categories-item-image"
                                style={{ backgroundImage: `url("${category.image}")` }}
                            />

                            <h2 className="home-categories-item__title">{category.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SellInfoCategories;
