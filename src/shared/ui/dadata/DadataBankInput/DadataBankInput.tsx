'use client';

import React from 'react';
import axios from 'axios';

import { useDebounce } from '@/hooks/useDebounce';
import { DADATA_API_KEY, DADATA_API_URL } from '@/constants/env';
import { InputProps } from '@/types/ui';
import { DaDataBankResponse, DaDataBankStatus, DaDataBankType, DaDataDictionary } from '@/types/dadata';

import { Input } from '../../Input/Input';

interface IBankSuggestion {
    name: string;
    bic: string;
}

interface Props extends Omit<InputProps, 'hints' | 'needHintsFilter' | 'hintsIsLoading'> {
    filterStatus?: DaDataBankStatus[];
    filterType?: DaDataBankType[];
    filterLocations?: DaDataDictionary[];
    filterLocationsBoost?: DaDataDictionary[];
}

export const DadataBankInput: React.FC<Props> = ({
    value,
    filterStatus = ['ACTIVE'],
    filterType = ['BANK'],
    filterLocations,
    filterLocationsBoost,
    ...props
}) => {
    const debouncedValue = useDebounce(value);

    const [isLoading, setIsLoading] = React.useState(false);
    const [suggestions, setSuggestions] = React.useState<IBankSuggestion[]>([]);

    React.useEffect(() => {
        if (debouncedValue.length > 2) {
            setIsLoading(true);

            axios
                .post<DaDataBankResponse>(
                    `${DADATA_API_URL}/bank`,
                    {
                        query: debouncedValue,
                        type: filterType,
                        status: filterStatus,
                        locations: filterLocations,
                        locations_boost: filterLocationsBoost,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Token ${DADATA_API_KEY}`,
                        },
                    },
                )
                .then(({ data }) => {
                    setSuggestions(
                        data.suggestions.map((item) => ({
                            name: item.value,
                            bic: item.data.bic,
                        })),
                    );
                })
                .catch((e) => {
                    console.error('Dadata Bank', e);
                    setSuggestions([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setSuggestions([]);
        }
    }, [debouncedValue]);

    return (
        <Input
            {...props}
            value={value}
            hints={suggestions.map((item) => ({ label: item.name, value: item.bic }))}
            // TODO option ui
            // renderHint={(hint) => ()}
            needFilterHints={false}
            hintsIsLoading={isLoading}
        />
    );
};
