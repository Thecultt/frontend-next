'use client';

import { useSessionStorage } from 'usehooks-ts';

import { IStorageExpiredOptions, sessionStorageService } from '@/services/storage';
import { STORAGE_PREFIX } from '@/constants/keys';

export function useSS<T>(key: string, initialValue: T, expiredOptions?: IStorageExpiredOptions) {
    return useSessionStorage(STORAGE_PREFIX + key, initialValue, {
        serializer: (value) => sessionStorageService?.serializer(value, expiredOptions) || '',
        deserializer: (raw) => sessionStorageService?.deserializer(raw, key, initialValue) || ('' as T),
    });
}
