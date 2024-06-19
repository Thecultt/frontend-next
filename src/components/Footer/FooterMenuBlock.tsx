import React from 'react';
import AnimateHeight from 'react-animate-height';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';
import { getClassNames } from '@/functions/getClassNames';

interface FooterMenuBlockProps {
    title: string;
    children: React.ReactNode;
}

const FooterMenuBlock: React.FC<FooterMenuBlockProps> = ({ title, children }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);
    const [isOpenMediaTab, setIsOpenMediaTab] = React.useState(false);

    return (
        <>
            {!isMobile ? (
                <div className="footer-block-menu-block">
                    <h5 className="footer-block-menu-block__title">{title}</h5>

                    {children}
                </div>
            ) : (
                <div className="footer-block-menu-block-media">
                    <div
                        className="footer-block-menu-block-media-top"
                        onClick={() => setIsOpenMediaTab(!isOpenMediaTab)}
                    >
                        <h5 className="footer-block-menu-block-media-top__title">{title}</h5>

                        <div
                            className={getClassNames('footer-block-menu-block-media-top-icon', {
                                open: isOpenMediaTab,
                            })}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <AnimateHeight duration={300} height={isOpenMediaTab ? 'auto' : 1}>
                        <div className="footer-block-menu-block-media-bottom">{children}</div>
                    </AnimateHeight>
                </div>
            )}
        </>
    );
};

export default FooterMenuBlock;
