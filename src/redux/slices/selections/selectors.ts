import { RootState } from '@/redux/store';

export const selectSelectionsIsLoaded = (state: RootState) => state.selections.isLoaded;
export const selectSelectionsItems = (state: RootState) => state.selections.items;
