import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

const SellInfoCommissionService: React.FC = () => {
    return (
        <div className="sell-info-commission-service">
            <div className="sell-info-commission-service-text">
                <h2 className="sell-info-commission-service-text__title">Что включает комиссия THE CULTT</h2>

                <p className="sell-info-commission-service-text__description">
                    Мы&nbsp;берем на&nbsp;себя весь процесс продажи: проверка на&nbsp;подлинность, чистка
                    и&nbsp;реставрация лота, если это будет необходимо, фотосессия, размещение на&nbsp;сайте
                    и&nbsp;оформление сделки.
                </p>

                <Link href={APP_ROUTE.sell.create} className="btn sell-info-commission-service-text__btn">
                    Оформить заявку сейчас
                </Link>
            </div>

            <div className="sell-info-commission-service-block">
                <p className="sell-info-commission-service-block__item">
                    На&nbsp;каждом этапе сопровождает ваш персональный менеджер, на&nbsp;связи каждый день
                </p>
                <p className="sell-info-commission-service-block__item">
                    Согласование условий сделки и&nbsp;забора товара
                </p>
                <p className="sell-info-commission-service-block__item">
                    Проверка на&nbsp;подлинность и&nbsp;подготовка к&nbsp;продаже
                </p>
                <p className="sell-info-commission-service-block__item">
                    Реклама и&nbsp;продвижение товара, чтобы найти покупателя
                </p>
                <p className="sell-info-commission-service-block__item">
                    Оформление сделки с&nbsp;покупателем, упаковка и&nbsp;доставка лота покупателю
                </p>
            </div>

            <Link href={APP_ROUTE.sell.create} className="btn sell-info-commission-service__btn__media">
                Оформить заявку сейчас
            </Link>
        </div>
    );
};

export default SellInfoCommissionService;
