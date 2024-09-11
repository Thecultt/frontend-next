'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { setCatalogScroll } from '@/redux/actions/products';

export const useCatalogScroll = () => {
    const timer = React.useRef<ReturnType<typeof setTimeout>>();
    const dispatch = useDispatch();

    React.useEffect(() => {
        const handleScroll = () => {
            clearTimeout(timer.current);

            timer.current = setTimeout(() => {
                const position = window.scrollY || window.pageYOffset || 0;
                dispatch(setCatalogScroll(position));
            }, 200);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};
