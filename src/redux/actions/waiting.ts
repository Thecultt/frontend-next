import { Dispatch } from 'react';

import $api from '@/http';
import { WaitingListItem } from '@/models/IWaitingListItem';
import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { WaitingPopupType } from '@/types/waiting';

import { WaitingActionTypes, WaitingActions } from '../types/IWaiting';

export const fetchWaitingList = () => async (dispatch: Dispatch<WaitingActions>) => {
    const { data } = await $api.get<WaitingListItem[]>(`/waitinglist_requests/`);

    dispatch({
        type: WaitingActionTypes.SET_WAITING_ITEMS,
        payload: data,
    });
};

export const sendNewWaitingListItem =
    (item: { category: string; subcategory: string; brand: string; model_name: string; size: string }) =>
    async (dispatch: Dispatch<any>) => {
        const data: any = await $api.post(`/waitinglist_request/`, item);

        dispatch(fetchWaitingList());

        window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            event: 'waiting_list',
            ecommerce: {
                items: [],
                timestamp: Math.floor(Date.now() / 1000),
                formId: data.id,
            },
        });

        localStorageService?.removeItem(LS_KEYS.waiting);
        window.location.hash = WaitingPopupType.Success;
    };

export const sendDeleteWaitingListItem = (id: string) => async (dispatch: Dispatch<any>) => {
    await $api.delete(`/delete_waitinglist_request/${id}`);

    dispatch(fetchWaitingList());
    window.location.hash = '';
};
