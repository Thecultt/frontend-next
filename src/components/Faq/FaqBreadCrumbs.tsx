import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

interface FaqBreadCrumbsProps {
    title: string;
}

const FaqBreadCrumbs: React.FC<FaqBreadCrumbsProps> = ({ title }) => {
    return (
        <>
            <Link href={APP_ROUTE.help.all} className="faq-bread-crumbs__back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 12L5 12M5 12L12 19M5 12L12 5"
                        stroke="#202020"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>

            <div className="faq-bread-crumbs">
                <Link href={APP_ROUTE.help.all} className="faq-bread-crumbs__item">
                    Вопросы и ответы
                </Link>

                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.75 0.5L4.75 4.5L0.75 8.5"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <Link href={APP_ROUTE.help.all} className="faq-bread-crumbs__item">
                    Общее
                </Link>

                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.75 0.5L4.75 4.5L0.75 8.5"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <p className="faq-bread-crumbs__item">{title}</p>
            </div>
        </>
    );
};

export default FaqBreadCrumbs;
