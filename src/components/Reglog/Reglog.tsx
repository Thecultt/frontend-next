'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { SubmissionError } from 'redux-form';

import { useHash } from '@/hooks/useHash';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { useLS } from '@/hooks/useLS';
import { LS_KEYS } from '@/constants/keys';
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
import {
    checkEmail,
    login,
    recoveryPassword,
    recoveryPasswordConfirm,
    register,
} from '@/redux/slices/auth/asyncActions';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectAuthEmail } from '@/redux/slices/auth/selectors';
import { useAuthUser } from '@/hooks/useAuthUser';

const VISIBLE_BACK_TYPES = [
    ReglogStateTypesNotLogin.LOGIN,
    ReglogStateTypesNotLogin.REGISTER,
    ReglogStateTypesNotLogin.RECOVERY_PASSWORD,
];

const Reglog: React.FC = () => {
    const appDispatch = useAppDispatch();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { hash, changeHash, removeHash } = useHash();

    const { isLoggedIn } = useAuthUser();

    const [type, setType] = React.useState(ReglogStateTypesNotLogin.LOGIN);
    const [state, setState] = React.useState(false);

    const [_lsRedirectReglog, setLsRedirectReglog, removeLsRedirectReglog] = useLS(LS_KEYS.redirectReglog, '');

    const email = useAppSelector(selectAuthEmail);

    const handleClose = () => {
        removeHash();
    };

    const checkEmailNavigate = (type: ReglogStateTypesNotLogin) => {
        changeHash(type);
    };

    const onSubmitCheckEmail = (data: any) => {
        appDispatch(checkEmail({ email: data.email, callback: checkEmailNavigate }));
    };

    const onSubmitRegister = (data: any) => {
        return appDispatch(register(data));
    };

    const onSubmitLogin = (data: any) => {
        if (!email) {
            return;
        }

        return appDispatch(login({ username: email, password: data.password }))
            .unwrap()
            .catch(() => {
                throw new SubmissionError({
                    password: 'Неверный пароль',
                });
            });
    };

    const onSubmitRecoveryPassword = (data: any) => {
        return appDispatch(
            recoveryPassword({
                email: data.email,
                callback: () => {
                    changeHash(ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS);
                },
            }),
        );
    };

    const onSubmitRecoveryPasswordConfirmed = (data: any) => {
        const code = searchParams.get('code');

        if (!code) {
            return;
        }

        return appDispatch(recoveryPasswordConfirm({ password: data.password, code }));
    };

    const popups: Record<ReglogStateTypesNotLogin, React.ReactNode> = {
        [ReglogStateTypesNotLogin.REGLOG]: <ReglogCheckEmail onSubmit={onSubmitCheckEmail} />,
        [ReglogStateTypesNotLogin.LOGIN]: <ReglogLogin onSubmit={onSubmitLogin} />,
        [ReglogStateTypesNotLogin.REGISTER]: <ReglogRegister onSubmit={onSubmitRegister} />,
        [ReglogStateTypesNotLogin.WELCOME]: <ReglogWelcome />,
        [ReglogStateTypesNotLogin.OLD_USER_NEW_PASSWORD]: <ReglogOldUserNewPassword />,
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_REGISTER]: (
            <ReglogWarningBlockedEmail type={ReglogStateTypesNotLogin.REGISTER} />
        ),
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_LOGIN]: (
            <ReglogWarningBlockedEmail type={ReglogStateTypesNotLogin.LOGIN} />
        ),
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD]: <ReglogRecoveryPassword onSubmit={onSubmitRecoveryPassword} />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS]: <ReglogRecoveryPasswordSuccess />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_CONFIRMED]: (
            <ReglogRecoveryPasswordConfirmed onSubmit={onSubmitRecoveryPasswordConfirmed} />
        ),
    };

    React.useEffect(() => {
        const hashType = hash ? (hash as ReglogStateTypesNotLogin) : null;
        const redirectParam = searchParams.get('redirect');

        if (redirectParam) {
            setLsRedirectReglog(redirectParam);
        } else {
            removeLsRedirectReglog();
        }

        if (hashType && Object.values(ReglogStateTypesNotLogin).includes(hashType)) {
            if (state) {
                setTimeout(() => {
                    setType(hashType);
                }, 190);
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
        <Popup maxWidth="520px" isOpen={state} contentKey={type} onClose={handleClose}>
            {VISIBLE_BACK_TYPES.includes(type) && (
                <Link
                    href={`#${ReglogStateTypesNotLogin.REGLOG}`}
                    className="reglog-content-form-back"
                    scroll={false}
                    prefetch={false}
                >
                    <ChevronLeftIcon className="reglog-content-form-back__icon" />
                </Link>
            )}

            {popups[type]}
        </Popup>
    );
};

export default Reglog;
