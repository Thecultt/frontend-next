import { GENDER_IDS } from '@/constants/catalog';

import { ICabinetSettingFormInfoValues } from '../types';

export const INITIAL_VALUES: ICabinetSettingFormInfoValues = {
    name: '',
    middlename: '',
    lastname: '',
    dr: '',
    gender: GENDER_IDS.female,
};
