'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { useHash } from '@/hooks/useHash';
import { useLS } from '@/hooks/useLS';
import { useAuthUser } from '@/hooks/useAuthUser';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { LS_KEYS, SEARCH_PARAMS_KEYS } from '@/constants/keys';
import { APP_ROUTE } from '@/constants/routes';
import { CONTACTS } from '@/constants/contacts';
import { Popup } from '@/shared/ui';
import { ChevronLeftIcon } from '@/assets/icons';
import {
    ReglogCheckEmail,
    ReglogLogin,
    ReglogRegister,
    ReglogWelcome,
    ReglogOldUserNewPassword,
    ReglogRecoveryPassword,
    ReglogRecoveryPasswordSuccess,
    ReglogRecoveryPasswordConfirmed,
    ReglogWarningBlockedEmail,
} from '@/components';

const VISIBLE_BACK_TYPES = [
    ReglogStateTypesNotLogin.LOGIN,
    ReglogStateTypesNotLogin.REGISTER,
    ReglogStateTypesNotLogin.RECOVERY_PASSWORD,
];

const Reglog: React.FC = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { hash, removeHash } = useHash();

    const { isLoggedIn } = useAuthUser();

    const [type, setType] = React.useState(ReglogStateTypesNotLogin.LOGIN);
    const [state, setState] = React.useState(false);

    const [lsRedirectReglog, setLsRedirectReglog, removeLsRedirectReglog] = useLS(LS_KEYS.redirectReglog, '');

    const isOrder = lsRedirectReglog === APP_ROUTE.order || pathname === APP_ROUTE.order;

    const handleClose = () => {
        removeHash();
    };

    const popups: Record<ReglogStateTypesNotLogin, React.ReactNode> = {
        [ReglogStateTypesNotLogin.REGLOG]: <ReglogCheckEmail />,
        [ReglogStateTypesNotLogin.LOGIN]: <ReglogLogin />,
        [ReglogStateTypesNotLogin.REGISTER]: <ReglogRegister />,
        [ReglogStateTypesNotLogin.WELCOME]: <ReglogWelcome />,
        [ReglogStateTypesNotLogin.OLD_USER_NEW_PASSWORD]: <ReglogOldUserNewPassword />,
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_REGISTER]: (
            <ReglogWarningBlockedEmail type={ReglogStateTypesNotLogin.REGISTER} />
        ),
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_LOGIN]: (
            <ReglogWarningBlockedEmail type={ReglogStateTypesNotLogin.LOGIN} />
        ),
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD]: <ReglogRecoveryPassword />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS]: <ReglogRecoveryPasswordSuccess />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_CONFIRMED]: <ReglogRecoveryPasswordConfirmed />,
    };

    const titles: Record<ReglogStateTypesNotLogin, { title?: string; subtitle?: React.ReactNode } | undefined> = {
        [ReglogStateTypesNotLogin.REGLOG]: {
            title: isOrder ? 'Войдите в аккаунт, чтобы продолжить' : 'Вход/Регистрация',
            subtitle: isOrder
                ? 'Для завершения процедуры оформления заказа необходима авторизация или регистрация на сайте.'
                : undefined,
        },
        [ReglogStateTypesNotLogin.LOGIN]: { title: 'Вход' },
        [ReglogStateTypesNotLogin.REGISTER]: {
            title: 'Завершить регистрацию',
            subtitle:
                'Аккаунт, зарегистрированный на указанную почту, не найден. Завершите регистрацию для использования платформы.',
        },
        [ReglogStateTypesNotLogin.WELCOME]: undefined,
        [ReglogStateTypesNotLogin.OLD_USER_NEW_PASSWORD]: {
            title: 'Обновите пароль от аккаунта',
            subtitle:
                'На указанную почту отправлено письмо для сброса пароля. Задайте новый пароль для обеспечения безопасности ваших данных на новом сайте THE CULTT.',
        },
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_REGISTER]: { title: 'Важное уведомление!' },
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_LOGIN]: { title: 'Важное уведомление!' },
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD]: {
            title: 'Забыли пароль?',
            subtitle:
                'Подтвердите адрес эл. почты, связанный с вашим аккаунтом, на который мы вышлем ссылку для изменения пароля.',
        },
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS]: {
            title: 'Ссылка для восстановления пароля отправлена на указанную почту',
            subtitle: (
                <>
                    В случае возникновения проблем с авторизацией на сайте, напишите нам в поддержку в телеграмм{' '}
                    <a href={CONTACTS.tgItHelp} target="_blank" rel="noreferrer">
                        @thecultt_help_it
                    </a>
                </>
            ),
        },
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_CONFIRMED]: { title: 'Забыли пароль?' },
    };

    React.useEffect(() => {
        const hashType = hash ? (hash as ReglogStateTypesNotLogin) : null;
        const redirectParam = searchParams.get(SEARCH_PARAMS_KEYS.redirect);

        if (redirectParam) {
            setLsRedirectReglog(redirectParam);
        } else {
            removeLsRedirectReglog();
        }

        if (hashType && Object.values(ReglogStateTypesNotLogin).includes(hashType)) {
            if (state) {
                setType(hashType);
            } else {
                setState(true);
                setType(hashType);
            }
        } else {
            setState(false);
        }
    }, [hash, pathname]);

    if (isLoggedIn && type !== ReglogStateTypesNotLogin.WELCOME) {
        return null;
    }

    return (
        <Popup
            maxWidth="520px"
            contentKey={type}
            beforeTitle={
                VISIBLE_BACK_TYPES.includes(type) ? (
                    <Link
                        href={`#${ReglogStateTypesNotLogin.REGLOG}`}
                        className="reglog-content-form-back"
                        scroll={false}
                        prefetch={false}
                    >
                        <ChevronLeftIcon className="reglog-content-form-back__icon" />
                    </Link>
                ) : null
            }
            title={titles[type]?.title}
            subtitle={titles[type]?.subtitle}
            isOpen={state}
            onClose={handleClose}
        >
            {popups[type]}
        </Popup>
    );
};

export default Reglog;
