import React from 'react';
import { WrappedFieldProps, change } from 'redux-form';
import { getClassNames } from '@/functions/getClassNames';

interface RenderSelectProps extends WrappedFieldProps {
    label: string;
    items: string[];
    disabled?: boolean;
    onChangeCutsom?: (value: string) => void;
}

const RenderSelect: React.FC<RenderSelectProps> = ({
    label,
    items,
    disabled,
    input,
    meta: { form, dispatch, initial, touched, error },
    onChangeCutsom,
}) => {
    const [state, setState] = React.useState<boolean>(false);
    const [currentItem, setCurrentItem] = React.useState<string>('');

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

    const toggleCurrentItem = (item: string) => {
        setCurrentItem(item);

        setTimeout(() => {
            setState(false);
        }, 10);
    };

    React.useEffect(() => {
        if (initial && currentItem === '') {
            setCurrentItem(initial);
        }
    }, [initial]);

    // React.useEffect(() => {
    // 	if (input.value === "") {
    // 		setCurrentItem("");
    // 	}
    // }, [input.value])

    React.useEffect(() => {
        dispatch(change(form, input.name, currentItem));

        if (onChangeCutsom) onChangeCutsom(currentItem);
    }, [currentItem]);

    return (
        <div className="select-wrapper" ref={SelectRef}>
            <div
                className={getClassNames('select', {
                    disabled: !!disabled,
                    error: !!touched && !!error,
                    active: state,
                })}
                onClick={() => setState(!state)}
            >
                <div className="select-current-item">
                    <div className="select-current-item-info">
                        <p className="select-current-item-info__text">
                            {currentItem !== '' ? currentItem : <span>{label}</span>}
                        </p>
                    </div>

                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons">
                            <path
                                id="Vector"
                                d="M3 6L10 13L17 6"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </div>
            </div>

            <div
                className={getClassNames('select-list', {
                    active: state,
                })}
            >
                <div className="select-list-items-wrapper">
                    {items.map((item, index) => (
                        <div
                            className={getClassNames('select-list-item', {
                                active: currentItem === item,
                            })}
                            key={`select-list__item-${index}`}
                            onClick={() => toggleCurrentItem(item)}
                        >
                            <div className="select-list-item-info">
                                <p className="select-list-item-info__text">{item}</p>
                            </div>

                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Icons">
                                    <path
                                        id="Vector"
                                        d="M20 6L9 17L4 12"
                                        stroke="#285141"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                    ))}
                </div>
            </div>

            {touched && error && <span className="select__error">{error}</span>}
        </div>
    );
};

export default RenderSelect;
