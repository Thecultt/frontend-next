import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

const SellInfoCommission: React.FC = () => {
    return (
        <div className="sell-info-commission">
            <h2 className="sell-info__title">Выберите идеальный для вас формат продажи</h2>

            <p className="sell-info__subtitle">
                Мы&nbsp;оценим ваш лот и&nbsp;согласуем с&nbsp;вами один из&nbsp;вариантов
            </p>

            <div className="sell-info-commission-blocks">
                <div className="sell-info-commission-blocks-col">
                    <div className="sell-info-commission-blocks-col-block">
                        <div className="sell-info-commission-blocks-col-block-text">
                            <h3 className="sell-info-commission-blocks-col-block-text__title">Выкуп</h3>

                            <p className="sell-info-commission-blocks-col-block-text__description">
                                Мы&nbsp;направим вам выплату сразу после того, как удостоверимся в&nbsp;подлинности
                                лота. Аутентификация в&nbsp;нашем офисе обычно занимает 3-4 рабочих дня.
                            </p>
                        </div>
                    </div>

                    <div className="sell-info-commission-blocks-col-block">
                        <div className="sell-info-commission-blocks-col-block-text">
                            <h3 className="sell-info-commission-blocks-col-block-text__title">Трейд-ин</h3>

                            <p className="sell-info-commission-blocks-col-block-text__description">
                                Мы&nbsp;предложим депозит, соответствующий стоимости вашего лота. Вы&nbsp;сможете сразу
                                потратить его на&nbsp;покупку любой другой вещи с&nbsp;сайта THE CULTT.
                                <br />
                                <br />
                                При обмене сумки, купленной у&nbsp;нас, для вас будут действовать особые выгодные
                                условия депозита.
                            </p>
                        </div>

                        <Link href={APP_ROUTE.exchange} className="sell-info-commission-blocks-col-block__link">
                            Подробнее о Круговороте
                        </Link>
                    </div>
                </div>

                <div className="sell-info-commission-blocks-block">
                    <h3 className="sell-info-commission-blocks-block__title">Продажа с&nbsp;комиссией</h3>

                    <p className="sell-info-commission-blocks-col-block__description">
                        Мы&nbsp;согласуем с&nbsp;вами оптимальную стоимость и&nbsp;заберем лот для продажи на&nbsp;THE
                        CULTT. Вы&nbsp;получите выплату после продажи лота.
                    </p>

                    <div className="sell-info-commission-blocks-block-table">
                        <h4 className="sell-info-commission-blocks-block-table__title">
                            Размер комиссии зависит от&nbsp;стоимости лота на&nbsp;нашем сайте.
                        </h4>

                        <div className="sell-info-commission-blocks-block-table-block">
                            <div className="sell-info-commission-blocks-block-table-block-head">
                                <p className="sell-info-commission-blocks-block-table-block-head__title">
                                    Цена товара в&nbsp;рублях
                                </p>

                                <p className="sell-info-commission-blocks-block-table-block-head__title">
                                    Наша комиссия с&nbsp;учетом налогов
                                </p>
                            </div>
                            <div className="sell-info-commission-blocks-block-table-block-body">
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        от&nbsp;8.000₽ до&nbsp;15.000₽
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        49%
                                    </p>
                                </div>
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        от&nbsp;15.001₽ до&nbsp;30.000₽
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        39%
                                    </p>
                                </div>
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        от&nbsp;30.001₽ до&nbsp;50.000₽
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        35%
                                    </p>
                                </div>
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        от&nbsp;50.001₽ до&nbsp;100.000₽
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        30%
                                    </p>
                                </div>
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        от&nbsp;100.001₽ до&nbsp;500.000₽
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        25%
                                    </p>
                                </div>
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        от&nbsp;500.001₽ и&nbsp;1.000.000
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        20%
                                    </p>
                                </div>
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        от&nbsp;1.000.001₽ и&nbsp;выше
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        15%
                                    </p>
                                </div>
                                <div className="sell-info-commission-blocks-block-table-block-body-item">
                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        Hermes Birkin и&nbsp;Kelly в&nbsp;состоянии <br /> &laquo;Из&nbsp;бутика&raquo;{' '}
                                    </p>

                                    <p className="sell-info-commission-blocks-block-table-block-body-item__title">
                                        10%
                                    </p>
                                </div>
                            </div>

                            <p className="sell-info-commission-blocks-block-table-block__subtitle">
                                *при продаже любого аксессуара, купленного в&nbsp;THE CULTT, мы&nbsp;предлагаем
                                специальную комиссию &minus;5&nbsp;% от&nbsp;стандартной. Подробнее в&nbsp;разделе
                                &laquo;Вопросы и&nbsp;ответы&raquo;.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellInfoCommission;
