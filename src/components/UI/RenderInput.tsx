import React from 'react';
import { getClassNames } from '@/functions/getClassNames';

const RenderInput: React.FC<any> = ({
    label,
    type,
    input,
    meta: { touched, error },
    bgWhite,
    white,
    disabled,
    ...props
}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div
            className={getClassNames('input-wrapper', {
                disabled: !!disabled,
            })}
        >
            {white && <span className="input__title">{label}</span>}

            <div
                className={getClassNames('input', {
                    password: type === 'password',
                    error: !!touched && !!error,
                    bgWhite: !!bgWhite,
                    white: !!white,
                })}
            >
                <input
                    {...input}
                    type={isVisible ? 'text' : type}
                    className="input__field"
                    id={input.name}
                    placeholder={label}
                    disabled={disabled}
                    {...props}
                />

                {type === 'password' ? (
                    <div className="input-password" onClick={toggleVisible}>
                        {isVisible ? (
                            <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1670_8164)">
                                    <path
                                        d="M1.20703 8.50065C1.20703 8.50065 4.04036 2.83398 8.9987 2.83398C13.957 2.83398 16.7904 8.50065 16.7904 8.50065C16.7904 8.50065 13.957 14.1673 8.9987 14.1673C4.04036 14.1673 1.20703 8.50065 1.20703 8.50065Z"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9 10.625C10.1736 10.625 11.125 9.6736 11.125 8.5C11.125 7.32639 10.1736 6.375 9 6.375C7.82639 6.375 6.875 7.32639 6.875 8.5C6.875 9.6736 7.82639 10.625 9 10.625Z"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1670_8164">
                                        <rect width="17" height="17" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1670_25672)">
                                    <path
                                        d="M13.2062 12.7082C11.9954 13.6311 10.521 14.1424 8.9987 14.1673C4.04036 14.1673 1.20703 8.50067 1.20703 8.50067C2.08812 6.85868 3.31017 5.4241 4.7912 4.29317M7.5112 3.004C7.99877 2.88988 8.49795 2.83283 8.9987 2.834C13.957 2.834 16.7904 8.50067 16.7904 8.50067C16.3604 9.30506 15.8476 10.0624 15.2604 10.7603M10.5004 10.0023C10.3058 10.2111 10.0712 10.3786 9.81056 10.4947C9.54989 10.6109 9.2685 10.6733 8.98318 10.6783C8.69785 10.6834 8.41444 10.6309 8.14984 10.524C7.88524 10.4171 7.64488 10.2581 7.44309 10.0563C7.2413 9.85449 7.08223 9.61413 6.97535 9.34953C6.86847 9.08493 6.81599 8.80151 6.82102 8.51619C6.82606 8.23086 6.88851 7.94948 7.00465 7.68881C7.1208 7.42815 7.28825 7.19355 7.49703 6.999"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.20703 0.708984L16.7904 16.2923"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1670_25672">
                                        <rect width="17" height="17" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        )}
                    </div>
                ) : null}
            </div>

            {touched && error ? <span className="input__error">{error}</span> : null}
        </div>
    );
};

export default RenderInput;
