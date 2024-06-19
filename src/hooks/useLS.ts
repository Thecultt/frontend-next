'use client';

import { useLocalStorage } from 'usehooks-ts';

import { IStorageExpiredOptions, localStorageService } from '@/services/storage';

export function useLS<T>(key: string, initialValue: T, expiredOptions?: IStorageExpiredOptions) {
    return useLocalStorage('tc_' + key, initialValue, {
        serializer: (value) => localStorageService?.serializer(value, expiredOptions) || '',
        deserializer: (raw) => localStorageService?.deserializer(raw, key, initialValue) || ('' as T),
    });
}
