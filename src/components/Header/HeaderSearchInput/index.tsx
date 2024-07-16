import React from 'react';

interface Props {
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onClear?: () => void;
    value?: string;
}

export const HeaderSearchInput = React.forwardRef<HTMLInputElement, Props>(function MyInput(
    { onChange, onKeyDown, onFocus, onClear, className, value },
    ref,
) {
    return (
        <div className={`input-light ${className || ''}`}>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.16667 16.3177C12.8486 16.3177 15.8333 13.3329 15.8333 9.65104C15.8333 5.96914 12.8486 2.98438 9.16667 2.98438C5.48477 2.98438 2.5 5.96914 2.5 9.65104C2.5 13.3329 5.48477 16.3177 9.16667 16.3177Z"
                    stroke="#838383"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.5 17.9844L13.875 14.3594"
                    stroke="#838383"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

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
