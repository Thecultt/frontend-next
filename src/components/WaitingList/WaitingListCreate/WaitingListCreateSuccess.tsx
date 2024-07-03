import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

const WaitingListCreateSuccess: React.FC = () => {
    return (
        <div className="cabinet-waiting-list-success">
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cabinet-waiting-list-success__icon"
            >
                <g id="Chakbox">
                    <rect x="0.308594" width="47.3846" height="47.3846" rx="23.6923" fill="#F7F4F0" />
                    <rect
                        id="Rectangle"
                        x="6.23047"
                        y="5.92188"
                        width="35.5385"
                        height="35.5385"
                        rx="17.7692"
                        fill="#285141"
                        stroke="#285141"
                        strokeWidth="3.38462"
                    />
                    <path
                        id="Vector"
                        d="M16.1016 23.6948L22.0246 29.6179L31.8964 19.7461"
                        stroke="#F1EDE8"
                        strokeWidth="3.38462"
                        strokeLinecap="round"
                    />
                </g>
            </svg>

            <h2 className="cabinet-waiting-list-success__title">Теперь вы подписаны на эту модель</h2>

            <p className="cabinet-waiting-list-success__description">
                Когда эта модель появится в наличии, мы уведомим вас на указанную почту
            </p>

            <Link href={APP_ROUTE.cabinet.waiting} className="btn cabinet-waiting-list-success__btn">
                Мои подписки
            </Link>
        </div>
    );
};

export default WaitingListCreateSuccess;
