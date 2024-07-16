'use client';

import React from 'react';

export function useDebounce<T>(value: T) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), 500);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debouncedValue;
}
