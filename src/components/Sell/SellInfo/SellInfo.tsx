import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, formValueSelector, Field } from 'redux-form';
import Link from 'next/link';

import { CabinetSellStepKeys } from '@/redux/types/ICabinetSell';
import { setCabinetSellCurrentStep } from '@/redux/actions/cabinet_sell';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Popup, RenderInput, RenderInputHints, RenderSelect, RenderSelectArray, SellBackBtn } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

import { APP_ROUTE } from '@/constants/routes';
import { CATEGORY_NAMES } from '@/constants/sell';

import validate from './validate';

const SellInfo: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    submitting,
    initialize,
    initialized,
}) => {
    const dispatch = useDispatch();

    const data: any = JSON.parse(localStorage.getItem('sell-info-form') as any);

    const [isVisibleJewelryPopup, setIsVisibleJewelryPopup] = React.useState(false);

    const [currentCategory, setCurrentCategory] = React.useState('');
    const [currentBrand, setCurrentBrand] = React.useState('');

    const [brands, setBrands] = React.useState<{ title: string; value: string }[]>([]);
    const [models, setModels] = React.useState<{ title: string; value: string }[]>([]);

    const { parameters } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);
    const selector = formValueSelector('sell-info-form');

    const { brandValue, conditionValue, defectsValue, categoryValue, modelValue, priceValue, boughtInCulttValue } =
        useTypedSelector((state) => {
            const { brand, condition, defects, category, model, price, bought_in_cultt } = selector(
                state,
                'brand',
                'condition',
                'defects',
                'category',
                'model',
                'price',
                'bought_in_cultt',
            );
            return {
                brandValue: brand,
                conditionValue: condition,
                defectsValue: defects,
                categoryValue: category,
                modelValue: model,
                priceValue: price,
                boughtInCulttValue: bought_in_cultt,
            };
        });

    React.useEffect(() => {
        if (data) {
            if (data.category) {
                setCurrentCategory(data.category);
            }

            if (data.brand) {
                setCurrentBrand(data.brand);
            }

            initialize(data);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem(
            'sell-info-form',
            JSON.stringify({
                brand: brandValue,
                condition: conditionValue,
                defects: defectsValue,
                category: categoryValue,
                model: modelValue,
                price: priceValue,
                bought_in_cultt: boughtInCulttValue,
            }),
        );
    }, [brandValue, conditionValue, defectsValue, categoryValue, modelValue, priceValue, boughtInCulttValue]);

    React.useEffect(() => {
        if (parameters[currentCategory]) {
            parameters[currentCategory].brands.map((brand) => {
                if (brand.name === currentBrand) {
                    setModels(
                        brand.models.map((model) => ({
                            title: model.name,
                            value: model.name,
                        })),
                    );
                }
            });

            setBrands(
                parameters[currentCategory].brands.map((brand) => ({
                    title: brand.name,
                    value: brand.name,
                })),
            );
        }

        if (currentCategory === CATEGORY_NAMES.jewelry) {
            setIsVisibleJewelryPopup(true);
        }
    }, [currentCategory]);

    const onChangeCategory = (value: string) => {
        if (currentCategory === '') {
            setCurrentCategory(value);
        } else if (value !== currentCategory) {
            setCurrentCategory(value);

            initialize({
                category: value,
                brand: '',
                models: '',
                condition: '',
                defects: '',
                size: '',
                client_kit: '',
                price: '',
                bought_in_cultt: '',
            });

            localStorage.removeItem('sell-images-form');

            setCurrentBrand('');
        } else {
            setCurrentCategory(value);
        }
    };

    const onChangeInputBrand = (value: string) => {
        const newBrands: { title: string; value: string }[] = [];

        parameters[currentCategory].brands.map((brand) => {
            if (brand.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                newBrands.push({ title: brand.name, value: brand.name });
            }
        });

        setCurrentBrand(value);
        setBrands(newBrands);

        const newModels: { title: string; value: string }[] = [];

        parameters[currentCategory].brands.map((brand) => {
            if (brand.name === value) {
                brand.models.map((model) => {
                    newModels.push({ title: model.name, value: model.name });
                });
            }
        });

        setModels(newModels);
    };

    const onChangeInputModel = (value: string) => {
        const newModels: { title: string; value: string }[] = [];

        parameters[currentCategory].brands.map((brand) => {
            if (brand.name === currentBrand) {
                brand.models.map((model) => {
                    if (model.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                        newModels.push({
                            title: model.name,
                            value: model.name,
                        });
                    }
                });
            }
        });

        setModels(newModels);
    };

    const onClickBack = () => {
        dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.COOPERATION));

        localStorage.removeItem('sell-images-form');
    };

    return (
        <>
            <Popup state={isVisibleJewelryPopup} setState={() => setIsVisibleJewelryPopup(false)} center>
                <div className="sell-jewelry-popup">
                    <h3 className="sell-jewelry-popup__title">Ювелирные изделия</h3>
                    <p className="sell-jewelry-popup__description">
                        Ювелирные изделия — это украшения из драгоценных металлов: золота, серебра или платины. Все
                        ювелирные изделия перед продажей в РФ должны быть промаркированы. THE CULTT JEWELRY берет это на
                        себя.
                        <br />
                        <b>№ 41-ФЗ «О драгоценных металлах и драгоценных камнях»</b>
                        <br />
                        «Находящиеся в продаже ювелирные изделия из драгоценных металлов и драгоценных камней, которые
                        произвели в России или ввезли в страну, с 1 марта 2024 года должны быть промаркированы
                        двухмерным штриховым кодом рядом с клеймом. Такое требование закреплено в постановлении
                        Правительства России от 26.02.2021 № 270»
                    </p>

                    <button className="btn sell-jewelry-popup__btn" onClick={() => setIsVisibleJewelryPopup(false)}>
                        Понятно
                    </button>
                </div>
            </Popup>

            <form onSubmit={handleSubmit} className="sell-block sell-block-info">
                <SellBackBtn onClick={onClickBack} />

                <h3 className="sell-block__title">Информация о товаре</h3>

                <p className="sell-block__subtitle">Заполните детальную информацию о продаваемом товаре.</p>

                <div className="sell-block-input-wrapper-wrapper">
                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">Категория товара</h4>

                        <Field
                            component={RenderSelect}
                            name="category"
                            label="Категория товара"
                            items={Object.keys(parameters)}
                            onChangeCutsom={onChangeCategory}
                        />
                    </div>

                    {(currentCategory === CATEGORY_NAMES.jewelry || currentCategory === CATEGORY_NAMES.watch) && (
                        <div className="sell-block-select">
                            <h4 className="sell-block-select__title">В украшении есть драгоценные камни</h4>

                            <Field
                                component={RenderSelect}
                                name="precious_stones_in_kit"
                                label="В украшении есть драгоценные камни"
                                items={['Да', 'Нет']}
                            />
                        </div>
                    )}

                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">Бренд товара</h4>

                        <Field
                            component={RenderInputHints}
                            name="brand"
                            label="Бренд товара"
                            hints={brands}
                            disabled={parameters[currentCategory] ? false : true}
                            onChangeCustom={(value: string) => onChangeInputBrand(value)}
                            bgWhite
                            ifFreeField
                        />
                    </div>

                    {(currentCategory === CATEGORY_NAMES.mensBags || currentCategory === CATEGORY_NAMES.womensBags) && (
                        <div className="sell-block-select">
                            <h4 className="sell-block-select__title">Модель товара</h4>

                            <Field
                                component={RenderInputHints}
                                name="model"
                                label="Модель товара"
                                hints={models}
                                disabled={currentBrand !== '' ? false : true}
                                onChangeCustom={(value: string) => onChangeInputModel(value)}
                                bgWhite
                                ifFreeField
                            />
                        </div>
                    )}

                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">
                            Состояние товара
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z"
                                    stroke="#202020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="message-info-wrapper">
                                <span className="message-info">
                                    <ul>
                                        <li>
                                            <span>Новое</span>: лот не был в носке и не имеет повреждений или нюансов.
                                            Форма аксессуара сохранена.
                                        </li>
                                        <li>
                                            <span>Отличное</span>: лот внешне выглядит отлично, аксессуар носился мало и
                                            бережно. Могут присутствовать следующие нюансы: минимальное изменение формы
                                            у сумки, потертость без конкретных видимых дефектов, локальные небольшие
                                            восстановления.
                                        </li>
                                        <li>
                                            <span>Хорошее</span>: присутствуют значительные следы носки. Могут
                                            присутствовать следующие нюансы: отсутствие элементов полного комплекта,
                                            загар, потертости или царапины на коже, пятна на материале, следы носки на
                                            подкладке, потертости на фурнитуре, сумка была в спа
                                        </li>
                                    </ul>
                                </span>
                            </span>
                        </h4>

                        <Field
                            component={RenderSelect}
                            name="condition"
                            label="Состояние товара"
                            items={
                                parameters[currentCategory]
                                    ? parameters[currentCategory].conditions.map((condition) => condition.name)
                                    : []
                            }
                            disabled={parameters[currentCategory] ? false : true}
                        />
                    </div>

                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">Наличие дефектов</h4>

                        <Field
                            component={RenderSelectArray}
                            name="defects"
                            label="Наличие дефектов"
                            items={
                                parameters[currentCategory]
                                    ? parameters[currentCategory].defects.map((defect) => defect.name)
                                    : []
                            }
                            disabled={parameters[currentCategory] ? false : true}
                        />
                    </div>

                    {currentCategory === CATEGORY_NAMES.shoes && (
                        <div className="sell-block-select">
                            <h4 className="sell-block-select__title">Размер</h4>

                            <Field component={RenderInput} name="size" label="Размер" bgWhite />
                        </div>
                    )}

                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">Комплект</h4>

                        <Field
                            component={RenderSelectArray}
                            name="client_kit"
                            label="Комплект"
                            items={
                                parameters[currentCategory]
                                    ? parameters[currentCategory].kits.map((kit) => kit.name)
                                    : []
                            }
                            disabled={parameters[currentCategory] ? false : true}
                        />
                    </div>

                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">
                            Ожидание по цене
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z"
                                    stroke="#202020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="message-info-wrapper">
                                <span className="message-info">
                                    Напишите цену, которую хотели бы получить на руки при продаже товара.
                                </span>
                            </span>
                        </h4>

                        <Field component={RenderInput} name="price" label="Ожидание по цене" bgWhite />
                    </div>

                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">
                            Товар приобретен в THE CULTT
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z"
                                    stroke="#202020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="message-info-wrapper">
                                <span className="message-info">
                                    Укажите, если ранее товар был приобретен на нашей платформе, на него будут
                                    действовать особые условия. <Link href={APP_ROUTE.exchange}>Подробнее</Link>
                                </span>
                            </span>
                        </h4>

                        <Field
                            component={RenderSelect}
                            name="bought_in_cultt"
                            label="Товар приобретен в THE CULTT"
                            items={['Да', 'Нет']}
                        />
                    </div>
                </div>

                <button
                    className={getClassNames('btn sell-block__btn', {
                        disabled: submitting,
                    })}
                    disabled={submitting}
                >
                    Продолжить
                </button>
            </form>
        </>
    );
};

export default reduxForm<{}, {}>({
    form: 'sell-info-form',
    validate,
})(SellInfo);
