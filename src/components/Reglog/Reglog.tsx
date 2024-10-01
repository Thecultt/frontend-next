'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useHash } from '@/hooks/useHash';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { useLS } from '@/hooks/useLS';
import { LS_KEYS } from '@/constants/keys';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { sendCheckEmail } from '@/redux/actions/check_email';
import { sendRegister } from '@/redux/actions/register';
import { sendLogin } from '@/redux/actions/login';
import { sendRecoveryPassword, sendRecoveryPasswordConfirmed } from '@/redux/actions/recovery_password';
import {
    Popup,
    ReglogCheckEmail,
    ReglogLogin,
    ReglogRegister,
    ReglogWelcome,
    ReglogOldUserNewPassword,
    ReglogWarningBlockedEmailRegister,
    ReglogWarningBlockedEmailLogin,
    ReglogRecoveryPassword,
    ReglogRecoveryPasswordSuccess,
    ReglogRecoveryPasswordConfirmed,
} from '@/components';

const Reglog: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { hash, changeHash, removeHash } = useHash();

    const [type, setType] = React.useState(ReglogStateTypesNotLogin.LOGIN);
    const [state, setState] = React.useState(false);
    const [isChange, setIsChange] = React.useState(false);

    const [_lsEmail, setLsEmail] = useLS(LS_KEYS.email, '');
    const [_lsRedirectReglog, setLsRedirectReglog, removeLsRedirectReglog] = useLS(LS_KEYS.redirectReglog, '');

    const { email } = useTypedSelector(({ check_email }) => check_email);

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
                setIsChange(true);

                setTimeout(() => {
                    setType(hashType);
                    setIsChange(false);
                }, 190);
            } else {
                setState(true);
                setIsChange(false);
                setType(hashType);
            }
        } else {
            setState(false);
        }
    }, [hash, pathname]);

    const closeFunc = () => {
        setState(false);
        removeHash();
    };

    const checkEmailNavigate = (type: ReglogStateTypesNotLogin) => {
        changeHash(type);
    };

    const onSubmitCheckEmail = (data: any) => {
        setLsEmail(data.email as string);
        dispatch(sendCheckEmail(data.email, checkEmailNavigate) as any);
    };

    const onSubmitRegister = (data: any) => {
        return dispatch(sendRegister(data) as any);
    };

    const onSubmitLogin = (data: any) => {
        return dispatch(sendLogin({ username: email, password: data.password }) as any);
    };

    const onSubmitRecoveryPassword = (data: any) => {
        return dispatch(sendRecoveryPassword(data.email, true, router) as any);
    };

    const onSubmitRecoveryPasswordConfirmed = (data: any) => {
        const code = searchParams.get('code') as string;
        return dispatch(sendRecoveryPasswordConfirmed(data.password, code) as any);
    };

    const popups: Record<ReglogStateTypesNotLogin, React.ReactNode> = {
        [ReglogStateTypesNotLogin.REGLOG]: <ReglogCheckEmail onSubmit={onSubmitCheckEmail} />,
        [ReglogStateTypesNotLogin.LOGIN]: <ReglogLogin onSubmit={onSubmitLogin} />,
        [ReglogStateTypesNotLogin.REGISTER]: <ReglogRegister onSubmit={onSubmitRegister} />,
        [ReglogStateTypesNotLogin.WELCOME]: <ReglogWelcome />,
        [ReglogStateTypesNotLogin.OLD_USER_NEW_PASSWORD]: <ReglogOldUserNewPassword />,
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_REGISTER]: <ReglogWarningBlockedEmailRegister />,
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_LOGIN]: <ReglogWarningBlockedEmailLogin />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD]: <ReglogRecoveryPassword onSubmit={onSubmitRecoveryPassword} />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS]: <ReglogRecoveryPasswordSuccess />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_CONFIRMED]: (
            <ReglogRecoveryPasswordConfirmed onSubmit={onSubmitRecoveryPasswordConfirmed} />
        ),
    };

    const visibleBackTypes = [
        ReglogStateTypesNotLogin.LOGIN,
        ReglogStateTypesNotLogin.REGISTER,
        ReglogStateTypesNotLogin.RECOVERY_PASSWORD,
    ];

    return (
        <Popup state={state} setState={closeFunc} stateContent={!isChange}>
            {visibleBackTypes.includes(type) && (
                <Link
                    href={`#${ReglogStateTypesNotLogin.REGLOG}`}
                    className="reglog-content-form-back"
                    scroll={false}
                    prefetch={false}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            )}

            {popups[type]}
        </Popup>
    );
};

export default Reglog;
