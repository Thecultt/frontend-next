import React from 'react';

import { BaseImage } from '@/components';

import Step1Image from '@/assets/images/sell-info/sell-info-step1.jpg';
import Step2Image from '@/assets/images/sell-info/sell-info-step2.jpg';
import Step3Image from '@/assets/images/sell-info/sell-info-step3.jpg';
import Step4Image from '@/assets/images/sell-info/sell-info-step4.jpg';

const steps: { image: string; subtitle: string }[] = [
    {
        image: Step1Image.src,
        subtitle: 'Оставьте заявку на продажу на нашем сайте, лично в офисе или в Telegram',
    },
    {
        image: Step2Image.src,
        subtitle: 'Согласуйте условия сделки и забора товара',
    },
    {
        image: Step3Image.src,
        subtitle: 'Наслаждайтесь свободным временем — мы берём на себя весь процесс продажи',
    },
    {
        image: Step4Image.src,
        subtitle: 'Готово! Ваш товар продан, а вы заработали деньги',
    },
];

const SellInfoSteps: React.FC = () => {
    return (
        <div className="sell-info-steps">
            <h2 className="sell-info__title">Как это работает?</h2>

            <p className="sell-info__subtitle">Всего четыре шага, и ваш лот продан</p>

            <div className="sell-info-steps-blocks">
                {steps.map((step, index) => (
                    <div className="sell-info-steps-blocks-block" key={`sell-info-steps-blocks-block-${index}`}>
                        <BaseImage src={step.image} alt={step.subtitle} className="sell-info-steps-blocks-block__img" />

                        <div className="sell-info-steps-blocks-block-text">
                            <h3 className="sell-info-steps-blocks-block-text__title">Шаг {index + 1}</h3>

                            <p className="sell-info-steps-blocks-block-text__subtitle">{step.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellInfoSteps;
