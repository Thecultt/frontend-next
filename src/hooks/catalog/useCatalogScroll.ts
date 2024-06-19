import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setCatalogScroll } from '@/redux/actions/products';

export const useCatalogScroll = () => {
    const dispatch = useDispatch();
    const { catalogScroll } = useTypedSelector(({ products }) => products);

    React.useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, catalogScroll);
        }, 100);

        const handleScroll = () => {
            const position = window.scrollY || window.pageYOffset || 0;
            dispatch(setCatalogScroll(position));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};
