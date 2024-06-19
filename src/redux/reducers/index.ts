import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import check_email from './check_email';
import register from './register';
import login from './login';
import products_filters from './products_filters';
import products from './products';
import cart from './cart';
import order from './order';
import favorites from './favorites';
import waiting from './waiting';
import header from './header';
import cabinet_sell from './cabinet_sell';
import user from './user';
import brands from './brands';
import recovery_password from './recovery_password';
import history_orders from './history_orders';
import concierge from './concierge';
import subscribe_email from './subscribe_email';
import public_favorites from './public_favorites';
import notifications_server from './notifications_server';
import buyer_thecultt from './buyer_thecultt';
import selections from './selections';

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
    concierge,
    subscribe_email,
    public_favorites,
    notifications_server,
    buyer_thecultt,
    selections,
});

export type RootState = ReturnType<typeof rootReducer>;
