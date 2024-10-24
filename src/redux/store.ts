import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
