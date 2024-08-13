'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchCabinetSellsList } from '@/redux/actions/cabinet_sell';
import { CabinetSellsListPaymentInfoMessage, CabinetSellsListItem } from '@/components';
import { APP_ROUTE } from '@/constants/routes';

const CabinetSellsList: React.FC = () => {
    const dispatch = useDispatch();

    const { sellsList } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    React.useEffect(() => {
        dispatch(fetchCabinetSellsList() as any);
    }, []);

    // TODO вынести статусы продажи в const/enum
    const statuses: { [key: string]: string } = {
        'Заявка в обработке': 'black',
        Отклонено: 'red',
        'Ожидаем в офис': 'green',
        'На проверке': 'black',
        'В ремонте': 'black',
        'На съемке': 'green',
        'В продаже': 'green',
        'На примерке': 'green',
        'На доставке': 'green',
        Выплачено: 'green',
        'Снят с продаж': 'black',
        'Сделка завершена': 'green',
        'Ожидает выплаты': 'green',
        'Ожидает доплаты': 'green',
    };

    return (
        <div className="cabinet-content cabinet-sells-list">
            {/* <CabinetSellsListPaymentInfoMessage /> */}

            <div className="cabinet-sells-list-top">
                <Link href={APP_ROUTE.sell.create} className="btn cabinet-sells-list-top__add">
                    Оставить заявку
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.2487 4.58203V17.4154M4.83203 10.9987H17.6654"
                            stroke="#F7F4F0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>

            {sellsList.length ? (
                sellsList.map((sell, index) => (
                    <CabinetSellsListItem
                        {...sell}
                        statusColor={statuses[sell.status]}
                        key={`cabinet-sells-list-item-${index}`}
                    />
                ))
            ) : (
                <h5 className="cabinet-sells-list-null__title">{/* Ваш список ожидания пока пуст */}</h5>
            )}
        </div>
    );
};

export default CabinetSellsList;
