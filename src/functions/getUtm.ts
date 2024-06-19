import { UTM_KEYS, LS_KEYS } from '@/constants/keys';
import { localStorageService } from '@/services/storage';

type UtmKeys = keyof typeof UTM_KEYS;
type UtmStorage = Partial<Record<(typeof UTM_KEYS)[UtmKeys], string>>;

export const getUtm = () => localStorageService?.getItem<UtmStorage>(LS_KEYS.utm, {});
