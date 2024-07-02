'use client';

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';

import Logo from '@/assets/images/logo.svg';

import { FooterMenuBlock, FooterEmailSubscribe } from '@/components';
import { MEDIA_SIZES } from '@/constants/styles';
import { getClassNames } from '@/functions/getClassNames';
import { WaitingPopupType } from '@/types/waiting';
import { APP_ROUTE } from '@/constants/routes';

interface FooterProps {
    transparent?: boolean;
}

const Footer: React.FC<FooterProps> = ({ transparent }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const blocks: {
        title: string;
        children: React.ReactNode;
    }[] = [
        {
            title: 'Покупателям',
            children: (
                <>
                    <Link href={APP_ROUTE.auth} className="footer-block-menu-block__link">
                        Гарантия подлинности
                    </Link>
                    <Link href={APP_ROUTE.help.return} className="footer-block-menu-block__link">
                        Возврат
                    </Link>
                    <Link href={APP_ROUTE.help.delivery} className="footer-block-menu-block__link">
                        Доставка и оплата
                    </Link>
                    <Link
                        href={`#${WaitingPopupType.Form}`}
                        className="footer-block-menu-block__link"
                        scroll={false}
                        prefetch={false}
                    >
                        Лист ожидания
                    </Link>
                    <Link href={APP_ROUTE.brands} className="footer-block-menu-block__link">
                        Бренды
                    </Link>
                </>
            ),
        },
        {
            title: 'Продавцам',
            children: (
                <>
                    <Link href={APP_ROUTE.sell.info} className="footer-block-menu-block__link">
                        Продать товар
                    </Link>
                    <Link href={APP_ROUTE.exchange} className="footer-block-menu-block__link">
                        Обменять товар
                    </Link>
                    <Link href={APP_ROUTE.vipService} className="footer-block-menu-block__link">
                        VIP-сервис
                    </Link>
                    <Link href={APP_ROUTE.sell.infoBrands} className="footer-block-menu-block__link">
                        Бренд-лист
                    </Link>
                </>
            ),
        },
        {
            title: 'О компании',
            children: (
                <>
                    <Link href={APP_ROUTE.about} className="footer-block-menu-block__link">
                        О компании
                    </Link>
                    <a
                        href="https://www.notion.so/9a26fcf2ac2049feb782bcd967eed574"
                        className="footer-block-menu-block__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Карьера
                    </a>
                    {/* <a
                        href={""}
                        className="footer-block-menu-block__link"
                    >
                        Устойчивое развитие
                    </a> */}
                    <a
                        href="https://resalereport2023.ru"
                        className="footer-block-menu-block__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resale report 2023
                    </a>
                </>
            ),
        },
        {
            title: 'Связь с нами',
            children: (
                <>
                    <Link href={APP_ROUTE.help.all} className="footer-block-menu-block__link">
                        Вопросы и ответы
                    </Link>
                    <Link href={APP_ROUTE.contact} className="footer-block-menu-block__link">
                        Контакты
                    </Link>
                    <Link href={APP_ROUTE.visit} className="footer-block-menu-block__link">
                        Попасть в офис
                    </Link>
                </>
            ),
        },
    ];

    return (
        <>
            <FooterEmailSubscribe />

            <footer
                className={getClassNames('footer', {
                    transparent: !!transparent,
                })}
            >
                <div className="container">
                    <div className="footer-wrapper">
                        <Link href={APP_ROUTE.home} className="footer-logo">
                            <img src={Logo.src} alt="TheCultt" className="footer-logo__image" />
                        </Link>

                        <div className="footer-block">
                            <nav className="footer-block-menu">
                                {blocks.map((block, index) => (
                                    <FooterMenuBlock {...block} key={`footer-block-menu-${index}`} />
                                ))}
                            </nav>

                            {!isMobile ? (
                                <div className="footer-block-telegram">
                                    <h5 className="footer-block-telegram__title">
                                        Подписывайтесь на THE CULTT <br /> в Telegram
                                    </h5>
                                    <p className="footer-block-telegram__subtitle">
                                        Ничего лишнего, только лоты мечты, которые вы увидите первыми
                                    </p>

                                    <a href="https://t.me/thecultt" className="btn-regular footer-block-telegram__btn">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10 0C15.523 0 20 4.47696 20 10C20 15.523 15.523 20 10 20C4.47696 20 0 15.523 0 10C0 4.47696 4.47696 0 10 0ZM13.4496 14.0761C13.6335 13.5117 14.4952 7.88739 14.6017 6.77913C14.6339 6.44348 14.5278 6.22043 14.32 6.12087C14.0687 6 13.6965 6.06043 13.2648 6.21609C12.6726 6.42957 5.10217 9.64391 4.66478 9.83C4.25 10.0061 3.85783 10.1983 3.85783 10.4765C3.85783 10.6722 3.97391 10.7822 4.29391 10.8965C4.62696 11.0152 5.46565 11.2696 5.96087 11.4061C6.43783 11.5378 6.98087 11.4235 7.28522 11.2343C7.60783 11.0339 11.3309 8.54261 11.5983 8.32435C11.8652 8.10609 12.0783 8.38565 11.86 8.60435C11.6417 8.82261 9.08609 11.303 8.74913 11.6465C8.34 12.0635 8.63043 12.4957 8.90478 12.6687C9.21826 12.8661 11.4726 14.3783 11.8122 14.6209C12.1517 14.8635 12.4961 14.9735 12.8113 14.9735C13.1265 14.9735 13.2926 14.5583 13.4496 14.0761Z" />
                                        </svg>
                                        Перейти
                                    </a>
                                </div>
                            ) : (
                                <div className="footer-block-telegram-media">
                                    <a href="https://t.me/thecultt" className="footer-block-telegram__btn">
                                        <svg
                                            width="37"
                                            height="36"
                                            viewBox="0 0 37 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.5 0C8.564 0 0.5 8.064 0.5 18C0.5 27.936 8.564 36 18.5 36C28.436 36 36.5 27.936 36.5 18C36.5 8.064 28.436 0 18.5 0ZM26.852 12.24C26.582 15.084 25.412 21.996 24.818 25.182C24.566 26.532 24.062 26.982 23.594 27.036C22.55 27.126 21.758 26.352 20.75 25.686C19.166 24.642 18.266 23.994 16.736 22.986C14.954 21.816 16.106 21.168 17.132 20.124C17.402 19.854 22.01 15.66 22.1 15.282C22.1125 15.2247 22.1108 15.1653 22.0952 15.1088C22.0795 15.0524 22.0502 15.0006 22.01 14.958C21.902 14.868 21.758 14.904 21.632 14.922C21.47 14.958 18.95 16.632 14.036 19.944C13.316 20.43 12.668 20.682 12.092 20.664C11.444 20.646 10.22 20.304 9.302 19.998C8.168 19.638 7.286 19.44 7.358 18.81C7.394 18.486 7.844 18.162 8.69 17.82C13.946 15.534 17.438 14.022 19.184 13.302C24.188 11.214 25.214 10.854 25.898 10.854C26.042 10.854 26.384 10.89 26.6 11.07C26.78 11.214 26.834 11.412 26.852 11.556C26.834 11.664 26.87 11.988 26.852 12.24Z"
                                                fill="#202020"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="footer-block footer-block-bottom">
                            <p className="footer-block-bottom__copyright">
                                © Все права защищены {new Date().getFullYear()}, THE CULTT
                            </p>
                            <div className="footer-block-bottom-link">
                                <a
                                    href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Пользовательское_соглашение_для_интернет_магазина_с_Ботом 23.04.24.docx.pdf"
                                    className="footer-block-bottom-link__link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Пользовательское соглашение
                                </a>
                                <a
                                    href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Оферта для продавца 240424.pdf"
                                    className="footer-block-bottom-link__link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Публичная оферта продавца
                                </a>
                                <a
                                    href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%20180424.pdf "
                                    className="footer-block-bottom-link__link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Публичная оферта покупателя
                                </a>
                                {/* <a
								href="/help/public-offerte"
								className="footer-block-bottom-link__link"
							>
								Публичная оферта
							</a>
							<a
								href="/help/user-agreement"
								className="footer-block-bottom-link__link"
							>
								Пользовательсткое соглашение
							</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
