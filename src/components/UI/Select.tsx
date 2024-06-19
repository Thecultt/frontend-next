import React from 'react';
import { getClassNames } from '@/functions/getClassNames';

interface Item {
    title: string;
    image?: string;
}

interface Props {
    label: string;
    items: Item[];

    onChange?: (value: Item) => void;
}

const Select: React.FC<Props> = ({ label, items, onChange }) => {
    const [state, setState] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState<Item>(items[0]);

    const SelectRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', toggleSelect);
        document.addEventListener('touchstart', toggleSelect);

        return () => {
            document.removeEventListener('mousedown', toggleSelect);
            document.removeEventListener('touchstart', toggleSelect);
        };
    }, [SelectRef]);

    const toggleSelect = (e: TouchEvent | MouseEvent) => {
        if (SelectRef.current && !SelectRef.current.contains(e.target as Node)) {
            setState(false);
        }
    };

    const toggleCurrentItem = (item: Item) => {
        setCurrentItem(item);

        onChange?.(item);

        setTimeout(() => {
            setState(false);
        }, 300);
    };

    return (
        <div className="select" ref={SelectRef} onClick={() => setState(true)}>
            <div className="select-current-item">
                <div className="select-current-item-info">
                    {currentItem.image && (
                        <div
                            className="select-current-item-info-image"
                            style={{ backgroundImage: `url('${currentItem.image}')` }}
                        />
                    )}

                    <p className="select-current-item-info__text">
                        {currentItem.title !== '' ? currentItem.title : <span>{label}</span>}
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

            <div
                className={getClassNames('select-list', {
                    active: state,
                })}
            >
                <div className="select-list-items-wrapper">
                    {items.map((item, index) => (
                        <div
                            className={getClassNames('select-list-item', {
                                active: currentItem.title === item.title,
                            })}
                            key={`select-list__item-${index}`}
                            onClick={() => toggleCurrentItem(item)}
                        >
                            <div className="select-list-item-info">
                                {item.image && (
                                    <div
                                        className="select-list-item-info-image"
                                        style={{ backgroundImage: `url('${item.image}')` }}
                                    />
                                )}

                                <p className="select-list-item-info__text">{item.title}</p>
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
        </div>
    );
};

export default Select;
