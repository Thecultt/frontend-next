import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface CatalogFiltersBlockWrapperProps {
    title: string;
    children: React.ReactNode;
    disabled?: boolean;
    infoMessage?: string;
    defaultVisible?: boolean;
}

const CatalogFiltersBlockWrapper: React.FC<CatalogFiltersBlockWrapperProps> = ({
    title,
    children,
    disabled,
    infoMessage,
    defaultVisible = false,
}) => {
    const [isAllVisible, setIsAllVisible] = React.useState<boolean>(false);

    const ObjectsFiltersBlockWrapperRef = React.useRef<HTMLDivElement>(null);

    const toggleIsAllVisibleOnClick = () => {
        setIsAllVisible(!isAllVisible);
    };

    React.useEffect(() => {
        if (disabled) setIsAllVisible(false);
    }, [disabled]);

    React.useEffect(() => {
        if (defaultVisible) {
            setIsAllVisible(true);
        }
    }, [defaultVisible]);

    return (
        <div
            className={getClassNames('catalog-filters-block', {
                disabled: !!disabled,
            })}
            ref={ObjectsFiltersBlockWrapperRef}
        >
            <div className="catalog-filters-block-top" onClick={toggleIsAllVisibleOnClick}>
                <p className="catalog-filters-block-top__title">
                    {title}

                    {infoMessage ? (
                        <>
                            <svg
                                width="17"
                                height="18"
                                viewBox="0 0 17 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.49999 11.8346V9.0013M8.49999 6.16797H8.50707M15.5833 9.0013C15.5833 12.9133 12.412 16.0846 8.49999 16.0846C4.58797 16.0846 1.41666 12.9133 1.41666 9.0013C1.41666 5.08928 4.58797 1.91797 8.49999 1.91797C12.412 1.91797 15.5833 5.08928 15.5833 9.0013Z"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span className="message-info-wrapper">
                                <span
                                    className="message-info"
                                    dangerouslySetInnerHTML={{
                                        __html: infoMessage,
                                    }}
                                ></span>
                            </span>
                        </>
                    ) : null}
                </p>

                {isAllVisible ? (
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 15.5L11 8.5L4 15.5"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5.08398V17.9173" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.58203 11.5H17.4154" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>

            {isAllVisible ? <div className="catalog-filters-block-content">{children}</div> : null}
        </div>
    );
};

export default CatalogFiltersBlockWrapper;
