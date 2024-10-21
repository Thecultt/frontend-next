'use client';

import React from 'react';
import axios from 'axios';

import { useDebounce } from '@/hooks/useDebounce';
import { DADATA_API_KEY, DADATA_API_URL } from '@/constants/env';
import { InputProps } from '@/types/ui';
import { DaDataCountryResponse } from '@/types/dadata';

import { Input } from '../../Input/Input';

interface Props extends Omit<InputProps, 'hints' | 'needHintsFilter' | 'hintsIsLoading'> {}

export const DadataCountryInput: React.FC<Props> = ({ value, ...props }) => {
    const debouncedValue = useDebounce(value);

    const [isLoading, setIsLoading] = React.useState(false);
    const [suggestions, setSuggestions] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (debouncedValue && debouncedValue.length > 2) {
            setIsLoading(true);

            axios
                .post<DaDataCountryResponse>(
                    `${DADATA_API_URL}/country`,
                    { query: debouncedValue },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Token ${DADATA_API_KEY}`,
                        },
                    },
                )
                .then(({ data }) => {
                    setSuggestions(data.suggestions.map((item) => item.value));
                })
                .catch((e) => {
                    console.error('Dadata Country', e);
                    setSuggestions([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setSuggestions([]);
        }
    }, [debouncedValue]);

    return <Input {...props} value={value} hints={suggestions} needFilterHints={false} hintsIsLoading={isLoading} />;
};
