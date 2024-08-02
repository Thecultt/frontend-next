'use client';

import React from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { RenderInput, RenderSelect, RenderInputHints, Spinner } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useWaitingData } from '@/hooks/catalog/useWaitingData';
import { CATEGORY_NAMES } from '@/constants/catalog';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

import { validate } from './validate';

const WaitingListCreateForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
}) => {
    const selector = formValueSelector('waiting-list-form');

    const { waitingData: initData } = useWaitingData();

    const [_isInit, setIsInit] = React.useState(false);

    const { currentCategory, currentType, currentBrand, currentModel } = useTypedSelector((state) => {
        const { category, type, brand, model } = selector(state, 'category', 'type', 'brand', 'model');
        return {
            currentCategory: category,
            currentType: type,
            currentBrand: brand,
            currentModel: model,
        };
    });

    const { isLoaded, user, isLoggedIn } = useAuthUser();

    const { categories } = useTypedSelector(({ products_filters }) => products_filters);
    const isLoadedProductsFilters = useTypedSelector(({ products_filters }) => products_filters.isLoaded);

    const { brands, models } = React.useMemo(() => {
        const brandsSet = new Set<string>([]);
        const modelsSet = new Set<string>([]);

        if (
            isLoadedProductsFilters &&
            currentCategory &&
            categories[currentCategory] &&
            categories[currentCategory].subsubcategories
        ) {
            if (
                !!currentType &&
                categories[currentCategory].subsubcategories[currentType] &&
                categories[currentCategory].subsubcategories[currentType].manufacturers
            ) {
                Object.keys(categories[currentCategory].subsubcategories[currentType].manufacturers).forEach(
                    (brand) => {
                        brandsSet.add(brand);
                    },
                );

                Object.keys(categories[currentCategory].subsubcategories[currentType].manufacturers).forEach(
                    (brand) => {
                        const models =
                            categories[currentCategory].subsubcategories[currentType].manufacturers?.[brand]?.models;
                        if (models) {
                            Object.keys(models).forEach((model) => {
                                modelsSet.add(model);
                            });
                        }
                    },
                );
            } else {
                Object.keys(categories[currentCategory].subsubcategories).forEach((subsubcategory) => {
                    Object.keys(categories[currentCategory].subsubcategories[subsubcategory].manufacturers).forEach(
                        (brand) => {
                            brandsSet.add(brand);
                        },
                    );

                    const models =
                        categories[currentCategory].subsubcategories?.[subsubcategory]?.manufacturers?.[currentBrand]
                            ?.models;
                    if (models) {
                        Object.keys(models).forEach((model) => {
                            modelsSet.add(model);
                        });
                    }
                });
            }
        }

        return { brands: Array.from(brandsSet), models: Array.from(modelsSet) };
    }, [categories, currentBrand, currentCategory, currentType, isLoadedProductsFilters]);

    const brandsHints = React.useMemo(() => {
        const items = brands.map((brand) => ({ title: brand, value: brand }));

        if (currentBrand) {
            return items.filter(({ value }) => value.toLowerCase().indexOf(currentBrand.toLowerCase()) !== -1);
        }

        return items;
    }, [currentBrand, brands]);

    const modelsHints = React.useMemo(() => {
        const items = models.map((model) => ({ title: model, value: model }));

        if (currentModel) {
            return items.filter(({ value }) => value.toLowerCase().indexOf(currentModel.toLowerCase()) !== -1);
        }

        return items;
    }, [currentModel, models]);

    React.useEffect(() => {
        if (isLoaded) {
            if (initData) {
                initialize({
                    email: user.email,
                    ...initData,
                });

                setIsInit(true);
            } else {
                initialize({
                    email: user.email,
                });
            }
        }
    }, [isLoaded, initData]);

    React.useEffect(() => {
        if (currentCategory && !initData) {
            initialize({
                email: user.email,
                category: currentCategory,
                type: '',
                brand: '',
                model: '',
                size: '',
            });
        }
    }, [currentCategory]);

    return (
        <form className="cabinet-waiting-list-form" onSubmit={handleSubmit}>
            <h2 className="cabinet-waiting-list-form__title">Подписаться на модель</h2>

            <p className="cabinet-waiting-list-form__description">
                Отправьте заявку, чтобы получить уведомление о появлении аналогичной модели на нашем сайте
            </p>

            {!isLoadedProductsFilters ? (
                <Spinner />
            ) : (
                <>
                    {!isLoggedIn && (
                        <div className="cabinet-waiting-list-form-auth-message">
                            <svg
                                width="38"
                                height="39"
                                viewBox="0 0 38 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="0.5" width="38" height="37.9979" rx="18.9989" fill="#F2F5F4" />
                                <path
                                    d="M19.002 18.5C21.2111 18.5 23.002 16.7091 23.002 14.5C23.002 12.2909 21.2111 10.5 19.002 10.5C16.7928 10.5 15.002 12.2909 15.002 14.5C15.002 16.7091 16.7928 18.5 19.002 18.5Z"
                                    stroke="#285141"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M27 28.4961V26.4961C27 25.4352 26.5786 24.4178 25.8284 23.6677C25.0783 22.9175 24.0609 22.4961 23 22.4961H15C13.9391 22.4961 12.9217 22.9175 12.1716 23.6677C11.4214 24.4178 11 25.4352 11 26.4961V28.4961"
                                    stroke="#285141"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <div className="cabinet-waiting-list-form-auth-message-text">
                                <p className="cabinet-waiting-list-form-auth-message-text__title">
                                    Вам нужен аккаунт, чтобы создать заявку
                                </p>

                                <p className="cabinet-waiting-list-form-auth-message-text__link">
                                    <Link href={`#${ReglogStateTypesNotLogin.REGLOG}`}>Войдите</Link> или{' '}
                                    <Link href={`#${ReglogStateTypesNotLogin.REGLOG}`}>Зарегистрируйтесь</Link>
                                </p>
                            </div>
                        </div>
                    )}

                    <div
                        className={getClassNames('cabinet-waiting-list-form-content', {
                            disabled: !isLoaded,
                        })}
                    >
                        <div className="cabinet-waiting-list-form-content-input" style={{ width: '100%' }}>
                            <Field
                                component={RenderInput}
                                label="Почта для уведомлений"
                                name="email"
                                disabled={isLoaded}
                            />
                        </div>

                        <div className="cabinet-waiting-list-form-content-select" style={{ width: '100%' }}>
                            <Field
                                component={RenderSelect}
                                label="Категория"
                                items={Object.keys(categories)}
                                name="category"
                                disabled={initData || !Object.keys(categories).length}
                            />
                        </div>

                        {currentCategory === CATEGORY_NAMES.bags || !currentCategory ? (
                            <>
                                <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                                    <Field
                                        component={RenderInputHints}
                                        name="brand"
                                        label="Бренд"
                                        hints={brandsHints}
                                        disabled={initData ? true : categories[currentCategory] ? false : true}
                                        bgWhite
                                        ifFreeField
                                    />
                                </div>

                                <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                                    <Field
                                        component={RenderInputHints}
                                        name="model"
                                        label="Модель"
                                        hints={modelsHints}
                                        disabled={initData ? true : categories[currentCategory] ? false : true}
                                        bgWhite
                                        ifFreeField
                                    />
                                </div>
                            </>
                        ) : null}

                        {currentCategory === CATEGORY_NAMES.accessories ? (
                            <>
                                <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                                    <Field
                                        component={RenderSelect}
                                        label="Тип продукта"
                                        items={
                                            categories[currentCategory]
                                                ? Object.keys(categories[currentCategory].subsubcategories)
                                                : []
                                        }
                                        name="type"
                                        disabled={initData ? true : categories[currentCategory] ? false : true}
                                    />
                                </div>

                                <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                                    <Field
                                        component={RenderInputHints}
                                        name="brand"
                                        label="Бренд"
                                        hints={brandsHints}
                                        disabled={initData ? true : categories[currentCategory] ? false : true}
                                        bgWhite
                                        ifFreeField
                                    />
                                </div>
                            </>
                        ) : null}

                        {currentCategory === CATEGORY_NAMES.shoes ? (
                            <>
                                <div className="cabinet-waiting-list-form-content-select" style={{ width: '100%' }}>
                                    <Field
                                        component={RenderSelect}
                                        label="Тип продукта"
                                        items={
                                            categories[currentCategory]
                                                ? Object.keys(categories[currentCategory].subsubcategories)
                                                : []
                                        }
                                        name="type"
                                        disabled={initData ? true : categories[currentCategory] ? false : true}
                                    />
                                </div>

                                <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                                    <Field
                                        component={RenderInputHints}
                                        name="brand"
                                        label="Бренд"
                                        hints={brandsHints}
                                        disabled={initData ? true : categories[currentCategory] ? false : true}
                                        bgWhite
                                        ifFreeField
                                    />
                                </div>

                                <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                                    <Field
                                        component={RenderSelect}
                                        label="Размер"
                                        name="size"
                                        items={categories[currentCategory].size}
                                        disabled={initData ? true : categories[currentCategory] ? false : true}
                                    />
                                </div>
                            </>
                        ) : null}

                        <button
                            className={getClassNames('btn cabinet-waiting-list-form-content__btn', {
                                disabled: invalid || submitting,
                            })}
                            disabled={invalid || submitting}
                        >
                            Отправить заявку
                        </button>
                    </div>
                </>
            )}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'waiting-list-form',
    validate,
})(WaitingListCreateForm);
