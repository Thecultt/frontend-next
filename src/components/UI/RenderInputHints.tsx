'use client';

import React from 'react';
import { WrappedFieldProps, change } from 'redux-form';
import { getClassNames } from '@/functions/getClassNames';

interface RenderInputHintsProps extends WrappedFieldProps {
    label: string;
    hints: {
        title: string;
        value: string;
    }[];
    disabled?: boolean;
    bgWhite?: boolean;
    ifFreeField?: boolean;
    onChangeCustom?: (query: string) => void;
    onSaveValue?: (value: { title: string; value: string }) => void;
}

const RenderInputHints: React.FC<RenderInputHintsProps> = ({
    label,
    input,
    meta: { touched, error, form, dispatch },
    hints,
    disabled,
    bgWhite,
    ifFreeField,
    onChangeCustom,
    onSaveValue,
}) => {
    const [value, setValue] = React.useState<{ title: string; value: string }>({
        title: '',
        value: '',
    });

    const [state, setState] = React.useState<boolean>(false);

    const SelectRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', toggleSelect);
        document.addEventListener('touchstart', toggleSelect);

        return () => {
            document.removeEventListener('mousedown', toggleSelect);
            document.removeEventListener('touchstart', toggleSelect);
        };
    }, [SelectRef]);

    const toggleSelect = (e: any) => {
        if (SelectRef.current && !SelectRef.current.contains(e.target)) {
            setState(false);
        }
    };

    const toggleCurrentItem = (item: { title: string; value: string }) => {
        dispatch(change(form, input.name, item.title));

        onChangeCustom?.(item.title);

        setValue(item);

        setState(false);
    };

    const onChange = (e: any) => {
        dispatch(change(form, input.name, e.currentTarget.value));

        onChangeCustom?.(e.currentTarget.value);

        if (ifFreeField) {
            setValue({
                title: e.currentTarget.value,
                value: e.currentTarget.value,
            });
        } else if (hints.length === 1 && hints[0] && hints[0].title === e.currentTarget.value) {
            setValue({
                title: e.currentTarget.value,
                value: e.currentTarget.value,
            });
        }
    };

    React.useEffect(() => {
        if (onSaveValue) {
            onSaveValue(value);
        }
    }, [value]);

    React.useEffect(() => {
        if (input.value) {
            setValue({ title: input.value, value: input.value });
        }
    }, [input.value]);

    return (
        <div
            className={getClassNames('input-wrapper', {
                disabled: !!disabled,
            })}
            ref={SelectRef}
        >
            <div
                className={getClassNames('input', {
                    error: !state && !!touched && !!error,
                    bgWhite: !!bgWhite,
                })}
                onClick={() => setState(true)}
                onBlur={() => dispatch(change(form, input.name, value.title))}
            >
                <input
                    {...input}
                    className="input__field"
                    id={input.name}
                    placeholder={label}
                    autoComplete="off"
                    onChange={onChange}
                />
            </div>

            <div
                className={getClassNames('input-list', {
                    active: !!hints.length && state,
                })}
            >
                <div className="input-list-items-wrapper">
                    {hints.map((item, index) => (
                        <p
                            className="input-list__item"
                            key={`input-list__item-${index}`}
                            onClick={() => toggleCurrentItem(item)}
                        >
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>

            {!state && touched && error ? <span className="input__error">{error}</span> : null}
        </div>
    );
};

export default RenderInputHints;
