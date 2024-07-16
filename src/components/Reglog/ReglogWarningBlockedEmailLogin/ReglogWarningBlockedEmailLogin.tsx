import React from 'react';
import Link from 'next/link';

import { ReglogStateTypesNotLogin } from '@/types/reglog';

const ReglogWarningBlockedEmailLogin: React.FC = () => {
    return (
        <div className="reglog-content-text">
            <h3 className="reglog-content-text__title">Важное уведомление!</h3>

            <p className="reglog-content-text__description">
                При использовании электронных адресов:
                <br />@<b>icloud</b>.com
                <br />@<b>hotmail</b>.com
            </p>

            <p className="reglog-content-text__description">
                Возможны блокировки или задержки в доставке сообщений. Эти сервисы применяют строгие фильтры, которые
                могут влиять на своевременное получение наших уведомлений.
            </p>

            <p className="reglog-content-text__warning">
                ⚠️ Важно: Продолжая использовать эти адреса, мы не можем гарантировать стабильную доставку всех
                сообщений.
            </p>

            <p className="reglog-content-text__message">
                🔁 Рекомендация: Для надежной связи рассмотрите возможность использования другого почтового сервиса.
            </p>

            <div className="reglog-content-text-btns">
                <Link
                    href={`#${ReglogStateTypesNotLogin.REGLOG}`}
                    className="btn reglog-content-text-btns__btn"
                    scroll={false}
                    prefetch={false}
                >
                    Назад
                </Link>

                <Link
                    href={`#${ReglogStateTypesNotLogin.LOGIN}`}
                    className="btn-regular reglog-content-text-btns__btn"
                    scroll={false}
                    prefetch={false}
                >
                    Согласен
                </Link>
            </div>
        </div>
    );
};

export default ReglogWarningBlockedEmailLogin;
