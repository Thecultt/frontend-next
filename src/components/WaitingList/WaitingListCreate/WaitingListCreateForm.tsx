import React from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { RenderInput, RenderSelect, RenderInputHints } from '@/components';
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
    const [brands, setBrands] = React.useState<{ title: string; value: string }[]>([]);
    const [models, setModels] = React.useState<{ title: string; value: string }[]>([]);

    const { currentCategory, currentType, currentBrand } = useTypedSelector((state) => {
        const { category, type, brand } = selector(state, 'category', 'type', 'brand');
        return {
            currentCategory: category,
            currentType: type,
            currentBrand: brand,
        };
    });

    const { isLoaded, user } = useAuthUser();

    const { categories } = useTypedSelector(({ products_filters }) => products_filters);
    const isLoadedProductsFilters = useTypedSelector(({ products_filters }) => products_filters.isLoaded);

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
        // if (initData) {
        // 	if (isInit) {
        // 		initialize(({
        // 			email: user.email,
        // 			category: currentCategory,
        // 			type: "",
        // 			brand: "",
        // 			model: "",
        // 			size: "",
        // 		}))
        // 	}
        // } else if (currentCategory) {
        // 	initialize(({
        // 		email: user.email,
        // 		category: currentCategory,
        // 		type: "",
        // 		brand: "",
        // 		model: "",
        // 		size: "",
        // 	}))
        // }

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

    React.useEffect(() => {
        if (isLoadedProductsFilters && categories[currentCategory]) {
            const newBrands: { title: string; value: string }[] = [];
            const newModels: { title: string; value: string }[] = [];

            if (
                categories[currentCategory] &&
                categories[currentCategory].subsubcategories &&
                categories[currentCategory].subsubcategories[currentType]
            ) {
                if (categories[currentCategory].subsubcategories[currentType]) {
                    Object.keys(categories[currentCategory].subsubcategories[currentType]).map((brand) => {
                        newBrands.push({ title: brand, value: brand });
                    });

                    Object.keys(categories[currentCategory].subsubcategories[currentType]).map((type) => {
                        categories[currentCategory].subsubcategories[currentType][type].map((brand) => {
                            newModels.push({ title: brand, value: brand });
                        });
                    });
                } else {
                    Object.keys(categories[currentCategory].subsubcategories).map((subsubcategory) => {
                        Object.keys(categories[currentCategory].subsubcategories[subsubcategory]).map((brand) => {
                            if (!newBrands.find((findBrand) => brand === findBrand.title)) {
                                newBrands.push({ title: brand, value: brand });
                            }
                        });

                        if (categories[currentCategory].subsubcategories[subsubcategory]) {
                            if (categories[currentCategory].subsubcategories[subsubcategory][currentBrand]) {
                                categories[currentCategory].subsubcategories[subsubcategory][currentBrand].map(
                                    (model) => {
                                        if (!newModels.find((findModel) => model === findModel.title)) {
                                            newModels.push({
                                                title: model,
                                                value: model,
                                            });
                                        }
                                    },
                                );
                            }
                        }
                    });
                }
            }

            setBrands(newBrands);
            setModels(newModels);
        }
    }, [isLoadedProductsFilters, currentCategory, currentType]);

    const onChangeInputBrand = (value: string) => {
        const newBrands: { title: string; value: string }[] = [];

        Object.keys(categories[currentCategory].subsubcategories).map((subsubcategory) => {
            Object.keys(categories[currentCategory].subsubcategories[subsubcategory]).map((brand) => {
                if (
                    brand.toLowerCase().indexOf(value.toLowerCase()) !== -1 &&
                    !newBrands.find((findBrand) => brand === findBrand.title)
                ) {
                    newBrands.push({ title: brand, value: brand });
                }
            });
        });

        setBrands(newBrands);

        const newModels: { title: string; value: string }[] = [];

        Object.keys(categories[currentCategory].subsubcategories).map((subsubcategory) => {
            if (categories[currentCategory].subsubcategories[subsubcategory][value]) {
                categories[currentCategory].subsubcategories[subsubcategory][value].map((model) => {
                    newModels.push({ title: model, value: model });
                });
            }
        });

        setModels(newModels);
    };

    const onChangeInputModel = (value: string) => {
        const newModels: { title: string; value: string }[] = [];

        Object.keys(categories[currentCategory].subsubcategories).map((subsubcategory) => {
            if (categories[currentCategory].subsubcategories[subsubcategory][currentBrand]) {
                categories[currentCategory].subsubcategories[subsubcategory][currentBrand].map((model) => {
                    if (
                        model.toLowerCase().indexOf(value.toLowerCase()) !== -1 &&
                        !newModels.find((findModel) => model === findModel.title)
                    ) {
                        newModels.push({ title: model, value: model });
                    }
                });
            }
        });

        setModels(newModels);
    };

    return (
        <form className="cabinet-waiting-list-form" onSubmit={handleSubmit}>
            <h2 className="cabinet-waiting-list-form__title">Подписаться на модель</h2>

            <p className="cabinet-waiting-list-form__description">
                Отправьте заявку, чтобы получить уведомление о появлении аналогичной модели на нашем сайте
            </p>

            {!isLoaded ? (
                <div className="cabinet-waiting-list-form-auth-message">
                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="38" height="37.9979" rx="18.9989" fill="#F1EDE8" />
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
            ) : null}

            <div
                className={getClassNames('cabinet-waiting-list-form-content', {
                    disabled: !isLoaded,
                })}
            >
                <div className="cabinet-waiting-list-form-content-input" style={{ width: '100%' }}>
                    <Field component={RenderInput} label="Почта для уведомлений" name="email" disabled={isLoaded} />
                </div>

                <div className="cabinet-waiting-list-form-content-select" style={{ width: '100%' }}>
                    <Field
                        component={RenderSelect}
                        label="Категория"
                        items={Object.keys(categories)}
                        name="category"
                        disabled={initData}
                    />
                </div>

                {currentCategory === CATEGORY_NAMES.bags || !currentCategory ? (
                    <>
                        <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                            <Field
                                component={RenderInputHints}
                                name="brand"
                                label="Бренд"
                                hints={brands}
                                disabled={initData ? true : categories[currentCategory] ? false : true}
                                onChangeCustom={onChangeInputBrand}
                                bgWhite
                                ifFreeField
                            />
                        </div>

                        <div className="cabinet-waiting-list-form-content-select" style={{ width: '49%' }}>
                            <Field
                                component={RenderInputHints}
                                name="model"
                                label="Модель"
                                hints={models}
                                disabled={initData ? true : categories[currentCategory] ? false : true}
                                onChangeCustom={onChangeInputModel}
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
                                hints={brands}
                                disabled={initData ? true : categories[currentCategory] ? false : true}
                                onChangeCustom={onChangeInputBrand}
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
                                hints={brands}
                                disabled={initData ? true : categories[currentCategory] ? false : true}
                                onChangeCustom={onChangeInputBrand}
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
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'waiting-list-form',
    validate,
})(WaitingListCreateForm);
