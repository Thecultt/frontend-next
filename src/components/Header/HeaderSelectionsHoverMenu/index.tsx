'use client';

import React from 'react';
import Link from 'next/link';

import { Spinner } from '@/shared/ui';
import { getClassNames } from '@/functions/getClassNames';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';

import defaultImage from '@/assets/images/header/header-selection-default-image.jpg';

interface Props {
    isVisible?: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const HeaderSelectionsHoverMenu: React.FC<Props> = ({ onOpen, onClose, isVisible = false }) => {
    const timer = React.useRef<ReturnType<typeof setTimeout>>();
    const [selectedId, setSelectedId] = React.useState(-1);

    const { items, isLoaded } = useTypedSelector(({ selections }) => selections);

    const firstColItems = items.slice(0, 5);
    const secondColItems = items.slice(5, 10);

    const selectedItem = items.find((item) => item.id === selectedId);
    const image = selectedItem?.background_image || defaultImage.src;

    const selectItem = (id: number) => () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        setSelectedId(id);
    };

    const clearItem = () => {
        timer.current = setTimeout(() => {
            setSelectedId(-1);
        }, 200);
    };

    return (
        <div
            className={getClassNames('header-hover-menu-wrapper-wrapper', {
                active: isVisible,
            })}
        >
            <div
                className={getClassNames('header-hover-menu-wrapper', {
                    active: isVisible,
                })}
                onMouseOver={onOpen}
                onMouseOut={onClose}
            >
                <nav className="header-hover-menu">
                    {isLoaded ? (
                        <>
                            <div className="header-hover-menu-list-grid">
                                <div className="header-hover-menu-list-grid-item">
                                    {firstColItems.map(({ id, title }) => (
                                        <Link
                                            key={id}
                                            className="header-hover-menu-list-coll__item"
                                            href={getCatalogFiltersUrl({
                                                selection: id.toString(),
                                            })}
                                            onClick={onClose}
                                            onMouseOver={selectItem(id)}
                                            onMouseOut={clearItem}
                                        >
                                            {title || '-'}
                                        </Link>
                                    ))}
                                </div>
                                <div className="header-hover-menu-list-grid-item">
                                    {secondColItems.map(({ id, title }) => (
                                        <Link
                                            key={id}
                                            className="header-hover-menu-list-coll__item"
                                            href={getCatalogFiltersUrl({
                                                selection: id.toString(),
                                            })}
                                            onClick={onClose}
                                            onMouseOver={selectItem(id)}
                                            onMouseOut={clearItem}
                                        >
                                            {title || '-'}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="header-hover-menu-image" style={{ backgroundImage: `url("${image}")` }} />
                        </>
                    ) : (
                        <Spinner />
                    )}
                </nav>
            </div>
        </div>
    );
};
