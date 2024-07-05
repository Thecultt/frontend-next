import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface FaqTabItemProps {
    title: string;
    description: string;
}

const FaqTabItem: React.FC<FaqTabItemProps> = ({ title, description }) => {
    const [state, setState] = React.useState(false);

    return (
        <div className="faq-main-content-tab">
            <div className="faq-main-content-tab-top" onClick={() => setState(!state)}>
                <h4 className="faq-main-content-tab-top__title">{title}</h4>

                <div
                    className={getClassNames('faq-main-content-tab-top-icon', {
                        rotate: state,
                    })}
                >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 9.47656L12 15.4766L18 9.47656"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {state ? (
                <p className="faq-main-content-tab__description" dangerouslySetInnerHTML={{ __html: description }}></p>
            ) : null}
        </div>
    );
};

export default FaqTabItem;
