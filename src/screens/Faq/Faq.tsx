'use client';

import React from 'react';
import { redirect, useParams } from 'next/navigation';

import { FaqAll, FaqBuyers, FaqSellers, FaqTheCultt } from '@/components';
import { NavLink } from '@/shared/ui';
import FaqMainBannerImage from '@/assets/images/faq/faq-main-image.jpg';
import { APP_ROUTE } from '@/constants/routes';

enum FaqBlock {
    All = 'all',
    Buyers = 'buyers',
    Sellers = 'sellers',
    Thecultt = 'thecultt',
}

const Faq: React.FC = () => {
    const { block } = useParams<{ block?: string }>();

    if (!block || !(Object.values(FaqBlock) as string[]).includes(block)) {
        return redirect(APP_ROUTE.help.all);
    }

    const blocks: Record<FaqBlock, React.ReactNode> = {
        [FaqBlock.All]: <FaqAll />,
        [FaqBlock.Buyers]: <FaqBuyers />,
        [FaqBlock.Sellers]: <FaqSellers />,
        [FaqBlock.Thecultt]: <FaqTheCultt />,
    };

    const currentBlock = blocks[block as FaqBlock];

    return (
        <section className="faq-main">
            <div className="container">
                <div className="faq-main-wrapper">
                    <div
                        className="faq-main-banner"
                        style={{
                            backgroundImage: `url(${FaqMainBannerImage.src})`,
                        }}
                    >
                        <p className="faq-main-banner__title">
                            Вопросы и ответы <span>THE CULTT</span>
                        </p>
                    </div>

                    <div className="faq-main-menu">
                        <NavLink
                            href={`${APP_ROUTE.help.root}/${FaqBlock.All}`}
                            className="faq-main-menu__link"
                            scroll={false}
                        >
                            Общее
                        </NavLink>
                        <NavLink
                            href={`${APP_ROUTE.help.root}/${FaqBlock.Buyers}`}
                            className="faq-main-menu__link"
                            scroll={false}
                        >
                            Покупателям
                        </NavLink>
                        <NavLink
                            href={`${APP_ROUTE.help.root}/${FaqBlock.Sellers}`}
                            className="faq-main-menu__link"
                            scroll={false}
                        >
                            Продавцам
                        </NavLink>
                        <NavLink
                            href={`${APP_ROUTE.help.root}/${FaqBlock.Thecultt}`}
                            className="faq-main-menu__link"
                            scroll={false}
                        >
                            Условия использования сервисов THE CULTT и реквизиты
                        </NavLink>
                    </div>

                    <div className="faq-main-content">{currentBlock}</div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
