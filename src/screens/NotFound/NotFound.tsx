'use client';

import React from 'react';

import notfoundImage from '@/assets/images/not-found.png';
import { APP_ROUTE } from '@/constants/routes';
import { BaseImage } from '@/shared/ui';

const NotFound: React.FC = () => (
    <section className="not-found">
        <div className="container">
            <div className="not-found-wrapper">
                <div className="not-found-text">
                    <h2 className="not-found-text__title">Ошибка 404</h2>
                    <p className="not-found-text__subtitle">Страница не найдена</p>

                    <a href={APP_ROUTE.catalog} className="not-found-text__link btn-light-green">
                        Перейти в каталог
                    </a>
                </div>

                <div className="not-found__image-wrap">
                    <BaseImage src={notfoundImage.src} alt="Not found" className="not-found__image" priority />
                </div>
            </div>
        </div>
    </section>
);

export default NotFound;
