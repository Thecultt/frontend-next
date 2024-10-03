import React from 'react';

import { CONTACTS } from '@/constants/contacts';
import { EXTERNAL_LINKS } from '@/constants/routes';

const Contact: React.FC = () => (
    <section className="contact">
        <div className="container">
            <div className="contact-wrapper">
                <h2 className="contact__title">
                    У вас всегда есть возможность <br /> связаться с нами
                </h2>
                <div className="contact-block-wrapper">
                    <a href={`tel:${CONTACTS.phone}`} className="contact-block hover-scale">
                        <div className="contact-block-content">
                            <div className="contact-block-content-icon">
                                <svg
                                    width="31"
                                    height="31"
                                    viewBox="0 0 31 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M26.559 19.0693L21.0383 16.5955L21.0231 16.5884C20.7365 16.4659 20.4238 16.4167 20.1134 16.4453C19.803 16.474 19.5047 16.5795 19.2453 16.7525C19.2148 16.7727 19.1854 16.7946 19.1574 16.8181L16.3051 19.2498C14.4981 18.372 12.6324 16.5205 11.7547 14.7369L14.1899 11.8412C14.2133 11.8119 14.2356 11.7826 14.2567 11.7509C14.4259 11.4923 14.5286 11.1958 14.5556 10.8879C14.5826 10.58 14.533 10.2702 14.4113 9.98609V9.97203L11.9305 4.44195C11.7696 4.07078 11.493 3.76158 11.142 3.56051C10.791 3.35944 10.3844 3.2773 9.98282 3.32633C8.3949 3.53528 6.93733 4.31512 5.88235 5.52019C4.82738 6.72526 4.24714 8.27315 4.25001 9.87476C4.25001 19.1795 11.8203 26.7498 21.125 26.7498C22.7266 26.7526 24.2745 26.1724 25.4796 25.1174C26.6847 24.0624 27.4645 22.6049 27.6734 21.017C27.7226 20.6155 27.6406 20.209 27.4397 19.858C27.2389 19.507 26.93 19.2303 26.559 19.0693ZM21.125 24.8748C17.1481 24.8704 13.3353 23.2887 10.5232 20.4766C7.7111 17.6645 6.12935 13.8517 6.12501 9.87476C6.1206 8.73041 6.53288 7.62359 7.28486 6.76098C8.03683 5.89838 9.07708 5.33898 10.2113 5.18726C10.2109 5.19194 10.2109 5.19665 10.2113 5.20133L12.6723 10.7091L10.25 13.6084C10.2254 13.6366 10.2031 13.6668 10.1832 13.6986C10.0069 13.9692 9.90341 14.2808 9.88288 14.6031C9.86235 14.9255 9.92543 15.2476 10.066 15.5384C11.1277 17.7099 13.3156 19.8814 15.5106 20.9419C15.8035 21.0812 16.1275 21.1421 16.451 21.1187C16.7745 21.0953 17.0864 20.9884 17.3563 20.8084C17.3863 20.7881 17.4153 20.7662 17.443 20.7427L20.2918 18.3123L25.7996 20.7791H25.8125C25.6626 21.9149 25.1041 22.9573 24.2413 23.7111C23.3786 24.4649 22.2707 24.8786 21.125 24.8748Z"
                                        fill="#838383"
                                    />
                                </svg>
                            </div>

                            <div className="contact-block-content-text">
                                <h3 className="contact-block-content-text__title">Номер телефона</h3>
                                <span className="contact-block-content-text__subtitle">{CONTACTS.phone}</span>
                            </div>
                        </div>

                        <svg
                            className="contact-block-arrow"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.81641 12.1328H19.8164"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.8164 5.13281L19.8164 12.1328L12.8164 19.1328"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>

                    <a href={CONTACTS.tgHelp} className="contact-block hover-scale" target="_blank" rel="noreferrer">
                        <div className="contact-block-content">
                            <div className="contact-block-content-icon">
                                <svg
                                    width="30"
                                    height="31"
                                    viewBox="0 0 30 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 3C8.1 3 2.5 8.6 2.5 15.5C2.5 22.4 8.1 28 15 28C21.9 28 27.5 22.4 27.5 15.5C27.5 8.6 21.9 3 15 3ZM20.8 11.5C20.6125 13.475 19.8 18.275 19.3875 20.4875C19.2125 21.425 18.8625 21.7375 18.5375 21.775C17.8125 21.8375 17.2625 21.3 16.5625 20.8375C15.4625 20.1125 14.8375 19.6625 13.775 18.9625C12.5375 18.15 13.3375 17.7 14.05 16.975C14.2375 16.7875 17.4375 13.875 17.5 13.6125C17.5087 13.5727 17.5075 13.5315 17.4966 13.4923C17.4857 13.453 17.4654 13.4171 17.4375 13.3875C17.3625 13.325 17.2625 13.35 17.175 13.3625C17.0625 13.3875 15.3125 14.55 11.9 16.85C11.4 17.1875 10.95 17.3625 10.55 17.35C10.1 17.3375 9.25 17.1 8.6125 16.8875C7.825 16.6375 7.2125 16.5 7.2625 16.0625C7.2875 15.8375 7.6 15.6125 8.1875 15.375C11.8375 13.7875 14.2625 12.7375 15.475 12.2375C18.95 10.7875 19.6625 10.5375 20.1375 10.5375C20.2375 10.5375 20.475 10.5625 20.625 10.6875C20.75 10.7875 20.7875 10.925 20.8 11.025C20.7875 11.1 20.8125 11.325 20.8 11.5Z"
                                        fill="#838383"
                                    />
                                </svg>
                            </div>

                            <div className="contact-block-content-text">
                                <h3 className="contact-block-content-text__title">
                                    Telegram (Поддержка по общим вопросам)
                                </h3>
                                <span className="contact-block-content-text__subtitle">@thecultthelp</span>
                            </div>
                        </div>

                        <svg
                            className="contact-block-arrow"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.81641 12.1328H19.8164"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.8164 5.13281L19.8164 12.1328L12.8164 19.1328"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>

                    <a href={CONTACTS.tgItHelp} className="contact-block hover-scale" target="_blank" rel="noreferrer">
                        <div className="contact-block-content">
                            <div className="contact-block-content-icon">
                                <svg
                                    width="30"
                                    height="31"
                                    viewBox="0 0 30 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 3C8.1 3 2.5 8.6 2.5 15.5C2.5 22.4 8.1 28 15 28C21.9 28 27.5 22.4 27.5 15.5C27.5 8.6 21.9 3 15 3ZM20.8 11.5C20.6125 13.475 19.8 18.275 19.3875 20.4875C19.2125 21.425 18.8625 21.7375 18.5375 21.775C17.8125 21.8375 17.2625 21.3 16.5625 20.8375C15.4625 20.1125 14.8375 19.6625 13.775 18.9625C12.5375 18.15 13.3375 17.7 14.05 16.975C14.2375 16.7875 17.4375 13.875 17.5 13.6125C17.5087 13.5727 17.5075 13.5315 17.4966 13.4923C17.4857 13.453 17.4654 13.4171 17.4375 13.3875C17.3625 13.325 17.2625 13.35 17.175 13.3625C17.0625 13.3875 15.3125 14.55 11.9 16.85C11.4 17.1875 10.95 17.3625 10.55 17.35C10.1 17.3375 9.25 17.1 8.6125 16.8875C7.825 16.6375 7.2125 16.5 7.2625 16.0625C7.2875 15.8375 7.6 15.6125 8.1875 15.375C11.8375 13.7875 14.2625 12.7375 15.475 12.2375C18.95 10.7875 19.6625 10.5375 20.1375 10.5375C20.2375 10.5375 20.475 10.5625 20.625 10.6875C20.75 10.7875 20.7875 10.925 20.8 11.025C20.7875 11.1 20.8125 11.325 20.8 11.5Z"
                                        fill="#838383"
                                    />
                                </svg>
                            </div>

                            <div className="contact-block-content-text">
                                <h3 className="contact-block-content-text__title">
                                    Telegram (Поддержка по проблемам с авторизацией)
                                </h3>
                                <span className="contact-block-content-text__subtitle">@thecultt_help_it</span>
                            </div>
                        </div>

                        <svg
                            className="contact-block-arrow"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.81641 12.1328H19.8164"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.8164 5.13281L19.8164 12.1328L12.8164 19.1328"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>

                    <a
                        href={CONTACTS.whatsappLink}
                        className="contact-block hover-scale"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="contact-block-content">
                            <div className="contact-block-content-icon">
                                <svg
                                    width="31"
                                    height="31"
                                    viewBox="0 0 31 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.3125 6.63757C23.1665 5.47998 21.8015 4.56216 20.297 3.93764C18.7926 3.31312 17.1789 2.9944 15.55 3.00007C8.725 3.00007 3.1625 8.56257 3.1625 15.3876C3.1625 17.5751 3.7375 19.7001 4.8125 21.5751L3.0625 28.0001L9.625 26.2751C11.4375 27.2626 13.475 27.7876 15.55 27.7876C22.375 27.7876 27.9375 22.2251 27.9375 15.4001C27.9375 12.0876 26.65 8.97507 24.3125 6.63757ZM15.55 25.6876C13.7 25.6876 11.8875 25.1876 10.3 24.2501L9.925 24.0251L6.025 25.0501L7.0625 21.2501L6.8125 20.8626C5.78468 19.2213 5.23892 17.3241 5.2375 15.3876C5.2375 9.71257 9.8625 5.08757 15.5375 5.08757C18.2875 5.08757 20.875 6.16257 22.8125 8.11257C23.7719 9.06753 24.5321 10.2034 25.0492 11.4544C25.5664 12.7053 25.83 14.0465 25.825 15.4001C25.85 21.0751 21.225 25.6876 15.55 25.6876ZM21.2 17.9876C20.8875 17.8376 19.3625 17.0876 19.0875 16.9751C18.8 16.8751 18.6 16.8251 18.3875 17.1251C18.175 17.4376 17.5875 18.1376 17.4125 18.3376C17.2375 18.5501 17.05 18.5751 16.7375 18.4126C16.425 18.2626 15.425 17.9251 14.25 16.8751C13.325 16.0501 12.7125 15.0376 12.525 14.7251C12.35 14.4126 12.5 14.2501 12.6625 14.0876C12.8 13.9501 12.975 13.7251 13.125 13.5501C13.275 13.3751 13.3375 13.2376 13.4375 13.0376C13.5375 12.8251 13.4875 12.6501 13.4125 12.5001C13.3375 12.3501 12.7125 10.8251 12.4625 10.2001C12.2125 9.60007 11.95 9.67507 11.7625 9.66257H11.1625C10.95 9.66257 10.625 9.73757 10.3375 10.0501C10.0625 10.3626 9.2625 11.1126 9.2625 12.6376C9.2625 14.1626 10.375 15.6376 10.525 15.8376C10.675 16.0501 12.7125 19.1751 15.8125 20.5126C16.55 20.8376 17.125 21.0251 17.575 21.1626C18.3125 21.4001 18.9875 21.3626 19.525 21.2876C20.125 21.2001 21.3625 20.5376 21.6125 19.8126C21.875 19.0876 21.875 18.4751 21.7875 18.3376C21.7 18.2001 21.5125 18.1376 21.2 17.9876Z"
                                        fill="#838383"
                                    />
                                </svg>
                            </div>

                            <div className="contact-block-content-text">
                                <h3 className="contact-block-content-text__title">WhatsApp</h3>
                                <span className="contact-block-content-text__subtitle">{CONTACTS.whatsappPhone}</span>
                            </div>
                        </div>

                        <svg
                            className="contact-block-arrow"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.81641 12.1328H19.8164"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.8164 5.13281L19.8164 12.1328L12.8164 19.1328"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a href={`mailto:${CONTACTS.email}`} className="contact-block hover-scale">
                        <div className="contact-block-content">
                            <div className="contact-block-content-icon">
                                <svg
                                    width="30"
                                    height="31"
                                    viewBox="0 0 30 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 25.5C4.3125 25.5 3.72375 25.255 3.23375 24.765C2.74375 24.275 2.49917 23.6867 2.5 23V8C2.5 7.3125 2.745 6.72375 3.235 6.23375C3.725 5.74375 4.31334 5.49917 5 5.5H25C25.6875 5.5 26.2763 5.745 26.7663 6.235C27.2563 6.725 27.5008 7.31334 27.5 8V23C27.5 23.6875 27.255 24.2763 26.765 24.7663C26.275 25.2563 25.6867 25.5008 25 25.5H5ZM25 10.5L15.6563 16.3438C15.5521 16.4063 15.4425 16.4533 15.3275 16.485C15.2125 16.5167 15.1033 16.5321 15 16.5313C14.8958 16.5313 14.7863 16.5158 14.6713 16.485C14.5563 16.4542 14.4471 16.4071 14.3438 16.3438L5 10.5V23H25V10.5ZM15 14.25L25 8H5L15 14.25ZM5 10.8125V8.96875V9V8.985V10.8125Z"
                                        fill="#838383"
                                    />
                                </svg>
                            </div>

                            <div className="contact-block-content-text">
                                <h3 className="contact-block-content-text__title">Mail</h3>
                                <span className="contact-block-content-text__subtitle">{CONTACTS.email}</span>
                            </div>
                        </div>

                        <svg
                            className="contact-block-arrow"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.81641 12.1328H19.8164"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.8164 5.13281L19.8164 12.1328L12.8164 19.1328"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    {/* <div className="contact-block-office hover-scale">
                        <h3 className="contact-block-office__title">Адрес офиса</h3>
                        <p className="contact-block-office__description">
                            Мы находимся по адресу {CONTACTS.address} (3 этаж, офис THE CULTT) ежедневно с 10:00 до
                            21:00. Для посещения необходима регистрация!
                        </p>
                        <a
                            href={EXTERNAL_LINKS.clientVisit}
                            className="btn-regular contact-block-office__btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Выбрать время
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
