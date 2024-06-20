import React from 'react';

interface CatalogFiltersTopTitleProps {
    itemsCount: number;
}

const CatalogFiltersTopTitle: React.FC<CatalogFiltersTopTitleProps> = ({ itemsCount }) => {
    return (
        <div className="catalog-filters-top-title">
            <p className="catalog-filters-top-title__title">
                {/* {Object.keys(filters.selections).length ? (
					"Архив Алены Долецкой"
				) : (
					<>
						{query.get("theme") ? (
							query.get("theme")
						) : (
							filters.search !== "" ? (
								filters.search
							) : (
								Object.keys(filters.brands).length ? (
									Object.keys(filters.brands).map((brand, index) => `${brand}${Object.keys(filters.brands).length === index + 1 ? "" : ", "}`)
								) : Object.keys(filters.categories).length && Object.keys(filters.categories).length !== Object.keys(categories).length ? (
									Object.keys(filters.categories).map((category, index) => `${category}${Object.keys(filters.categories).length === index + 1 ? "" : ", "}`)
								) : "Новинки"
							)
						)}
					</>
				)} */}
            </p>

            <p className="catalog-filters-top-title__count">
                {/* {
					checkDeclension(itemsCount, [
						"товар",
						"товара",
						"товаров",
					]).title
				} */}
            </p>
        </div>
    );
};

export default CatalogFiltersTopTitle;
