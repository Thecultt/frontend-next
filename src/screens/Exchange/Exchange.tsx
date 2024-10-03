'use client';

import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import { CabinetSellTypes } from '@/redux/types/ICabinetSell';
import { BaseImage } from '@/shared/ui';

import ExchangeMainImage from '@/assets/images/exchange/exchange-main-image.png';
import ExchangeStepsImage1 from '@/assets/images/exchange/exchange-steps-image-1.png';
import ExchangeStepsImage2 from '@/assets/images/exchange/exchange-steps-image-2.png';
import ExchangeStepsImage3 from '@/assets/images/exchange/exchange-steps-image-3.png';
import ExchangeExampleImage from '@/assets/images/exchange/exchange-example-image.jpg';

const EXCHANGE_LINK = `${APP_ROUTE.sell.create}?type=${CabinetSellTypes.EXCHANGE}`;

const Exchange: React.FC = () => (
    <section className="exchange">
        <div className="container">
            <div className="exchange-wrapper">
                <div className="exchange-main hover-scale">
                    <div className="exchange-main-text">
                        <h2 className="exchange-main-text__title">Меняем старую вещь на новую</h2>

                        <p className="exchange-main-text__description">
                            Хотите расстаться со своими вещами - просто обменяйте их на новые в THE CULTT. Передайте нам
                            старые сумки, обувь и аксессуары и получите депозит для покупки новых.
                        </p>

                        <Link href={EXCHANGE_LINK} className="btn exchange-main-text__btn">
                            Обменять
                        </Link>
                    </div>

                    <div
                        className="exchange-main-image"
                        style={{
                            backgroundImage: `url("${ExchangeMainImage.src}")`,
                        }}
                    ></div>
                </div>

                <div className="exchange-steps">
                    <h2 className="exchange__title exchange-steps__title">Как это работает?</h2>

                    <p className="exchange__description mb exchange-steps__description">
                        Всего три шага, и у вас новая вещь в гардеробе
                    </p>

                    <div className="exchange-steps-blocks-wrapper">
                        <div className="exchange-steps-block">
                            <BaseImage src={ExchangeStepsImage1.src} alt="" className="exchange-steps-block__image" />

                            <h3 className="exchange-steps-block__title">Шаг 1</h3>
                            <p className="exchange-steps-block__description">
                                Выберите сумку, обувь или аксессуар на нашем сайте
                            </p>
                        </div>

                        <div className="exchange-steps-block">
                            <BaseImage src={ExchangeStepsImage2.src} alt="" className="exchange-steps-block__image" />

                            <h3 className="exchange-steps-block__title">Шаг 2</h3>

                            <p className="exchange-steps-block__description">
                                Подайте заявку на обмен вашего старого лота, указав ссылку на новый
                            </p>
                        </div>

                        <div className="exchange-steps-block">
                            <BaseImage src={ExchangeStepsImage3.src} alt="" className="exchange-steps-block__image" />

                            <h3 className="exchange-steps-block__title">Шаг 3</h3>
                            <p className="exchange-steps-block__description">Готово! Вы осознанно обновили гардероб</p>
                        </div>
                    </div>
                </div>

                <div className="exchange-option">
                    <h2 className="exchange__title">Что еще мне нужно знать?</h2>
                    <p className="exchange__description exchange-option__description">У нас есть две программы*</p>

                    <div className="exchange-option-blocks-wrapper">
                        <div className="exchange-option-block hover-scale">
                            <h3 className="exchange-option-block__title">Обмен</h3>
                            <p className="exchange-option-block__description">
                                Мы принимаем к обмену <b>сумки, обувь, аксессуары</b> - необязательно купленные у нас.
                                Оцениваем ваш лот и предлагаем депозит, который вы можете использовать при покупке
                                нового на нашем сайте.
                                <br />
                                Разница будет компенсирована одной из сторон.
                            </p>

                            <Link href={EXCHANGE_LINK} className="btn-regular exchange-option-block__btn">
                                Обменять
                            </Link>
                        </div>

                        <div className="exchange-option-block hover-scale">
                            <h3 className="exchange-option-block__title">Круговорот</h3>

                            <p className="exchange-option-block__description">
                                По этой программе мы принимаем <b>только сумки</b>, купленные на нашей платформе, снова
                                в коллекцию. Вам предлагаем депозит на особых условиях для приобретения новой вещи любой
                                категории.
                            </p>

                            <div className="exchange-option-block-option">
                                <div className="exchange-option-block-option-block">
                                    <h4 className="exchange-option-block-option-block__title">{`<`}1 месяца</h4>

                                    <p className="exchange-option-block-option-block__description">
                                        90% от изначальной стоимости
                                    </p>
                                </div>

                                <div className="exchange-option-block-option-block">
                                    <h4 className="exchange-option-block-option-block__title">от 1 до 3 месяцев</h4>

                                    <p className="exchange-option-block-option-block__description">
                                        85% от изначальной стоимости
                                    </p>
                                </div>

                                <div className="exchange-option-block-option-block">
                                    <p className="exchange-option-block-option-block__description">
                                        На сумки Hermes (Birkin, Kelly, Constance) распространяется фиксированный размер
                                        депозита — 85%, если ее состояние не изменилось.
                                    </p>
                                </div>
                            </div>

                            <Link href="" className="btn-regular exchange-option-block__btn">
                                Подробнее
                            </Link>

                            <Link href={EXCHANGE_LINK} className="btn exchange-option-block__btn__media">
                                Отправить заявку
                            </Link>
                        </div>
                    </div>

                    <p className="exchange-option__subtitle">
                        *в программах Обмен и Круговорот не участвуют лоты с тегом «Из бутика» и с пометкой «Данный лот
                        не участвует в программе Круговорот»
                    </p>
                </div>

                <div className="exchange-thecycle">
                    <h2 className="exchange__title">О Круговороте</h2>
                    <p className="exchange__description exchange-thecycle__description">
                        Участвовать могут только лоты, купленные у нас не более, чем 3 месяца назад. <br />
                        Депозит на новую сумку зависит от того, сколько времени вы провели вместе со старой.
                    </p>

                    <div className="exchange-thecycle-blocks-wrapper">
                        <div className="exchange-thecycle-block">
                            <h3 className="exchange-thecycle-block__title">{`<`} 1 месяца</h3>
                            <p className="exchange-thecycle-block__description">90% от изначальной стоимости</p>
                        </div>

                        <div className="exchange-thecycle-block">
                            <h3 className="exchange-thecycle-block__title">от 1 до 3 месяцев</h3>
                            <p className="exchange-thecycle-block__description">85% от изначальной стоимости</p>
                        </div>

                        {/* <div className="exchange-thecycle-block">
								<h3 className="exchange-thecycle-block__title">
									от 4 до 6 месяцев
								</h3>
								<p className="exchange-thecycle-block__description">
									80% от изначальной стоимости
								</p>
							</div> */}
                    </div>

                    <p className="exchange-thecycle__subtitle">
                        На сумки Hermes (Birkin, Kelly, Constance) распространяется фиксированный размер депозита — 85%,
                        если ее состояние не изменилось.
                    </p>

                    <Link href={EXCHANGE_LINK} className="btn exchange-thecycle__btn">
                        Отправить заявку
                    </Link>
                </div>

                <div className="exchange-example">
                    <h2 className="exchange-example__title">Пример расчета депозита по программе Круговорот</h2>

                    <p className="exchange-example__description">
                        Например, вы купили сумку Bottega Venetta за 100.000р на нашем сайте и теперь хотите ее
                        обменять. Так будет рассчитан депозит на покупку новой сумки:
                    </p>

                    <div className="exchange-example-block-wrapper">
                        <div className="exchange-example-block-product">
                            <h3 className="exchange-example-block-product__title">Стоимость товара</h3>

                            <BaseImage
                                src={ExchangeExampleImage.src}
                                alt=""
                                className="exchange-example-block-product__image"
                            />
                        </div>

                        <div className="exchange-example-block-price">
                            <h3 className="exchange-example-block-price__title">Стоимость депозита</h3>

                            <p className="exchange-example-block-price__value">
                                Фиксированный процент 90/85 от стоимости лота
                            </p>

                            <p className="exchange-example-block-price__subvalue">
                                <span>90.000₽</span> - при обмене сумки менее чем через месяц после покупки
                            </p>
                            <p className="exchange-example-block-price__subvalue">
                                <span>85.000₽</span> - при обмене сумки в период от 1 до 3 месяцев
                            </p>

                            <p className="exchange-example-block-price__subtitle">
                                *в случае изменения состояния может быть произведена переоценка лота — этот вопрос
                                решается в индивидуальном порядке с менеджером
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Exchange;
