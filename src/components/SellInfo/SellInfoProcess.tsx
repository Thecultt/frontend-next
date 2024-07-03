import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import SellInfoProcessImage from '@/assets/images/sell-info/sell-info-process.jpg';

const SellInfoProcess: React.FC = () => {
    return (
        <div className="sell-info-process">
            <div
                className="sell-info-process-image"
                style={{
                    backgroundImage: `url("${SellInfoProcessImage}")`,
                }}
            />

            <div className="sell-info-process-text">
                <h2 className="sell-info-process-text__title">Узнайте подробнее о процессах</h2>
                <p className="sell-info-process-text__description">
                    Разгрузите гардероб быстро и&nbsp;выгодно с&nbsp;нашей помощью. Мы&nbsp;подготовим ваши лоты
                    к&nbsp;продаже, сделаем съемку, согласуем оптимальную стоимость для продажи в&nbsp;короткий срок
                    и&nbsp;найдем покупателя. Вам останется только получить оплату.
                </p>

                <Link href={APP_ROUTE.home} className="btn sell-info-process-text__btn">
                    Подробнее
                </Link>
            </div>
        </div>
    );
};

export default SellInfoProcess;
