'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { getPath } from '@/functions/getPath';

const ReglogWelcome: React.FC = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();

    return (
        <div className="reglog-content-text">
            <h3 className="reglog-content-text__title">Добро пожаловать в THE CULTT 🎉</h3>
            <p className="reglog-content-text__description">
                Спасибо, что формируете КУЛЬТуру нового потребления вместе с нами! Продавайте, покупайте и обменивайте
                люксовые сумки, обувь и аксессуары на платформе THE CULTT
            </p>
            <Link href={getPath({ pathname, search })} className="btn reglog-content-text__link">
                Начать пользоваться
            </Link>
        </div>
    );
};

export default ReglogWelcome;
