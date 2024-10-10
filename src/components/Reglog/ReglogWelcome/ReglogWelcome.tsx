'use client';

import React from 'react';

import { useHash } from '@/hooks/useHash';
import { Button } from '@/shared/ui';

const ReglogWelcome: React.FC = () => {
    const { removeHash } = useHash();

    return (
        <div className="reglog-content-text">
            <h3 className="reglog-content-text__title">Добро пожаловать в THE CULTT 🎉</h3>
            <p className="reglog-content-text__description">
                Спасибо, что формируете КУЛЬТуру нового потребления вместе с нами! Продавайте, покупайте и обменивайте
                люксовые сумки, обувь и аксессуары на платформе THE CULTT
            </p>
            <Button label="Начать пользоваться" className="reglog-content-text__link" onClick={removeHash} wide />
        </div>
    );
};

export default ReglogWelcome;
