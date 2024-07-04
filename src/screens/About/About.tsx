'use client';

import React from 'react';

import AboutMainImage from '@/assets/images/about/about-image-1.jpg';
import AboutCulttImage from '@/assets/images/about/about-image-2.jpg';

import ElleLogo from '@/assets/images/about/logos/elle.png';
import ForbesLogo from '@/assets/images/about/logos/forbes.png';
import BuroLogo from '@/assets/images/about/logos/buro.png';
import IncLogo from '@/assets/images/about/logos/inc.png';
import RbkLogo from '@/assets/images/about/logos/rbk.png';
import BluepintLogo from '@/assets/images/about/logos/bluepint.png';

import Anna from '@/assets/images/about/team/anna.jpg';
import Daria from '@/assets/images/about/team/daria.jpg';
import Maria from '@/assets/images/about/team/maria.jpg';
import Tatiana from '@/assets/images/about/team/tatiana.jpg';

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-main hover-scale">
                        <div className="about-main-text">
                            <h2 className="title mb about-main-text__title">
                                Кто такие <br /> THE CULTT ?
                            </h2>
                            <p className="description about-main-text__description">
                                Первая ресейл-платформа аксессуаров с селекционным подходом. Между собой мы называем наш
                                проект просто «Культ», ведь основное направление — именно культовые сумки.
                            </p>
                        </div>
                        <div
                            className="about-main-image"
                            style={{
                                backgroundImage: `url("${AboutMainImage.src}")`,
                            }}
                        />
                    </div>
                    <div className="about-cultt">
                        <div
                            className="about-cultt-image"
                            style={{
                                backgroundImage: `url("${AboutCulttImage.src}")`,
                            }}
                        />
                        <div className="about-cultt-text">
                            <h3 className="about-cultt-text__title">
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="about-cultt-text__title__quotes left"
                                >
                                    <path
                                        d="M9.54792 36.0863C7.40208 33.8072 6.25 31.2509 6.25 27.1072C6.25 19.8155 11.3687 13.2801 18.8125 10.0488L20.6729 12.9197C13.725 16.678 12.3667 21.5551 11.825 24.6301C12.9437 24.0509 14.4083 23.8488 15.8438 23.9822C19.6021 24.3301 22.5646 27.4155 22.5646 31.2509C22.5646 33.1848 21.7964 35.0394 20.4289 36.4069C19.0615 37.7744 17.2068 38.5426 15.2729 38.5426C14.2035 38.5332 13.1465 38.3113 12.1637 37.8896C11.1808 37.4679 10.2916 36.8549 9.54792 36.0863ZM30.3813 36.0863C28.2354 33.8072 27.0833 31.2509 27.0833 27.1072C27.0833 19.8155 32.2021 13.2801 39.6458 10.0488L41.5062 12.9197C34.5583 16.678 33.2 21.5551 32.6583 24.6301C33.7771 24.0509 35.2417 23.8488 36.6771 23.9822C40.4354 24.3301 43.3979 27.4155 43.3979 31.2509C43.3979 33.1848 42.6297 35.0394 41.2622 36.4069C39.8948 37.7744 38.0401 38.5426 36.1062 38.5426C35.0368 38.5332 33.9799 38.3113 32.997 37.8896C32.0141 37.4679 31.125 36.8549 30.3813 36.0863Z"
                                        fill="#E6DFD6"
                                    />
                                </svg>
                                Мы дарим вторую жизнь культовым вещам и формируем культуру нового потребления
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="about-cultt-text__title__quotes right"
                                >
                                    <path
                                        d="M40.4534 13.9152C42.5992 16.1944 43.7513 18.7507 43.7513 22.8944C43.7513 30.1861 38.6346 36.7215 31.1888 39.9527L29.3284 37.0819C36.2763 33.3236 37.6346 28.4465 38.1784 25.3715C37.0596 25.9507 35.5951 26.1527 34.1576 26.0194C30.3992 25.6715 27.4367 22.5861 27.4367 18.7507C27.4367 16.8168 28.2049 14.9621 29.5724 13.5947C30.9398 12.2272 32.7945 11.459 34.7284 11.459C36.9638 11.459 39.1034 12.4798 40.4534 13.9152ZM19.6201 13.9152C21.7659 16.1944 22.918 18.7507 22.918 22.8944C22.918 30.1861 17.8013 36.7215 10.3555 39.9527L8.49505 37.0819C15.443 33.3236 16.8013 28.4465 17.343 25.3715C16.2242 25.9507 14.7596 26.1527 13.3242 26.0194C9.56589 25.6715 6.60547 22.5861 6.60547 18.7507C6.60547 16.8168 7.3737 14.9621 8.74115 13.5947C10.1086 12.2272 11.9633 11.459 13.8971 11.459C16.1326 11.459 18.2721 12.4798 19.6221 13.9152H19.6201Z"
                                        fill="#E6DFD6"
                                    />
                                </svg>
                            </h3>
                            <p className="description about-cultt-text__description">
                                Проект был запущен в октябре 2020 года четырьмя девушками: Аней Автайкиной, Дашей
                                Зосименко, Машей Манаевой, Таней Ермаковой. <br /> <br /> Он стал синергией нашего
                                разнопланового опыта в развитии диджитал продуктов, персональном стайлинге, развитии
                                рекламной платформы и PR-сопровождении локального бренда.
                            </p>
                        </div>
                    </div>
                    <div className="about-quote hover-scale">
                        <div className="about-quote-title">
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="about-quote-title__quotes left"
                            >
                                <path
                                    d="M9.54792 36.0863C7.40208 33.8072 6.25 31.2509 6.25 27.1072C6.25 19.8155 11.3687 13.2801 18.8125 10.0488L20.6729 12.9197C13.725 16.678 12.3667 21.5551 11.825 24.6301C12.9437 24.0509 14.4083 23.8488 15.8438 23.9822C19.6021 24.3301 22.5646 27.4155 22.5646 31.2509C22.5646 33.1848 21.7964 35.0394 20.4289 36.4069C19.0615 37.7744 17.2068 38.5426 15.2729 38.5426C14.2035 38.5332 13.1465 38.3113 12.1637 37.8896C11.1808 37.4679 10.2916 36.8549 9.54792 36.0863ZM30.3813 36.0863C28.2354 33.8072 27.0833 31.2509 27.0833 27.1072C27.0833 19.8155 32.2021 13.2801 39.6458 10.0488L41.5062 12.9197C34.5583 16.678 33.2 21.5551 32.6583 24.6301C33.7771 24.0509 35.2417 23.8488 36.6771 23.9822C40.4354 24.3301 43.3979 27.4155 43.3979 31.2509C43.3979 33.1848 42.6297 35.0394 41.2622 36.4069C39.8948 37.7744 38.0401 38.5426 36.1062 38.5426C35.0368 38.5332 33.9799 38.3113 32.997 37.8896C32.0141 37.4679 31.125 36.8549 30.3813 36.0863Z"
                                    fill="#E6DFD6"
                                />
                            </svg>
                            <h4 className="about-quote-title__title">
                                Нас объединила идея создания ресейл-проекта. мы сами пользовались подобными сервисами и
                                чувствовали нехватку именно селекционного подхода к аксессуарам. так и возникла идея
                                создания платформы THE СULTT.
                            </h4>
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="about-quote-title__quotes right"
                            >
                                <path
                                    d="M40.4534 13.9152C42.5992 16.1944 43.7513 18.7507 43.7513 22.8944C43.7513 30.1861 38.6346 36.7215 31.1888 39.9527L29.3284 37.0819C36.2763 33.3236 37.6346 28.4465 38.1784 25.3715C37.0596 25.9507 35.5951 26.1527 34.1576 26.0194C30.3992 25.6715 27.4367 22.5861 27.4367 18.7507C27.4367 16.8168 28.2049 14.9621 29.5724 13.5947C30.9398 12.2272 32.7945 11.459 34.7284 11.459C36.9638 11.459 39.1034 12.4798 40.4534 13.9152ZM19.6201 13.9152C21.7659 16.1944 22.918 18.7507 22.918 22.8944C22.918 30.1861 17.8013 36.7215 10.3555 39.9527L8.49505 37.0819C15.443 33.3236 16.8013 28.4465 17.343 25.3715C16.2242 25.9507 14.7596 26.1527 13.3242 26.0194C9.56589 25.6715 6.60547 22.5861 6.60547 18.7507C6.60547 16.8168 7.3737 14.9621 8.74115 13.5947C10.1086 12.2272 11.9633 11.459 13.8971 11.459C16.1326 11.459 18.2721 12.4798 19.6221 13.9152H19.6201Z"
                                    fill="#E6DFD6"
                                />
                            </svg>
                        </div>

                        <div className="about-quote-description">
                            <p className="description about-quote-description__description">
                                Наше преимущество — в актуальной селекции. Все изделия проходят тщательную проверку на
                                подлинность и состояние до публикации на платформе THE CULTT, а команда стилистов
                                отбирает лоты на соответствие актуальности моделей и брендов. Вам не придется
                                пролистывать тысячу товаров для того, чтобы найти один интересный вариант.
                            </p>

                            <p className="description about-quote-description__description">
                                Мы всей душой любим сумки и считаем их знаковым предметом гардероба, способным сделать
                                любой образ интересным и актуальным. Надеемся, что вы найдете сумку мечты именно у нас!
                            </p>
                        </div>
                    </div>
                    <div className="about-media">
                        <h3 className="about-media__title">О нас пишут</h3>
                        <div className="about-media-logos">
                            <a
                                href="https://www.elle.ru/moda/vybor-elle-5-rossiiskikh-reseil-proektov-kotorym-my-doveryaem/"
                                className="about-media-logos-item hover-scale"
                                target="__blank"
                            >
                                <img src={ElleLogo.src} alt="" className="about-media-logos-item__image" />
                            </a>
                            <a
                                href="https://www.forbes.ru/svoi-biznes/464469-10-samyh-perspektivnyh-rossijskih-deatelej-mody-i-dizajna-moloze-30-let-2022"
                                className="about-media-logos-item hover-scale"
                                target="__blank"
                            >
                                <img src={ForbesLogo.src} alt="" className="about-media-logos-item__image" />
                            </a>
                            <a
                                href="https://www.buro247.ru/news/style/29-mar-2022-the-cultt-retail-project-sale-sunglass.html"
                                className="about-media-logos-item hover-scale"
                                target="__blank"
                            >
                                <img src={BuroLogo.src} alt="" className="about-media-logos-item__image" />
                            </a>
                            <a
                                href="https://incrussia.ru/concoct/the-cultt/"
                                className="about-media-logos-item hover-scale"
                                target="__blank"
                            >
                                <img src={IncLogo.src} alt="" className="about-media-logos-item__image" />
                            </a>
                            <a
                                href="https://style.rbc.ru/items/624d9ce59a7947597b47b5e7"
                                className="about-media-logos-item hover-scale"
                                target="__blank"
                            >
                                <img src={RbkLogo.src} alt="" className="about-media-logos-item__image" />
                            </a>
                            <a
                                href="https://theblueprint.ru/fashion/industry/ritejl-proekty"
                                className="about-media-logos-item hover-scale"
                                target="__blank"
                            >
                                <img src={BluepintLogo.src} alt="" className="about-media-logos-item__image" />
                            </a>
                        </div>
                    </div>

                    <div className="about-team">
                        <h3 className="about-team__title">Meet our team</h3>
                        <p className="description about-team__description">
                            Познакомьтесь с основательнницами THE CULTT - Анна Автайкина, Дарья Зосименко, Мария Манаева
                            и Таня Ермакова. Они всегда любили ресейл и объединились, чтобы вместе формировать КУЛЬТуру
                            нового потребления.
                        </p>

                        <div className="about-team-members">
                            <div
                                className="about-team-members-item hover-scale"
                                style={{
                                    backgroundImage: `url("${Anna.src}")`,
                                }}
                            >
                                <h4 className="about-team-members-item__name">Анна Автайкина</h4>
                                <p className="about-team-members-item__status">Chief business Dev. officer</p>
                            </div>

                            <div
                                className="about-team-members-item hover-scale"
                                style={{
                                    backgroundImage: `url("${Daria.src}")`,
                                }}
                            >
                                <h4 className="about-team-members-item__name">Дарья Зосименко</h4>
                                <p className="about-team-members-item__status">Chief fashion buying director</p>
                            </div>

                            <div
                                className="about-team-members-item hover-scale"
                                style={{
                                    backgroundImage: `url("${Maria.src}")`,
                                }}
                            >
                                <h4 className="about-team-members-item__name">Мария Манаева</h4>
                                <p className="about-team-members-item__status">Chief operation officer</p>
                            </div>

                            <div
                                className="about-team-members-item hover-scale"
                                style={{
                                    backgroundImage: `url("${Tatiana.src}")`,
                                }}
                            >
                                <h4 className="about-team-members-item__name">Таня Ермакова</h4>
                                <p className="about-team-members-item__status">Chief creative officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
