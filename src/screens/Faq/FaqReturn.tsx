'use client';

import React from 'react';

import { FaqBreadCrumbs } from '@/components';
import { CONTACTS } from '@/constants/contacts';

const Faq: React.FC = () => {
    return (
        <section className="faq">
            <div className="faq-bread-crumbs-wrapper">
                <div className="container">
                    <FaqBreadCrumbs title="Возврат" />
                </div>
            </div>

            {/* <div className="faq-title-white-wrapper">
				<div className="container">
					<h3 className="faq-title-white__title">Возврат</h3>

					<p className="faq-title-white__description">
						Подробные условия обмена, возврата, проведения
						экспертизы качества товаров, предъявления иных
						требований указаны в Публичной оферте.
					</p>
				</div>
			</div> */}

            <div className="container">
                <div className="faq-wrapper">
                    <div className="faq-text">
                        <div className="faq-text-block">
                            <h4 className="faq-text-block__title">Как оформить возврат товара надлежащего качества?</h4>
                            <div className="faq-text-block-description">
                                <p>
                                    Товар надлежащего качества можно вернуть в течение 3-х календарных дней (после его
                                    получения, включая день получения товара), если соблюдены следующие требования:
                                </p>
                                <ul>
                                    <li>товар был оплачен на сайте;</li>
                                    <li>товар не был в употреблении/использовании после покупки;</li>
                                    <li>товар не был использован после покупки;</li>
                                    <li>сохранены оригинальные пломбы/бирки/ярлыки товара и сервиса THE CULTT.</li>
                                </ul>
                            </div>

                            <div className="faq-text-block-description">
                                <br />
                                <h3>Когда возврат товара невозможен:</h3>
                                <ul>
                                    <li>Возврат после примерки лота при курьере или в клиентской зоне невозможен.</li>
                                    <li>
                                        Товары из подборки "Архив Алены Долецкой" и оплаченные международными картами,
                                        не подлежат возврату.
                                    </li>
                                    <li>
                                        Если доставка предоплаченного товара задерживается по инициативе Покупателя
                                        (перенос доставки) более, чем на 7 (семь) календарных дней с даты оформления
                                        заказа, то в таком случае возврат товара невозможен.
                                    </li>
                                </ul>
                            </div>

                            <div className="faq-text-block-description">
                                <h3>
                                    <br />
                                    1. Сообщите THE CULTT о желании вернуть товар по электронной почте{' '}
                                    <a href="mailto:hey@thecultt.com">hey@thecultt.com</a>
                                </h3>

                                <br />

                                <p>В письме укажите:</p>
                                <ul>
                                    <li>тема письма «Возврат»;</li>
                                    <li>номер заказа;</li>
                                    <li>причину возврата;</li>
                                    <li>
                                        приложите{' '}
                                        <a
                                            href="https://storage.yandexcloud.net/prod-thecultt/znvti.docx"
                                            download={true}
                                        >
                                            Заявление на возврат
                                        </a>
                                        .
                                    </li>
                                </ul>

                                <p>
                                    <b>Важно!</b> Для товаров надлежащего качества, оплаченных онлайн, срок извещения о
                                    возврате – 3 дня, включая день получения товара.
                                </p>
                            </div>

                            <div className="faq-text-block-description">
                                <h3>
                                    <br />
                                    2. Дождитесь проверки вашего заявления
                                </h3>

                                <br />

                                <p>
                                    В течение 1 дня THE CULTT проводит проверку соблюдения формальностей (сроков,
                                    оснований для возврата товара). Если выявлены нарушения, THE CULTT проинформирует
                                    Вас об отказе в принятии заявления.
                                </p>
                            </div>

                            <div className="faq-text-block-description">
                                <h3>
                                    <br />
                                    3. Направьте возвращаемый товар в THE CULTT
                                </h3>

                                <br />

                                <p>
                                    После получения со стороны THE CULTT подтверждения о возможности возврата вам
                                    необходимо в течение 2-х дней направить возвращаемый товар по адресу THE CULTT
                                    курьером или транспортной компанией.
                                </p>

                                <p>К возвращаемому товару необходимо приложить:</p>

                                <ul>
                                    <li>
                                        оригинал{' '}
                                        <a
                                            href="https://storage.yandexcloud.net/prod-thecultt/znvti.docx"
                                            download={true}
                                        >
                                            Заявление на возврат
                                        </a>{' '}
                                        товара;
                                    </li>
                                    <li>
                                        копию главной страницы паспорта и страницы с адресом регистрации покупателя;
                                    </li>
                                    <li>
                                        оригинал упаковки товара, если товар передавался в оригинальной фирменной
                                        упаковке.
                                    </li>
                                </ul>

                                <p>Посылку с товаром необходимо отправить:</p>

                                <ul>
                                    <li>без наложенного платежа;</li>
                                    <li>с описью вложения;</li>
                                    <li>
                                        не использовать в качестве упаковки картонный пакет/бумажный конверт и другую
                                        ненадежную упаковку.
                                    </li>
                                </ul>

                                <p>
                                    Адрес для возврата: Россия, город Москва, улица {CONTACTS.address}.
                                    <br />
                                    Контактный номер: +7 499 992 80 47
                                </p>
                            </div>

                            <div className="faq-text-block-description">
                                <h3>
                                    <br />
                                    4. Сообщите THE CULTT номер отслеживания/квитанцию/иной документ об отправке
                                </h3>

                                <br />

                                <p>
                                    Вы можете сделать это по телефону, в мессенджере или по электронной почте.
                                    <br />
                                    <b>Важно!</b> Ответственность за доставку возвращаемого товара лежит на покупателе.
                                </p>
                            </div>

                            <div className="faq-text-block-description">
                                <h3>
                                    <br />
                                    5. Ожидайте возврата денежных средств
                                </h3>

                                <br />

                                <p>
                                    Денежные средства за товар возвращаются покупателю в течение 10 дней после того, как
                                    товар и оригинал заявления поступят в THE CULTT и будет подтверждено, что с товаром
                                    все в порядке.
                                </p>
                            </div>
                        </div>

                        {/* <div className="faq-text-block">
							<h4 className="faq-text-block__title">
								Обмен/возврат товара ненадлежащего качества
							</h4>
							<div className="faq-text-block-description">
								<p>
									Если вы обнаружили в товаре недостаток, не
									указанный в описании.
								</p>
								<p>
									Товаром ненадлежащего качества является
									товар с недостатками, не оговоренными при
									продаже (недостатки не были заявлены на фото
									и в описании товара).
								</p>
								<p>
									Можно запросить, если вы обнаружили в товаре
									недостаток, не оговоренный при продаже:
								</p>
								<ul>
									<li>
										замены товара на товар этой же марки или
										на такой же товар другой марки (модели,
										артикула) с соответствующим перерасчетом
										покупной цены; (только при фактическом
										наличии у THE CULTT соответствующей
										модели)
									</li>
									<li>
										соразмерного уменьшения покупной цены;
									</li>
									<li>
										незамедлительного безвозмездного
										устранения не оговоренных недостатков
										товара;
									</li>
									<li>совершить возврат.</li>
								</ul>
								<p>
									Нельзя запросить всего вышеперечисленного,
									если в товаре нет нюансов, не оговоренных
									при продаже. Не являются недостатком товара:
								</p>
								<ul>
									<li>
										1. недостатки товара, которые были
										указаны при продаже;
									</li>
									<li>
										2. недостатки товара, которые появились
										из-за нарушений условий его нормальной
										эксплуатации;
									</li>
									<li>
										например: контакт кожаных изделий с
										маслом/водой, металлических – с острыми
										поверхностями, ювелирных – с
										агрессивными веществами и т.д.
									</li>
									<li>
										3. недостатки товара, которые появляются
										в условиях его нормальной эксплуатации
										(естественный износ).
									</li>
									<li>
										Например: выгорание, выцветание, заломы,
										царапины, потертости и т.д.
									</li>
									<li>
										4. несоответствие товара представлению
										покупателя.
									</li>
								</ul>
							</div>
						</div> */}

                        {/* <div className="faq-text-block-white-wrapper">
							<div className="faq-text-block">
								<h4 className="faq-text-block__title">
									Общий порядок возврата товара
								</h4>
								<div className="faq-text-block-description">
									<p>
										1. Покупатель извещает THE CULTT о
										желании вернуть товар письмом по
										электронной почте hey@thecultt.com. В
										письме покупатель указывает:
									</p>
									<ul>
										<li>тему письма «Возврат»;</li>
										<li>номер заказа;</li>
										<li>основания для возврата</li>
									</ul>
									<p>
										(Важно! для возврата товаров качества,
										оплаченных онлайн, срок извещения о
										возврате – 3 дня с момента получения
										товара.)
									</p>
									<p>
										2. Если покупатель запросил форму
										заявления на возврат, то THE CULTT
										высылает покупателю бланк заявления для
										заполнения.
									</p>
									<p>
										3. В течение 1 дня THE CULTT проводит
										проверку нарушения формальных сроков и
										оснований для возврата. Если нарушения
										есть, то THE CULTT проинформирует
										покупателя об отказе в принятии
										заявления.
									</p>
									<p>
										4. В течение 2-х дней с момента
										получения со стороны THE CULTT
										подтверждения о возможности возврата (в
										случае, если платформа не выявила
										нарушений), покупатель должен направить
										возвращаемый товар по адресу THE CULTT
										курьером или транспортной компанией.
									</p>
									<p>
										5. К возвращаемому товару необходимо
										приложить:
									</p>
									<ul>
										<li>
											оригинал заявления о возврате
											товара;
										</li>
										<li>
											копию главной страницы паспорта и
											страницы с адресом регистрации
											покупателя;
										</li>
										<li>
											оригинал упаковки товара, если товар
											передавался в оригинальной фирменной
											упаковке.
										</li>
									</ul>
									<p>
										6. Посылку с товаром необходимо
										отправить:
									</p>
									<ul>
										<li>без наложенного платежа;</li>
										<li>с описью вложения;</li>
										<li>
											не использовать в качестве упаковки
											картонный пакет/бумажный конверт и
											другую ненадежную упаковку.
										</li>
									</ul>
									<p>
										7. После отправки посылки номер
										отслеживания/квитанцию/иной документ об
										отправке необходимо сообщить THE CULTT
										по телефону или электронной почте.
										Ответственность за доставку
										возвращаемого товара лежит на
										покупателе.
									</p>
									<p>
										8. Денежные средства за товар
										возвращаются покупателю в течение 10
										дней после того, как THE CULTT получит и
										проверит возвращаемый товар и оригинал
										заявления о его возврате.
									</p>
									<p>
										<b>
											Адрес для возврата: Россия, город
											Москва, улица {CONTACTS.address}.
										</b>
									</p>
									<p>
										<b>
											Контактный номер:{" "}
											<a href="tel:+7 499 992 80 47">
												+7 499 992 80 47
											</a>
										</b>
									</p>

									<a href="https://storage.yandexcloud.net/prod-thecultt/znvti.docx" download={true} style={{ display: "block", marginTop: "15px", textDecoration: "none", fontSize: "15px" }}>
										Заявление на возврат
									</a>
								</div>
							</div>
						</div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
