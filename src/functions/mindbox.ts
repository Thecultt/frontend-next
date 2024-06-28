import axios from 'axios';
import { MINDBOX_SECRET_KEY } from '@/constants/env';
import { MINDBOX_KEYS } from '@/constants/keys';

export const sendMindbox = (operation: string, data: any) => {
    try {
        const mindboxDeviceUUID = localStorage.getItem(MINDBOX_KEYS.deviceUUID);

        if (!mindboxDeviceUUID || !MINDBOX_SECRET_KEY) {
            throw new Error('key mindboxDeviceUUID not found in local storage');
        }

        return axios.post(
            `https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=${operation}&deviceUUID=${mindboxDeviceUUID}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    Accept: 'application/json',
                    Authorization: `Mindbox secretKey="${MINDBOX_SECRET_KEY}"`,
                },
            },
        );
    } catch (e) {
        console.error('sendMindbox', e);
    }
};
