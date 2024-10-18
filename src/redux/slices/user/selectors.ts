import { RootState } from '@/redux/store';

export const selectUser = (state: RootState) => state.user.user;
export const selectUserIsLoaded = (state: RootState) => state.user.isLoaded;
export const selectUserFetchIsLoading = (state: RootState) => state.user.fetchIsLoading;
export const selectUserUpdateIsLoading = (state: RootState) => state.user.updateIsLoading;
