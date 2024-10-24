'use client';

import React from 'react';

export function useDebounce<T>(value: T, t = 500) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), t);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debouncedValue;
}
