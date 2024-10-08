import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import check_email from './reducers/check_email';
import register from './reducers/register';
import login from './reducers/login';
import products_filters from './reducers/products_filters';
import products from './reducers/products';
import cart from './reducers/cart';
import order from './reducers/order';
import favorites from './reducers/favorites';
import waiting from './reducers/waiting';
import header from './reducers/header';
import cabinet_sell from './reducers/cabinet_sell';
import user from './reducers/user';
import brands from './reducers/brands';
import recovery_password from './reducers/recovery_password';
import history_orders from './reducers/history_orders';
import vipservice from './reducers/vipservice';
import subscribe_email from './reducers/subscribe_email';
import public_favorites from './reducers/public_favorites';
import notifications_server from './reducers/notifications_server';
import concierge from './reducers/concierge';
import selections from './slices/selections/slice';
import cinema_artistic from './reducers/cinema_artistic';
import popup_info from './reducers/popup_info';

export const rootReducer = combineReducers({
    form: formReducer,
    check_email,
    register,
    login,
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
    recovery_password,
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
