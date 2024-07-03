import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import SellInfoServiceIphone from '@/assets/images/sell-info/sell-info-service-iphone.jpg';

const SellInfoService: React.FC = () => {
    return (
        <div className="sell-info-service">
            <h2 className="sell-info__title">Преимущества продажи на&nbsp;THE CULTT</h2>

            <div className="sell-info-service-wrapper">
                <div className="sell-info-service-blocks">
                    <div className="sell-info-service-blocks-block">
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.255078 4.69883C0.272135 4.57375 0.317937 4.45066 0.394332 4.33954C0.999422 3.45941 2.06359 2.56 3.37381 1.81804C4.69687 1.06881 6.32675 0.447951 8.11306 0.164759C11.7101 -0.405493 15.943 0.399317 19.4951 4.2462C19.6252 4.38701 19.6975 4.56056 19.7132 4.73776C21.3229 13.3972 15.8079 18.7851 11.8552 21.0094C10.6985 21.6604 9.27509 21.7176 8.07819 21.0563C4.30468 18.9714 -1.25916 13.3698 0.255078 4.69883ZM1.8722 5.14386C2.31436 4.56788 3.11065 3.88483 4.19612 3.27014C5.35883 2.61171 6.79995 2.06254 8.37436 1.81295C11.4428 1.32649 15.0157 1.97224 18.1008 5.19918C19.4328 12.783 14.6376 17.5288 11.0368 19.5551C10.3487 19.9424 9.54119 19.9581 8.88522 19.5957C5.5025 17.7267 0.618364 12.774 1.8722 5.14386Z"
                                fill="#202020"
                            />
                        </svg>

                        <h3 className="sell-info-service-blocks-block__title">Безопасность</h3>

                        <p className="sell-info-service-blocks-block__description">
                            Мы&nbsp;заключаем с&nbsp;вами договор и&nbsp;гарантируем безопасность банковских операций,
                            хранения и&nbsp;доставки ваших аксессуаров.
                        </p>
                    </div>

                    <div className="sell-info-service-blocks-block margin-right">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.2138 6.33038C17.0956 5.88211 18.0149 6.86622 17.5076 7.7155L13.4975 14.4293C12.8243 15.5565 11.2584 15.7238 10.3622 14.7643L8.69487 12.9794C7.79865 12.02 8.07218 10.4691 9.24257 9.87415L16.2138 6.33038ZM9.91305 11.1931L15.3613 8.42354L12.2272 13.6706C12.0589 13.9524 11.6675 13.9942 11.4434 13.7544L9.77612 11.9694C9.55207 11.7296 9.62045 11.3419 9.91305 11.1931Z"
                                fill="black"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.6735 11.8367C23.6735 18.374 20.6803 20 11.8367 20C2.9932 20 0 18.374 0 11.8367C0 5.29949 5.29949 0 11.8367 0C18.374 0 23.6735 5.29949 23.6735 11.8367ZM22.1939 11.8367C22.1939 14.9096 21.4947 16.3176 20.2563 17.135C18.8153 18.0862 16.2826 18.5204 11.8367 18.5204C7.39089 18.5204 4.85816 18.0862 3.41715 17.135C2.17878 16.3176 1.47959 14.9096 1.47959 11.8367C1.47959 6.11664 6.11664 1.47959 11.8367 1.47959C17.5568 1.47959 22.1939 6.11664 22.1939 11.8367Z"
                                fill="black"
                            />
                        </svg>

                        <h3 className="sell-info-service-blocks-block__title">Скорость продажи</h3>

                        <p className="sell-info-service-blocks-block__description">
                            Мы&nbsp;установим конкурентную цену для быстрой продажи. Предлагаем покупателям примерку
                            и&nbsp;рассрочку, чтобы ускорить сделку.
                        </p>
                    </div>

                    <div className="sell-info-service-blocks-block">
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.3536 6.18356C19.8497 5.67966 19.0327 5.67966 18.5288 6.18356C18.0249 6.68747 18.0249 7.50445 18.5288 8.00836L18.5379 8.01748C19.0418 8.52138 19.8588 8.52138 20.3627 8.01748C20.8666 7.51358 20.8666 6.69659 20.3627 6.19269L20.3536 6.18356Z"
                                fill="#202020"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.8833 5.49255C25.8833 2.8202 23.7169 0.653843 21.0446 0.653843L13.7454 0.653843C12.4621 0.653843 11.2314 1.16363 10.324 2.07107L1.42138 10.9736C-0.468256 12.8633 -0.468257 15.927 1.42138 17.8166L8.72054 25.1158C10.6102 27.0054 13.6739 27.0054 15.5635 25.1158L24.4661 16.2132C25.3735 15.3058 25.8833 14.075 25.8833 12.7917L25.8833 5.49255ZM21.0446 2.58933C22.648 2.58933 23.9478 3.88914 23.9478 5.49255L23.9478 12.7917C23.9478 13.5617 23.642 14.3001 23.0975 14.8446L14.1949 23.7472C13.0611 24.881 11.2229 24.881 10.0891 23.7472L2.78997 16.448C1.65619 15.3142 1.65619 13.476 2.78997 12.3422L11.6925 3.43966C12.237 2.8952 12.9755 2.58933 13.7454 2.58933H21.0446Z"
                                fill="#202020"
                            />
                        </svg>

                        <h3 className="sell-info-service-blocks-block__title">Оптимальная цена</h3>

                        <p className="sell-info-service-blocks-block__description">
                            Мы&nbsp;ориентируемся на&nbsp;международный индекс оценки предметов роскоши
                            и&nbsp;согласовываем финальную стоимость с&nbsp;продавцом.
                        </p>
                    </div>
                </div>

                <img src={SellInfoServiceIphone.src} alt="" className="sell-info-service__iphone" />

                <div className="sell-info-service-blocks">
                    <div className="sell-info-service-blocks-block">
                        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.1124 3.33562C13.0286 3.43301 12.8761 3.43301 12.7924 3.33562C11.5625 1.90561 9.74 1 7.70595 1C4.00236 1 1 4.00235 1 7.70595C1 10.9324 2.48507 13.5021 3.58681 15.0297C4.76721 16.6664 6.14338 17.9762 7.12531 18.8249C10.4807 21.725 15.424 21.725 18.7794 18.8249C19.7613 17.9762 21.1375 16.6664 22.3179 15.0297C23.4197 13.5021 24.9047 10.9324 24.9047 7.70595C24.9047 4.00235 21.9024 1 18.1988 1C16.1647 1 14.3422 1.90561 13.1124 3.33562Z"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>

                        <h3 className="sell-info-service-blocks-block__title">Берем все на&nbsp;себя</h3>

                        <p className="sell-info-service-blocks-block__description">
                            Курьер заберет товары в&nbsp;удобном для вас времени и&nbsp;месте. В&nbsp;личном кабинете
                            вы&nbsp;сможете отслеживать статус продаж и&nbsp;консультироваться с&nbsp;нами
                            в&nbsp;реальном времени.
                        </p>
                    </div>

                    <div className="sell-info-service-blocks-block margin-left">
                        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 12.4286V16.7143L13.1429 18.8572M17.4429 24.3572L16.9429 29.8286C16.8785 30.5409 16.5493 31.2032 16.0203 31.6846C15.4913 32.166 14.801 32.4315 14.0857 32.4286H7.9C7.18476 32.4315 6.49444 32.166 5.96543 31.6846C5.43643 31.2032 5.10722 30.5409 5.04286 29.8286L4.54286 24.3572M4.55714 9.07145L5.05714 3.60002C5.12129 2.89013 5.44847 2.22986 5.97445 1.74881C6.50043 1.26777 7.18722 1.00069 7.9 1.00002H14.1143C14.8295 0.997121 15.5199 1.26259 16.0489 1.74398C16.5779 2.22538 16.9071 2.88768 16.9714 3.60002L17.4714 9.07145M21 16.7143C21 22.2372 16.5228 26.7143 11 26.7143C5.47715 26.7143 1 22.2372 1 16.7143C1 11.1915 5.47715 6.71431 11 6.71431C16.5228 6.71431 21 11.1915 21 16.7143Z"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <h3 className="sell-info-service-blocks-block__title">Экономия времени</h3>

                        <p className="sell-info-service-blocks-block__description">
                            Мы&nbsp;оценим, согласуем цену и&nbsp;заберем ваш товар для продажи. Съемка, замеры,
                            размещение и&nbsp;общение с&nbsp;покупателями&nbsp;&mdash; все на&nbsp;нас.
                        </p>
                    </div>

                    <Link href={APP_ROUTE.sell.create} className="btn sell-info-service-blocks__btn">
                        Подать заявку сейчас
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellInfoService;
