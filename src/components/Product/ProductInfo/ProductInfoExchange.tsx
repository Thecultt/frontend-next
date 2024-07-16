import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

const ProductInfoExchange: React.FC = () => {
    return (
        <Link href={APP_ROUTE.exchange} className="product-content-info-exchange">
            <div className="product-content-info-exchange-text">
                <h4 className="product-content-info-exchange-text__title">
                    Обмен
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.10938 1.05371V4.38792H4.44359"
                            stroke="#285141"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.3381 9.94749V6.61328H10.0039"
                            stroke="#285141"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11.94 3.8329C11.6582 3.03646 11.1792 2.32439 10.5477 1.76314C9.91625 1.20189 9.1529 0.809748 8.32889 0.623306C7.50489 0.436864 6.64708 0.462199 5.83551 0.696945C5.02395 0.931692 4.28507 1.3682 3.68783 1.96574L1.10938 4.3886M13.3348 6.6114L10.7564 9.03426C10.1591 9.6318 9.42024 10.0683 8.60868 10.3031C7.79711 10.5378 6.9393 10.5631 6.11529 10.3767C5.29129 10.1903 4.52794 9.79811 3.89648 9.23686C3.26502 8.67561 2.78602 7.96354 2.50419 7.16711"
                            stroke="#285141"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </h4>
                <p className="product-content-info-exchange-text__subtitle">Обменяйте свой товар на данную модель</p>
            </div>
            <div className="product-content-info-exchange-arrow">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Icon" d="M1 13L7 7L1 1" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </Link>
    );
};

export default ProductInfoExchange;
