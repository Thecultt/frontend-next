import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { ProductPage } from '@/models/IProduct';

const ProductInfoState: React.FC<ProductPage> = ({ condition, nuances }) => {
    return (
        <div className="product-content-info-state">
            <h3 className="product-content-info-state__title">
                Состояние
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <span>Новое</span>: лот не был в носке и не имеет повреждений или нюансов. Форма
                                аксессуара сохранена.
                            </li>
                            <li>
                                <span>Отличное</span>: лот внешне выглядит отлично, аксессуар носился мало и бережно.
                                Могут присутствовать следующие нюансы: минимальное изменение формы у сумки, потертость
                                без конкретных видимых дефектов, локальные небольшие восстановления.
                            </li>
                            <li>
                                <span>Хорошее</span>: присутствуют значительные следы носки. Могут присутствовать
                                следующие нюансы: отсутствие элементов полного комплекта, загар, потертости или царапины
                                на коже, пятна на материале, следы носки на подкладке, потертости на фурнитуре, сумка
                                была в спа
                            </li>
                        </ul>
                    </span>
                </span>
            </h3>

            {condition ? (
                <div className="product-content-info-state-bar">
                    {['Хорошее', 'Отличное', 'Новое'].map((conditionItem, index) => (
                        <div
                            className={getClassNames('product-content-info-state-bar-item', {
                                active: condition.toLocaleLowerCase() === conditionItem.toLocaleLowerCase(),
                            })}
                            key={`product-content-info-state-bar-item-${index}`}
                        >
                            <div className="product-content-info-state-bar-item-circle"></div>

                            <p className="product-content-info-state-bar-item__title">{conditionItem}</p>
                        </div>
                    ))}
                </div>
            ) : null}

            {nuances !== null && nuances !== '' && nuances ? (
                <p className="product-content-info-state__info">
                    <span>Следы жизни:</span> {nuances}
                </p>
            ) : null}
        </div>
    );
};

export default ProductInfoState;
