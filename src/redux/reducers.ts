import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './slices/auth/slice';
import selections from './slices/selections/slice';
import user from './slices/user/slice';

import products_filters from './reducers/products_filters';
import products from './reducers/products';
import cart from './reducers/cart';
import order from './reducers/order';
import favorites from './reducers/favorites';
import waiting from './reducers/waiting';
import header from './reducers/header';
import cabinet_sell from './reducers/cabinet_sell';
import brands from './reducers/brands';
import history_orders from './reducers/history_orders';
import vipservice from './reducers/vipservice';
import subscribe_email from './reducers/subscribe_email';
import public_favorites from './reducers/public_favorites';
import notifications_server from './reducers/notifications_server';
import concierge from './reducers/concierge';
import cinema_artistic from './reducers/cinema_artistic';
import popup_info from './reducers/popup_info';

export const rootReducer = combineReducers({
    form: formReducer,
    auth,
    products_filters,
    products,
    cart,
    order,
    favorites,
    waiting,
    header,
    cabinet_sell,
    user,
    brands,
    history_orders,
    vipservice,
    subscribe_email,
    public_favorites,
    notifications_server,
    concierge,
    selections,
    cinema_artistic,
    popup_info,
});

export type RootState = ReturnType<typeof rootReducer>;
