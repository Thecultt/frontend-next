'use client';

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getClassNames } from '@/functions/getClassNames';
import { SELL_STEPS } from '@/constants/sell';

const SellSteps: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tabletExtra})`);

    const { currentStep, currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        SELL_STEPS.filter((step) => {
            return step.types.find((type) => {
                if (type === currentType) {
                    return step;
                }
            });
        }).map((step, index) => {
            if (step.key === currentStep) {
                setCurrentIndex(index + 1);
            }
        });
    }, [currentStep]);

    return (
        <div className="sell-steps">
            {SELL_STEPS.filter((step) => {
                return step.types.find((type) => {
                    if (type === currentType) {
                        return step;
                    }
                });
            }).map((step, index) =>
                !isMobile ? (
                    <div
                        className={getClassNames('sell-steps-item', {
                            active: index + 1 === currentIndex,
                            success: index + 1 < currentIndex,
                        })}
                        key={`sell-steps-item-${index}`}
                    >
                        <div className="sell-steps-item-circle">
                            {index + 1 < currentIndex && (
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
                            )}
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
