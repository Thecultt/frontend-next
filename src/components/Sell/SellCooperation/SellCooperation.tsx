'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CabinetSellTypes, CabinetSellStepKeys } from '@/redux/types/ICabinetSell';
import { setCabinetSellCurrentType, setCabinetSellCurrentStep } from '@/redux/actions/cabinet_sell';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { APP_ROUTE } from '@/constants/routes';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { pushDataLayer } from '@/functions/pushDataLayer';

const SellCooperation: React.FC = () => {
    const dispatch = useDispatch();

    const searchParams = useSearchParams();
    const initType = searchParams.get('type');

    const { currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);
    const { isLoggedIn } = useAuthUser();

    const types = [
        {
            title: 'Продажа',
            description: `Вы получаете выплату за аксессуар сразу после
			согласования условий и проверки на подлинность или
			после продажи товара за комиссию.`,
            type: CabinetSellTypes.SELL,
        },

        {
            title: 'Обмен',
            description: `Мы оценим ваш лот и предложим депозит в размере его
			стоимости на покупку нового лота на нашем сайте.`,
            type: CabinetSellTypes.EXCHANGE,
        },
    ];

    React.useEffect(() => {
        if (initType === CabinetSellTypes.EXCHANGE) {
            dispatch(setCabinetSellCurrentType(CabinetSellTypes.EXCHANGE));
        }
    }, [initType]);

    return (
        <div className="sell-block sell-block-cooperation">
            <h3 className="sell-block__title">Вариант сотрудничества</h3>
            <p className="sell-block__subtitle">
                Выберите вариант сотрудничества, который вам интересен.{' '}
                <Link href={APP_ROUTE.sell.info}>Подробнее о способах продажи.</Link>
            </p>

            <div className="sell-block-cooperation-type-block-wrapper">
                {types.map((type, index) => (
                    <button
                        className={getClassNames('sell-block-cooperation-type-block', {
                            active: type.type === currentType,
                        })}
                        key={`sell-block-cooperation-type-block-${index}`}
                        onClick={() => dispatch(setCabinetSellCurrentType(type.type))}
                    >
                        <h4 className="sell-block-cooperation-type-block__title">{type.title}</h4>
                        <p className="sell-block-cooperation-type-block__description">{type.description}</p>
                    </button>
                ))}

                <Link href={APP_ROUTE.vipService} className="sell-block-cooperation-type-block">
                    <h4 className="sell-block-cooperation-type-block__title">VIP-сервис</h4>
                    <p className="sell-block-cooperation-type-block__description">
                        При продаже более 7 лотов мы бесплатно предоставляем личного менеджера, услугу выезда на дом и
                        заполнения заявки для лотов.
                    </p>
                </Link>
            </div>

            {isLoggedIn ? (
                <button
                    className="btn sell-block__btn"
                    onClick={() => {
                        dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.INFO));
                        pushDataLayer('cooperation_type_complete', {
                            cooperation_type: currentType === 'sell' ? 'sell' : 'swap',
                        });
                    }}
                >
                    Продолжить
                </button>
            ) : (
                <Link
                    href={`${APP_ROUTE.sell.create}?redirect=${APP_ROUTE.sell.create}?step=${CabinetSellStepKeys.INFO}#${ReglogStateTypesNotLogin.REGLOG}`}
                    className="btn sell-block__btn"
                >
                    Продолжить
                </Link>
            )}
        </div>
    );
};

export default SellCooperation;
