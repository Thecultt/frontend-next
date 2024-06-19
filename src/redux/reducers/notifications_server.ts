import {
    NotificationsServerState,
    NotificationsServerActions,
    NotificationsServerActionTypes,
} from '../types/INotificationsServer';

const initialState: NotificationsServerState = {
    isNotificationServerError: false,
    notificationServerErrorText: '',

    isNotificationServerSuccess: false,
    notificationServerSuccessText: '',
};

const notifications_server = (state = initialState, action: NotificationsServerActions) => {
    if (action.type === NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_ERROR) {
        return {
            ...state,
            isNotificationServerError: action.payload,
        };
    }

    if (action.type === NotificationsServerActionTypes.SET_NOTIFICATION_SERVER_ERROR_TEXT) {
        return {
            ...state,
            notificationServerErrorText: action.payload,
        };
    }

    if (action.type === NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_SUCCESS) {
        return {
            ...state,
            isNotificationServerSuccess: action.payload,
        };
    }

    if (action.type === NotificationsServerActionTypes.SET_NOTIFICATION_SERVER_SUCCESS_TEXT) {
        return {
            ...state,
            notificationServerSuccessText: action.payload,
        };
    }

    return state;
};

export default notifications_server;
