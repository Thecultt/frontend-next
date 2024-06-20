import React from 'react';
import AnimateHeight from 'react-animate-height';

interface ProductInfoTabsItemProps {
    title: string;
    description: string;
}

const ProductInfoTabsItem: React.FC<ProductInfoTabsItemProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className="product-content-info-tabs-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="product-content-info-tabs-item-top">
                <h4 className="product-content-info-tabs-item-top__title">{title}</h4>

                {isOpen ? (
                    <svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5H11" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75 4.25V14.75" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.5 9.5H15" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>

            <AnimateHeight duration={300} height={isOpen ? 'auto' : 1}>
                <p
                    className="product-content-info-tabs-item__description"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>
            </AnimateHeight>
        </div>
    );
};

export default ProductInfoTabsItem;
