import React from 'react';
import AnimateHeight from 'react-animate-height';

interface ProductInfoTabsItemProps {
    title: string;
    description: string;
}

const ProductInfoTabsItem: React.FC<ProductInfoTabsItemProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="product-content-info-tabs-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="product-content-info-tabs-item-top">
                <h4 className="product-content-info-tabs-item-top__title">{title}</h4>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {!isOpen && (
                        <path
                            d="M12 4.99976V18.9998"
                            stroke="#070707"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    )}
                    <path
                        d="M5 11.9998H19"
                        stroke="#070707"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <AnimateHeight duration={300} height={isOpen ? 'auto' : 1}>
                <p
                    className="product-content-info-tabs-item__description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </AnimateHeight>
        </div>
    );
};

export default ProductInfoTabsItem;
