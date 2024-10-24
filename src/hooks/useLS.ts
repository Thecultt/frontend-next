'use client';

import { useLocalStorage } from 'usehooks-ts';

import { IStorageExpiredOptions, localStorageService } from '@/services/storage';
import { STORAGE_PREFIX } from '@/constants/keys';

export function useLS<T>(key: string, initialValue: T, expiredOptions?: IStorageExpiredOptions) {
    return useLocalStorage(STORAGE_PREFIX + key, initialValue, {
        serializer: (value) => localStorageService?.serializer(value, expiredOptions) || '',
        deserializer: (raw) => localStorageService?.deserializer(raw, key, initialValue) || ('' as T),
    });
}
