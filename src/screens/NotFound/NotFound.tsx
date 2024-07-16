'use client';

import React from 'react';

import NotfoundImage from '@/assets/images/notfound.jpg';
import { APP_ROUTE } from '@/constants/routes';
import { BaseImage } from '@/components';

const NotFound: React.FC = () => (
    <section className="not-found">
        <div className="container">
            <div className="not-found-wrapper">
                <div className="not-found-text">
                    <h2 className="not-found-text__title">Ошибка 404</h2>
                    <p className="not-found-text__subtitle">Страница не найдена</p>

                    <a href={APP_ROUTE.catalog} className="not-found-text__link">
                        Перейти в каталог
                    </a>
                </div>

                <BaseImage src={NotfoundImage.src} alt="Not found" className="not-found__image" priority />
            </div>
        </div>
    </section>
);

export default NotFound;
