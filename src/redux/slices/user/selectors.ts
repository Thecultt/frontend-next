import { RootState } from '@/redux/store';

export const selectUserIsLoaded = (state: RootState) => state.user.isLoaded;
export const selectUser = (state: RootState) => state.user.user;
