'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Props {
    link?: string;
    className?: string;
}

export const BackButton: React.FC<Props> = ({ link, className = '' }) => {
    const router = useRouter();

    const goBack = () => {
        if (link) {
            router.push(link);
            return;
        }

        router.back();
    };

    return (
        <button type="button" className={`back-button ${className}`} onClick={goBack}>
            <i className="back-button__icon">
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 1.5L1 7.5L7 13.5"
                        stroke="#202020"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </i>
            <span className="back-button__text">Вернуться</span>
        </button>
    );
};
