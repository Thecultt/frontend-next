import { HistoryOrdersState, HistoryOrdersActions, HistoryOrdersActionTypes } from '../types/IHistoryOrders';

const initialState: HistoryOrdersState = {
    items: [],
    isLoaded: false,
};

const history_orders = (state = initialState, action: HistoryOrdersActions) => {
    if (action.type === HistoryOrdersActionTypes.SET_HISTORY_ORDERS_ITEMS) {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        };
    }

    return state;
};

export default history_orders;
