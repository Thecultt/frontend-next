import React from 'react';

import AuthImage1 from '@/assets/images/auth/auth-image1.jpg';
import AuthImage2 from '@/assets/images/auth/auth-image2.jpg';

const Auth: React.FC = () => (
    <section className="auth">
        <div className="container">
            <div className="auth-wrapper">
                <div className="auth-main hover-scale">
                    <div className="auth-main-text">
                        <h2 className="auth-main-text__title">Гарантия подлинности</h2>
                        <p className="description auth-main-text__description">
                            Мы ценим ваше доверие и тщательно проверяем каждый лот. Все товары представленные на
                            платформе являются оригинальными.
                        </p>
                    </div>
                    <div
                        className="auth-main-image"
                        style={{
                            backgroundImage: `url("${AuthImage1.src}")`,
                        }}
                    />
                </div>

                <div className="auth-service">
                    <div className="auth-service-text-wrap">
                        <div
                            className="auth-service-image"
                            style={{
                                backgroundImage: `url("${AuthImage2.src}")`,
                            }}
                        />
                        <div className="auth-service-text">
                            <h3 className="title mb auth-service-text__title">
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="auth-service-text__title__quotes left"
                                >
                                    <path
                                        d="M9.54792 36.0863C7.40208 33.8072 6.25 31.2509 6.25 27.1072C6.25 19.8155 11.3687 13.2801 18.8125 10.0488L20.6729 12.9197C13.725 16.678 12.3667 21.5551 11.825 24.6301C12.9437 24.0509 14.4083 23.8488 15.8438 23.9822C19.6021 24.3301 22.5646 27.4155 22.5646 31.2509C22.5646 33.1848 21.7964 35.0394 20.4289 36.4069C19.0615 37.7744 17.2068 38.5426 15.2729 38.5426C14.2035 38.5332 13.1465 38.3113 12.1637 37.8896C11.1808 37.4679 10.2916 36.8549 9.54792 36.0863ZM30.3813 36.0863C28.2354 33.8072 27.0833 31.2509 27.0833 27.1072C27.0833 19.8155 32.2021 13.2801 39.6458 10.0488L41.5062 12.9197C34.5583 16.678 33.2 21.5551 32.6583 24.6301C33.7771 24.0509 35.2417 23.8488 36.6771 23.9822C40.4354 24.3301 43.3979 27.4155 43.3979 31.2509C43.3979 33.1848 42.6297 35.0394 41.2622 36.4069C39.8948 37.7744 38.0401 38.5426 36.1062 38.5426C35.0368 38.5332 33.9799 38.3113 32.997 37.8896C32.0141 37.4679 31.125 36.8549 30.3813 36.0863Z"
                                        fill="#E6DFD6"
                                    />
                                </svg>
                                Мы работаем только с проверенными аксессуарами.
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="auth-service-text__title__quotes right"
                                >
                                    <path
                                        d="M40.4534 13.9152C42.5992 16.1944 43.7513 18.7507 43.7513 22.8944C43.7513 30.1861 38.6346 36.7215 31.1888 39.9527L29.3284 37.0819C36.2763 33.3236 37.6346 28.4465 38.1784 25.3715C37.0596 25.9507 35.5951 26.1527 34.1576 26.0194C30.3992 25.6715 27.4367 22.5861 27.4367 18.7507C27.4367 16.8168 28.2049 14.9621 29.5724 13.5947C30.9398 12.2272 32.7945 11.459 34.7284 11.459C36.9638 11.459 39.1034 12.4798 40.4534 13.9152ZM19.6201 13.9152C21.7659 16.1944 22.918 18.7507 22.918 22.8944C22.918 30.1861 17.8013 36.7215 10.3555 39.9527L8.49505 37.0819C15.443 33.3236 16.8013 28.4465 17.343 25.3715C16.2242 25.9507 14.7596 26.1527 13.3242 26.0194C9.56589 25.6715 6.60547 22.5861 6.60547 18.7507C6.60547 16.8168 7.3737 14.9621 8.74115 13.5947C10.1086 12.2272 11.9633 11.459 13.8971 11.459C16.1326 11.459 18.2721 12.4798 19.6221 13.9152H19.6201Z"
                                        fill="#E6DFD6"
                                    />
                                </svg>
                            </h3>

                            <p className="description auth-service-text__description">
                                Перед размещением на THE CULTT все товары проходят трехшаговую проверку на подлинность.
                                Сначала лот изучает наш эксперт, следом — сервисы по аутентификации на базе технологий
                                искусственного интеллекта. Далее мы привлекаем сторонних специалистов. Если в двух
                                случаях из трех возникают сомнения в оригинальности лота, он не попадает на платформу.
                                Мы расцениваем его как неоригинальный и запрашиваем у продавца оплату компенсации.
                            </p>
                        </div>
                    </div>

                    <div className="auth-service-block-wrapper">
                        <div className="auth-service-block hover-scale">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4122 4L15.0116 9.26604L20.8244 10.1157L16.6183 14.2124L17.6109 20L12.4122 17.266L7.21346 20L8.2061 14.2124L4 10.1157L9.81283 9.26604L12.4122 4Z"
                                    stroke="#285141"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="auth-service-block__description">
                                На одном из этапов проверки на подлинность мы используем признанные во всем мире сервисы
                                аутентификации: <b>Entrupy, Authentic и Bababebi.</b> Если вы предоставите
                                доказательства приобретения неоригинального товара, подтвержденные данными сервисами, мы
                                возместим 100% стоимости покупки.
                            </p>
                        </div>

                        <div className="auth-service-block hover-scale">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4122 4L15.0116 9.26604L20.8244 10.1157L16.6183 14.2124L17.6109 20L12.4122 17.266L7.21346 20L8.2061 14.2124L4 10.1157L9.81283 9.26604L12.4122 4Z"
                                    stroke="#285141"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="auth-service-block__description">
                                У всех лотов, прошедших проверку на подлинность, есть фирменная бирка THE CULTT. Возврат
                                возможен только при сохранении ее целостности.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Auth;
