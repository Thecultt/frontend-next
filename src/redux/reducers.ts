import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './slices/auth/slice';
import selections from './slices/selections/slice';
import user from './slices/user/slice';
import catalog from './slices/catalog/slice';
import orderNew from './slices/order/slice';
import cart from './slices/cart/slice';

import products_filters from './reducers/products_filters';
import products from './reducers/products';
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
import concierge from './reducers/concierge';
import cinema_artistic from './reducers/cinema_artistic';
import popup_info from './reducers/popup_info';

export const rootReducer = combineReducers({
    form: formReducer,

    auth,
    selections,
    catalog,
    orderNew,
    cart,

    products_filters,
    products,
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
    concierge,
    cinema_artistic,
    popup_info,
});

export type RootState = ReturnType<typeof rootReducer>;
