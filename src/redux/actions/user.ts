import { Dispatch } from 'react';

import $api from '@/http';
import { Noop } from '@/types/functions';
import { GENDER_IDS, GENDERS } from '@/constants/catalog';

import { UserActionTypes, UserActions } from '../types/IUser';
import { setIsNotificationServerSuccess } from '../actions/notifications_server';

export const fetchUser = () => async (dispatch: Dispatch<UserActions>) => {
    const { data } = await $api.get(`/client-attributes/`);

    dispatch({
        type: UserActionTypes.SET_USER,
        payload: data,
    });
};

export const sendUpdateUser = (body: any, onSubmitSuccess?: Noop) => async (dispatch: Dispatch<UserActions>) => {
    dispatch({
        type: UserActionTypes.SET_USER_IS_SENDING,
        payload: true,
    });

    // TODO fix it
    if (body.gender) {
        body.gender = body.gender === GENDERS.female ? GENDER_IDS.female : GENDER_IDS.male;
    }

    $api.post('/client-attributes/update/', body).then(({ data }) => {
        dispatch({
            type: UserActionTypes.SET_USER,
            payload: data,
        });

        onSubmitSuccess?.();

        dispatch({
            type: UserActionTypes.SET_USER_IS_SENDING,
            payload: false,
        });

        dispatch(setIsNotificationServerSuccess(true, 'Изменения сохранены успешно') as any);
    });
};
