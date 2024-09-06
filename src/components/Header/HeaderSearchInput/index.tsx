'use client';

import React from 'react';

import { SearchIcon } from '@/assets/icons';

interface Props {
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onClear?: () => void;
    value?: string;
}

export const HeaderSearchInput = React.forwardRef<HTMLInputElement, Props>(function (
    { onChange, onKeyDown, onFocus, onClear, className, value },
    ref,
) {
    return (
        <div className={`input-light ${className || ''}`}>
            <SearchIcon className="input-light__icon" />

            <input
                ref={ref}
                type="text"
                className="input-light__field"
                placeholder="Поиск"
                onChange={onChange}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                value={value}
            />

            {!!onClear && !!value && (
                <span className="header-search-box-media-input__clear" onClick={onClear}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            )}
        </div>
    );
});
