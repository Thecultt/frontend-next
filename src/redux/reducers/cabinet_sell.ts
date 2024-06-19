import {
    CabinetSellState,
    CabinetSellActions,
    CabinetSellActionTypes,
    CabinetSellStepKeys,
    CabinetSellTypes,
} from '../types/ICabinetSell';

const initialState: CabinetSellState = {
    isSend: false,
    isSending: false,

    currentStep: CabinetSellStepKeys.COOPERATION,
    currentType: CabinetSellTypes.SELL,

    isLoadedParameters: false,
    parameters: {},

    isLoadedSellsList: false,
    sellsList: [],
};

const cabinet_sell = (state = initialState, action: CabinetSellActions) => {
    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_IS_SENDING) {
        return {
            ...state,
            isSending: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP) {
        return {
            ...state,
            currentStep: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE) {
        return {
            ...state,
            currentType: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS) {
        return {
            ...state,
            isLoadedParameters: true,
            parameters: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_SELLS_LIST) {
        return {
            ...state,
            isLoadedSellsList: true,
            sellsList: action.payload,
        };
    }

    return state;
};

export default cabinet_sell;
