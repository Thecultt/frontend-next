import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CabinetSellStepKeys, CabinetSellTypes } from '@/redux/types/ICabinetSell';
import { getClassNames } from '@/functions/getClassNames';

const SellSteps: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tabletExtra})`);

    const steps: {
        title: string;
        key: CabinetSellStepKeys;
        types: CabinetSellTypes[];
    }[] = [
        {
            title: 'Вариант сотрудничества',
            key: CabinetSellStepKeys.COOPERATION,
            types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
        },
        {
            title: 'Информация о товаре',
            key: CabinetSellStepKeys.INFO,
            types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
        },
        {
            title: 'Фотографии',
            key: CabinetSellStepKeys.IMAGES,
            types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
        },
        {
            title: 'Товар для обмена',
            key: CabinetSellStepKeys.PRODUCT,
            types: [CabinetSellTypes.EXCHANGE],
        },
        {
            title: 'Контактные данные',
            key: CabinetSellStepKeys.CONTACT,
            types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
        },
        {
            title: 'Способ отправки товара',
            key: CabinetSellStepKeys.DELIVERY,
            types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
        },
    ];

    const { currentStep, currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    React.useEffect(() => {
        steps
            .filter((step) => {
                return step.types.find((type) => {
                    if (type === currentType) {
                        return step;
                    }
                });
            })
            .map((step, index) => {
                if (step.key === currentStep) {
                    setCurrentIndex(index + 1);
                }
            });
    }, [currentStep]);

    return (
        <div className="sell-steps">
            {steps
                .filter((step) => {
                    return step.types.find((type) => {
                        if (type === currentType) {
                            return step;
                        }
                    });
                })
                .map((step, index) =>
                    !isMobile ? (
                        <div
                            className={getClassNames('sell-steps-item', {
                                active: index + 1 === currentIndex,
                                success: index + 1 < currentIndex,
                            })}
                            key={`sell-steps-item-${index}`}
                        >
                            <div className="sell-steps-item-circle">
                                {index + 1 < currentIndex ? (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="20" height="20" rx="10" fill="#285141" />
                                        <path
                                            d="M14.7273 7L8.72727 13L6 10.2727"
                                            stroke="#F1EDE8"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : null}
                            </div>

                            <p className="sell-steps-item__title">
                                {index + 1}. {step.title}
                            </p>
                        </div>
                    ) : (
                        <div
                            className={getClassNames('sell-steps-item-media', {
                                active: index + 1 === currentIndex,
                            })}
                            key={`sell-steps-item-media-${index}`}
                        >
                            <span className="sell-steps-item-media__title">{index + 1}</span>
                        </div>
                    ),
                )}
        </div>
    );
};

export default SellSteps;
