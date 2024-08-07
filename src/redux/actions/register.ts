import axios from 'axios';
import { Dispatch } from 'react';

import { RegisterActions, RegisterActionTypes } from '../types/IRegister';
import { LS_KEYS } from '@/constants/keys';
import { localStorageService } from '@/services/storage';
import { sendMindbox } from '@/functions/mindbox';

export const sendRegister = (info: {
    name: string;
    lastname: string;
    email: string;
    password: string;
    promoCheckbox: boolean;
}) => {
    return async (dispatch: Dispatch<RegisterActions>) => {
        dispatch({
            type: RegisterActionTypes.SET_REGISTER_IS_SEND,
            payload: true,
        });

        axios.post(`${process.env.NEXT_PUBLIC_API_DOMEN}/register/`, info).then(({ data }) => {
            localStorageService?.setItem(LS_KEYS.accessToken, data.access as string, { value: 1, unit: 'month' });
            localStorageService?.setItem(LS_KEYS.refreshToken, data.refresh as string, { value: 1, unit: 'month' });

            window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
            window?.dataLayer?.push({
                event: 'registration',
                ecommerce: {
                    timestamp: Math.floor(Date.now() / 1000),
                },
            });

            const redirectReglog = localStorageService?.getItem<string>(LS_KEYS.redirectReglog, '');

            if (info.promoCheckbox) {
                try {
                    const mindboxOperation =
                        redirectReglog === '/order'
                            ? 'KlientImportPriPodpiskeVZakaze'
                            : 'KlientImportPriPodpiskeRegaLK';

                    sendMindbox(mindboxOperation, {
                        customer: {
                            ids: {
                                websiteID: data.id,
                            },
                            discountCard: {
                                ids: {
                                    number: '',
                                },
                            },
                            birthDate: '',
                            sex: '',
                            timeZone: '',
                            lastName: '',
                            firstName: info.name,
                            middleName: info.lastname,
                            fullName: '',
                            area: {
                                ids: {
                                    externalId: '',
                                },
                            },
                            customFields: {
                                tipKlienta: '',
                                gorod: '',
                                istochnikPodpiski: 'PriRegistraciiLK',
                            },
                            email: info.email,
                            mobilePhone: '',
                            subscriptions: [
                                {
                                    pointOfContact: 'Email',
                                    isSubscribed: info.promoCheckbox,
                                },
                            ],
                        },
                        executionDateTimeUtc: new Date(),
                    });
                } catch (e) {
                    console.log(e);
                }
            }

            if (redirectReglog) {
                window.location.href = `${redirectReglog}#welcome`;
            } else {
                window.location.hash = 'welcome';
                window.location.reload();
            }

            dispatch({
                type: RegisterActionTypes.SET_REGISTER_IS_SEND,
                payload: false,
            });
        });
    };
};
