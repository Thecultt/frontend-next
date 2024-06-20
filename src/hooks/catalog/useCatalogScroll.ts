import React from 'react';
import { useDispatch } from 'react-redux';

import { setCatalogScroll } from '@/redux/actions/products';

export const useCatalogScroll = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
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
