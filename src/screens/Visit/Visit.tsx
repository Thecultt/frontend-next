'use client';

import React from 'react';
import Link from 'next/link';

import { VISIT_AVAILABLE } from '@/constants/app';
import { APP_ROUTE, EXTERNAL_LINKS } from '@/constants/routes';
import { CONTACTS } from '@/constants/contacts';

import VisitImage from '@/assets/images/visit.jpg';

const title = VISIT_AVAILABLE ? (
    <>
        Забронируйте свой визит <br /> в THE CULTT!
    </>
) : (
    'Визит в THE CULTT'
);
const description = VISIT_AVAILABLE ? (
    'Благодаря услуге бронирования визита вы сможете примерить заинтересовавшие вас аксессуары или обсудить варианты продажи своих лотов через наш сервис в спокойной обстановке. Наш менеджер проконсультирует вас и ответит на любые вопросы.'
) : (
    <>
        Внимание! Клиентская зона закрыта с 10.07. Это временно — мы обновляем пространство. Как только запись в
        клиентскую зону откроется снова, мы пришлем зарегистрированным пользователям уведомление.
        <br />
        <br />
        Пока мы обновляемся, остальные опции работают как обычно. Закажите доставку и примерку понравившихся лотов на
        дом или оформите заявку на продажу своих аксессуаров.
    </>
);

const Visit: React.FC = () => (
    <section className="visit">
        <Link href={APP_ROUTE.home} className="visit-back__btn">
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7 1.5L1 7.5L7 13.5"
                    stroke="#202020"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            Вернуться
        </Link>

        <div className="visit-main-wrapper">
            <div className="container">
                <div className="visit-main">
                    <div
                        className="visit-main-image"
                        style={{
                            backgroundImage: `url('${VisitImage.src}')`,
                        }}
                    />

                    <div className="visit-main-text">
                        <h2 className="visit-main-text__title">{title}</h2>

                        {VISIT_AVAILABLE && (
                            <p className="visit-main-text__subtitle">Ждем вас в нашем офисе в Москве!</p>
                        )}

                        <p className="visit-main-text__description">{description}</p>

                        {VISIT_AVAILABLE && (
                            <div className="visit-main-text-btn">
                                <a
                                    href={EXTERNAL_LINKS.clientVisit}
                                    className="btn visit-main-text-btn__btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Хочу купить
                                </a>

                                <a
                                    href={EXTERNAL_LINKS.sellerVisit}
                                    className="btn-regular visit-main-text-btn__btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Хочу продать
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {VISIT_AVAILABLE && (
            <div className="container">
                <div className="visit-wrapper">
                    <div className="visit-service">
                        <div className="visit-service-block">
                            <h2 className="visit-service-block__title">Для покупателя</h2>
                            <p className="visit-service-block__subtitle">
                                Если вы покупатель - примерьте сумки и аксессуары лучших дизайнеров из коллекции THE
                                CULTT.
                            </p>
                            <p className="visit-service-block__description">
                                *Для примерки доступно до 5 аксессуаров из актуального на момент визита наличия
                            </p>
                        </div>

                        <div className="visit-service-block">
                            <h2 className="visit-service-block__title">Для продавца</h2>

                            <p className="visit-service-block__subtitle">
                                <ul>
                                    <li>
                                        Обратите внимание на критерии отбора и{' '}
                                        <Link href={APP_ROUTE.sell.infoBrands}>бренд-лист</Link> — какие аксессуары мы
                                        принимаем.
                                    </li>

                                    <li>
                                        <a href={EXTERNAL_LINKS.clientVisit} target="_blank" rel="noreferrer">
                                            Выберите время
                                        </a>{' '}
                                        для визита к нам в офис.
                                    </li>

                                    <li>Возьмите с собой паспорт для оформления сделки.</li>

                                    <li>
                                        Наши эксперты оценят лоты, проведут аутентификацию и согласуют с вами условия.
                                    </li>

                                    <li>
                                        Весь остальной процесс продажи мы возьмем на себя — вам останется только
                                        получить деньги на карту.
                                    </li>
                                </ul>
                            </p>
                            {/* <p className="visit-service-block__subtitle">
                                Если вы продавец - встретьтесь с нашим
                                экспертом, чтобы узнать, сколько вы сможете
                                заработать на своих аксессуарах, и оставьте их
                                для продажи через наш сервис.
                            </p> */}
                            {/* <p className="visit-service-block__description">
                                Услуга доступна для передачи на продажу
                                аксессуаров, соответсвующих нашему бренд-листу{" "}
                                <a href="https://thecultt.com/prodat">
                                    https://thecultt.com/prodat
                                </a>
                            </p>
                            <p className="visit-service-block__description">
                                **Для оформления сделки понадобятся паспортные
                                данные
                            </p> */}
                        </div>
                    </div>

                    <div className="visit-office">
                        <div className="visit-office-block">
                            <h2 className="visit-office-block__title">Адрес офиса</h2>
                            <p className="visit-office-block__subtitle">
                                Мы находимся по адресу {CONTACTS.address} (3 этаж, офис THE CULTT) ежедневно с 10:00 до
                                21:00. Для посещения необходима регистрация!
                            </p>

                            <div className="visit-office-block-btn">
                                <a
                                    href="https://calendly.com/thecultt/visit?month=2024-06"
                                    className="btn visit-office-block-btn__btn"
                                >
                                    Хочу купить
                                </a>

                                <a
                                    href="https://calendly.com/thecultt_2023/visitsellers"
                                    className="btn-regular visit-office-block-btn__btn"
                                >
                                    Хочу продать
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
);

export default Visit;
