'use client';

import React from 'react';

import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { Button } from '@/shared/ui';
import { useHash } from '@/hooks/useHash';

interface Props {
    type: ReglogStateTypesNotLogin.LOGIN | ReglogStateTypesNotLogin.REGISTER;
}

const ReglogWarningBlockedEmail: React.FC<Props> = ({ type }) => {
    const { changeHash } = useHash();

    return (
        <div className="reglog-content-text">
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
                <div className="reglog-content-text-btns__btn">
                    <Button label="Назад" onClick={() => changeHash(ReglogStateTypesNotLogin.REGLOG)} wide />
                </div>
                <div className="reglog-content-text-btns__btn">
                    <Button label="Согласен" theme="light" onClick={() => changeHash(type)} wide />
                </div>
            </div>
        </div>
    );
};

export default ReglogWarningBlockedEmail;
