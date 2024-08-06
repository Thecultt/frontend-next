import { GENDERS, GENDER_IDS } from '@/constants/catalog';

export type GenderType = (typeof GENDERS)[keyof typeof GENDERS];
export type GenderIdsType = (typeof GENDER_IDS)[keyof typeof GENDER_IDS];
