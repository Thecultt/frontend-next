import React from 'react';
import Link from 'next/link';

import { APP_ROUTE, EXTERNAL_LINKS } from '@/constants/routes';

const FaqAll: React.FC = () => {
    return (
        <div className="faq-main-content-all">
            <h3 className="faq-main-content-all__title">Общее</h3>

            <div className="faq-main-content-all-col-wrapper">
                <div className="faq-main-content-all-col">
                    <Link href={APP_ROUTE.about} className="faq-main-content-all-col__link">
                        О нас
                    </Link>
                    <a
                        href={EXTERNAL_LINKS.career}
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Карьера
                    </a>
                </div>

                <div className="faq-main-content-all-col">
                    <a
                        href={EXTERNAL_LINKS.resaleReport}
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resale Report 2023
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FaqAll;
