'use client';

import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { VISIT_AVAILABLE } from '@/constants/app';
import { APP_ROUTE, EXTERNAL_LINKS } from '@/constants/routes';
import { CONTACTS } from '@/constants/contacts';
import { MEDIA_SIZES } from '@/constants/styles';
import { Button } from '@/shared/ui';
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

const Visit: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`, { initializeWithValue: false });

    return (
        <section className="visit">
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="visit-wrapper">
                    <div className="visit-office">
                        <div className="visit-office-block">
                            <h2 className="visit-office-block__title">Адрес офиса</h2>
                            <p className="visit-office-block__subtitle">
                                Мы находимся по адресу <span>{CONTACTS.address},</span> {CONTACTS.addressTime}
                                <br />
                                Для посещения необходимо забронировать время!
                            </p>
                        </div>
                    </div>

                    <div className="visit-service">
                        <div className="visit-service-block">
                            <div>
                                <h2 className="visit-service-block__title">Для покупателя</h2>
                                <p className="visit-service-block__subtitle">
                                    Если вы покупатель - примерьте сумки и аксессуары лучших дизайнеров из коллекции THE
                                    CULTT.
                                </p>
                                <p className="visit-service-block__description">
                                    *Для примерки доступно до 5 аксессуаров из актуального на момент визита наличия
                                </p>
                            </div>

                            <Button
                                label="Выбрать время"
                                href={EXTERNAL_LINKS.clientVisit}
                                className="visit-service-block__btn"
                                wide={isMobile}
                            />
                        </div>

                        <div className="visit-service-block">
                            <div>
                                <h2 className="visit-service-block__title">Для продавца</h2>

                                <p className="visit-service-block__subtitle">
                                    <ul>
                                        <li>
                                            Обратите внимание на критерии отбора и{' '}
                                            <Link href={APP_ROUTE.sell.infoBrands}>бренд-лист</Link> — какие аксессуары
                                            мы принимаем.
                                        </li>

                                        <li>Выберите время для визита к нам в офис.</li>

                                        <li>Возьмите с собой паспорт для оформления сделки.</li>

                                        <li>
                                            Наши эксперты оценят лоты, проведут аутентификацию и согласуют с вами
                                            условия.
                                        </li>

                                        <li>
                                            Весь остальной процесс продажи мы возьмем на себя — вам останется только
                                            получить деньги на карту.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <Button
                                label="Выбрать время"
                                href={EXTERNAL_LINKS.sellerVisit}
                                className="visit-service-block__btn"
                                wide={isMobile}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visit;
