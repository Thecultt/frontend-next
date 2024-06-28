import React from 'react';
import Link from 'next/link';
import { APP_ROUTE } from '@/constants/routes';

const CabinetHistoryOrdersNull: React.FC = () => {
    return (
        <div className="cabinet-history-orders-null">
            <h5 className="cabinet-history-orders-null__title">Ваш список заказов пока пуст</h5>

            <Link href={APP_ROUTE.catalog} className="btn-regular cabinet-history-orders-null__btn">
                Перейти в каталог
            </Link>
        </div>
    );
};

export default CabinetHistoryOrdersNull;
