import React from 'react';
import AnimateHeight from 'react-animate-height';
import dayjs from 'dayjs';

import { Order } from '@/models/IOrder';
import { CabinetHistoryOrdersItemProduct } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

interface CabinetHistoryOrdersItemProps extends Order {
    statusColor: string;
    onClickPay?: () => void;
}

const CabinetHistoryOrdersItem: React.FC<CabinetHistoryOrdersItemProps> = ({
    num,
    createdon,
    cost,
    client_name,
    client_phone,
    delivery_address,
    delivery_type,
    payment_type,
    products,
    statusColor,
    status,
    status_description,
    yandex_split_link,
    onClickPay,
}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="cabinet-history-orders-item-wrapper">
            <div className="cabinet-history-orders-item">
                <div className="cabinet-history-orders-item-topinfo" onClick={toggleOpen}>
                    <div className="cabinet-history-orders-item-topinfo-block">
                        <h3 className="cabinet-history-orders-item-topinfo-block__title">Заказ: #{num}</h3>

                        <p className="cabinet-history-orders-item-topinfo-block__date">
                            от {dayjs(createdon).format('DD.MM.YYYY')}
                        </p>

                        <p className="cabinet-history-orders-item-topinfo-block__sum">{cost} ₽</p>

                        <p className={`cabinet-history-orders-item-topinfo-block__status__media ${statusColor}`}>
                            {status}

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
                                <span className="message-info">{status_description}</span>
                            </span>
                        </p>
                    </div>
                    <div className="cabinet-history-orders-item-topinfo-block">
                        <p className={`cabinet-history-orders-item-topinfo-block__status ${statusColor}`}>
                            {status}

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
                                <span className="message-info">{status_description}</span>
                            </span>
                        </p>

                        {/* <p className="cabinet-history-orders-item-topinfo-block__status error">
								Возврат

								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_7335_16329)">
										<path d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</g>
									<defs>
										<clipPath id="clip0_7335_16329">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</p> */}

                        <div
                            className={getClassNames('cabinet-history-orders-item-topinfo-block-icon', {
                                rotate: isOpen,
                            })}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Icons">
                                    <path
                                        id="Vector"
                                        d="M5 8L12 15L19 8"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                <AnimateHeight duration={300} height={isOpen ? 'auto' : 1}>
                    <div className="cabinet-history-orders-item-info">
                        <div className="cabinet-history-orders-item-info-blocks-wrapper">
                            <div className="cabinet-history-orders-item-info-block">
                                <h3 className="cabinet-history-orders-item-info-block__title">Получатель</h3>
                                <p className="cabinet-history-orders-item-info-block__subtitle">
                                    <span>Имя:</span> {client_name}
                                </p>

                                <p className="cabinet-history-orders-item-info-block__subtitle">
                                    <span>Телефон:</span> {client_phone}
                                </p>
                            </div>
                            <div className="cabinet-history-orders-item-info-block">
                                <h3 className="cabinet-history-orders-item-info-block__title">Доставка</h3>
                                <p className="cabinet-history-orders-item-info-block__subtitle">
                                    <span>Вариант доставки:</span> {delivery_type}
                                </p>

                                <p className="cabinet-history-orders-item-info-block__subtitle">
                                    <span>Адрес доставки:</span> {delivery_address}
                                </p>
                            </div>
                            <div className="cabinet-history-orders-item-info-block">
                                <h3 className="cabinet-history-orders-item-info-block__title">Оплата</h3>

                                <p className="cabinet-history-orders-item-info-block__subtitle">
                                    <span>Тип оплаты:</span> {payment_type}
                                </p>
                            </div>
                        </div>

                        <div className="cabinet-history-orders-item-info-product-wrapper">
                            {products.map((product, index) => (
                                <CabinetHistoryOrdersItemProduct
                                    {...product}
                                    key={`cabinet-history-orders-item-info-product-${index}`}
                                />
                            ))}
                        </div>

                        {status === 'Ожидает оплаты' ? (
                            yandex_split_link ? (
                                <a href={yandex_split_link} className="btn cabinet-history-orders-item-info__btn">
                                    Оплатить заказ
                                </a>
                            ) : (
                                <button className="btn cabinet-history-orders-item-info__btn" onClick={onClickPay}>
                                    Оплатить заказ
                                </button>
                            )
                        ) : null}
                    </div>
                </AnimateHeight>
            </div>
        </div>
    );
};

export default CabinetHistoryOrdersItem;
