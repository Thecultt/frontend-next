export interface NotificationsServerState {
    isNotificationServerError: boolean;
    notificationServerErrorText: string;

    isNotificationServerSuccess: boolean;
    notificationServerSuccessText: string;
}

export enum NotificationsServerActionTypes {
    SET_IS_NOTIFICATION_SERVER_ERROR = 'SET_IS_NOTIFICATION_SERVER_ERROR',
    SET_NOTIFICATION_SERVER_ERROR_TEXT = 'SET_NOTIFICATION_SERVER_ERROR_TEXT',

    SET_IS_NOTIFICATION_SERVER_SUCCESS = 'SET_IS_NOTIFICATION_SERVER_SUCCESS',
    SET_NOTIFICATION_SERVER_SUCCESS_TEXT = 'SET_NOTIFICATION_SERVER_SUCCESS_TEXT',
}

interface setIsNotificationServerError {
    type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_ERROR;
    payload: boolean;
}

interface setNotificationServerErrorText {
    type: NotificationsServerActionTypes.SET_NOTIFICATION_SERVER_ERROR_TEXT;
    payload: string;
}

interface setIsNotificationServerSuccess {
    type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_SUCCESS;
    payload: boolean;
}

interface setNotificationServerSuccessText {
    type: NotificationsServerActionTypes.SET_NOTIFICATION_SERVER_SUCCESS_TEXT;
    payload: string;
}

export type NotificationsServerActions =
    | setIsNotificationServerError
    | setNotificationServerErrorText
    | setIsNotificationServerSuccess
    | setNotificationServerSuccessText;
