import React from 'react';

import { FAQ_THE_CULTT_LINKS } from '@/constants/menu';

const FaqTheCultt: React.FC = () => (
    <div className="faq-main-content-all">
        <div className="faq-main-content-all-col-wrapper">
            {FAQ_THE_CULTT_LINKS.map((column) => (
                <div key={column.title} className="faq-main-content-all-col">
                    <h2 className="faq-main-content-all-col__title">{column.title}</h2>
                    {column.items.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="faq-main-content-all-col__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default FaqTheCultt;
