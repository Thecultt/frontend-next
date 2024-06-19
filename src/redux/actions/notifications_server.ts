import { Dispatch } from 'redux';

import { NotificationsServerActions, NotificationsServerActionTypes } from '../types/INotificationsServer';

export const setIsNotificationServerError =
    (status: boolean, text?: string) => (dispatch: Dispatch<NotificationsServerActions>) => {
        if (text) {
            dispatch({
                type: NotificationsServerActionTypes.SET_NOTIFICATION_SERVER_ERROR_TEXT,
                payload: text,
            });
        }

        if (status === true) {
            dispatch({
                type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_ERROR,
                payload: true,
            });

            setTimeout(() => {
                dispatch({
                    type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_ERROR,
                    payload: false,
                });
            }, 3000);
        } else {
            dispatch({
                type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_ERROR,
                payload: false,
            });
        }
    };

export const setIsNotificationServerSuccess =
    (status: boolean, text?: string) => (dispatch: Dispatch<NotificationsServerActions>) => {
        if (text) {
            dispatch({
                type: NotificationsServerActionTypes.SET_NOTIFICATION_SERVER_SUCCESS_TEXT,
                payload: text,
            });
        }

        if (status === true) {
            dispatch({
                type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_SUCCESS,
                payload: true,
            });

            setTimeout(() => {
                dispatch({
                    type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_SUCCESS,
                    payload: false,
                });
            }, 3000);
        } else {
            dispatch({
                type: NotificationsServerActionTypes.SET_IS_NOTIFICATION_SERVER_SUCCESS,
                payload: false,
            });
        }
    };
