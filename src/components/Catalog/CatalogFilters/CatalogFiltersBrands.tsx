'use client';

import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { CATEGORY_SLUG_NAMES } from '@/constants/catalog';

interface FilterModelListProps {
    brands: string[];
    selectedBrands: string[];
    onChange: (brands: string) => void;
}

const FilterBrandList: React.FC<FilterModelListProps> = ({ brands, selectedBrands, onChange }) => {
    const scrollBlockRef = React.useRef(null);

    const rowVirtualizer = useVirtualizer({
        count: brands.length,
        getScrollElement: () => scrollBlockRef.current,
        estimateSize: () => 32,
        overscan: 10,
    });

    return (
        <div ref={scrollBlockRef} className="catalog-filters-block-content-list">
            <div
                style={{
                    height: rowVirtualizer.getTotalSize(),
                    width: '100%',
                    position: 'relative',
                }}
            >
                {rowVirtualizer.getVirtualItems().map((row) => (
                    <div
                        className="catalog-filters-block-content-row"
                        key={row.index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: `${row.size}px`,
                            transform: `translateY(${row.start}px)`,
                            overflow: 'hidden',
                        }}
                    >
                        <Checkbox
                            id={`catalog-filters-block-content-brands-checkbox-${row.index}`}
                            label={brands[row.index]}
                            onChange={() => onChange(brands[row.index])}
                            checked={selectedBrands.includes(brands[row.index])}
                            textEllipsis
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const CatalogFiltersBrands: React.FC = () => {
    const [search, setSearch] = React.useState('');

    const {
        filters: { category_slug, categories: selectedCategories, brands: selectedBrands },
        updateFilters,
    } = useCatalogFilters();

    const { categories: fetchedCategories } = useTypedSelector(({ products_filters }) => products_filters);

    const brands = React.useMemo(() => {
        const items = category_slug
            ? [CATEGORY_SLUG_NAMES[category_slug]]
            : selectedCategories.length > 0
              ? selectedCategories
              : Object.keys(fetchedCategories);

        if (!items.length) {
            return [];
        }

        const brandsSet = new Set<string>([]);

        items.map((category) => {
            if (fetchedCategories[category] && fetchedCategories[category].subsubcategories) {
                Object.keys(fetchedCategories[category].subsubcategories).map((subsubcategory) => {
                    Object.keys(fetchedCategories[category].subsubcategories[subsubcategory].manufacturers).map(
                        (brand) => {
                            brandsSet.add(brand);
                        },
                    );
                });
            }
        });

        return Array.from(brandsSet).sort((a, b) => a.localeCompare(b));
    }, [category_slug, fetchedCategories, selectedCategories]);

    const visibleBrands = React.useMemo(() => {
        if (!search) {
            return brands;
        }

        return brands.filter((brand) => brand.toLowerCase().indexOf(search) !== -1);
    }, [brands, search]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
    };

    const onChangeSetBrand = (brand: string) => {
        updateFilters({
            brands: selectedBrands.includes(brand)
                ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
                : [...selectedBrands, brand],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Бренды" disabled={!brands.length}>
            <div className="catalog-filters-block-content-brands-search">
                <input
                    type="text"
                    className="catalog-filters-block-content-brands-search__input"
                    onChange={onChangeSearch}
                    value={search}
                />
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.33235 11.1647C9.27732 11.1647 11.6647 8.77731 11.6647 5.83234C11.6647 2.88737 9.27732 0.5 6.33235 0.5C3.38737 0.5 1 2.88737 1 5.83234C1 8.77731 3.38737 11.1647 6.33235 11.1647Z"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.9974 12.501L10.0979 9.60156"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <FilterBrandList brands={visibleBrands} selectedBrands={selectedBrands} onChange={onChangeSetBrand} />
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersBrands;
