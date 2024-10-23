import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { MINDBOX_SECRET_KEY } from '@/constants/env';
import { MINDBOX_KEYS } from '@/constants/keys';

import { localStorageService } from '@/services/storage';

export const generateUUIDMindbox = () => {
    localStorageService?.setItem(MINDBOX_KEYS.deviceUUID, uuidv4());
};

export const sendMindbox = (operation: string, data: any) => {
    const mindboxDeviceUUID = localStorage.getItem(MINDBOX_KEYS.deviceUUID);

    if (!mindboxDeviceUUID || !MINDBOX_SECRET_KEY) {
        console.error(
            'sendMindbox',
            'key mindboxDeviceUUID not found in local storage or mindbox secret key not found',
        );

        return;
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
};
