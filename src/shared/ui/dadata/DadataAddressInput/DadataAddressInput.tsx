'use client';

import React from 'react';
import axios from 'axios';

import { useDebounce } from '@/hooks/useDebounce';
import { DADATA_API_KEY, DADATA_API_URL } from '@/constants/env';
import { InputProps } from '@/types/ui';
import { DaDataAddressBounds, DaDataAddressResponse, DaDataDictionary } from '@/types/dadata';

import { Input } from '../../Input/Input';

interface Props extends Omit<InputProps, 'hints' | 'needHintsFilter' | 'hintsIsLoading'> {
    filterFromBound?: DaDataAddressBounds;
    filterToBound?: DaDataAddressBounds;
    filterLocations?: DaDataDictionary[];
    filterLocationsBoost?: DaDataDictionary[];
}

export const DadataAddressInput: React.FC<Props> = ({
    value,
    filterFromBound,
    filterToBound,
    filterLocations,
    filterLocationsBoost,
    ...props
}) => {
    const debouncedValue = useDebounce(value);

    const [isLoading, setIsLoading] = React.useState(false);
    const [suggestions, setSuggestions] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (debouncedValue.length > 2) {
            setIsLoading(true);

            axios
                .post<DaDataAddressResponse>(
                    `${DADATA_API_URL}/address`,
                    {
                        query: debouncedValue,
                        locations: filterLocations,
                        locations_boost: filterLocationsBoost,
                        from_bound: {
                            value: filterFromBound,
                        },
                        to_bound: {
                            value: filterToBound,
                        },
                        restrict_value: true,
                    },
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
                    console.error('Dadata Address', e);
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
