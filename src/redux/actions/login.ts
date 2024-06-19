import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { Dispatch } from 'react';

import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { sendMindbox } from '@/functions/mindbox';

import { LoginActions, LoginActionTypes } from '../types/ILogin';

export const sendLogin = (data: { username: string | null; password: string }, onChangeSuccess?: () => void) => {
    return async (dispatch: Dispatch<LoginActions>) => {
        dispatch({
            type: LoginActionTypes.SET_LOGIN_IS_SEND,
            payload: true,
        });

        return axios
            .post(`${process.env.NEXT_PUBLIC_API_DOMEN}/login/`, data)
            .then(({ data }) => {
                localStorageService?.setItem(LS_KEYS.accessToken, data.access as string, { value: 1, unit: 'month' });

                window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
                window?.dataLayer?.push({
                    event: 'login',
                    ecommerce: {
                        timestamp: Math.floor(Date.now() / 1000),
                    },
                });

                const ym = window.ym || (window.ym = []);

                ym(68184745, 'reachGoal', 'login_password');

                try {
                    sendMindbox('Website.AuthorizeCustomer', {
                        // "customerAction": {
                        // 	"customFields": {
                        // 		"brand": "<Бренд>",
                        // 		"coctoyanie": "<Состояние>",
                        // 		"defecti": "<Дефекты>",
                        // 		"kategoria": "<Категория>",
                        // 		"model": "<Модель>",
                        // 		"ojidaniePoTcene": "<Ожидание по цене>",
                        // 		"otpravilAnketyNaProdazy": "<Отправил анкету на продажу>",
                        // 		"photo1": "<Фото 1>",
                        // 		"photo2": "<Фото 2>",
                        // 		"photo3": "<Фото 3>",
                        // 		"photo4": "<Фото 4>",
                        // 		"tovarIzKulta": "<Товар приобретен в Культе>",
                        // 		"visitNaProdat": "<Визит на страницу Продать>"
                        // 	}
                        // },
                        customer: {
                            ids: {
                                websiteID: `${data.id}`,
                            },
                            // "discountCard": {
                            // 	"ids": {
                            // 		"number": "<Номер дисконтной карты>"
                            // 	}
                            // },
                            // "birthDate": "<Дата рождения>",
                            // "sex": "<Пол>",
                            // "timeZone": "<Часовой пояс>",
                            // "lastName": "<Фамилия>",
                            // "firstName": "<Имя>",
                            // "middleName": "<Отчество>",
                            // "fullName": "<ФИО>",
                            // "area": {
                            // 	"ids": {
                            // 		"externalId": "<Внешний идентификатор зоны>"
                            // 	}
                            // },
                            email: `${localStorageService?.getItem<string>(LS_KEYS.email)}`,
                            // "mobilePhone": "<Мобильный телефон>",
                            // "customFields": {
                            // 	"tipKlienta": "<Тип клиента>",
                            // 	"gorod": "<Город>",
                            // 	"istochnikPodpiski": "<Источник подписки>"
                            // },
                            // "subscriptions": [
                            // ]
                        },
                        executionDateTimeUtc: new Date(),
                    });
                } catch (e) {
                    console.log(e);
                }

                const redirectReglog = localStorageService?.getItem<string>(LS_KEYS.redirectReglog, '');
                if (redirectReglog) {
                    window.location.href = redirectReglog;
                } else {
                    window.location.hash = '';
                    window.location.reload();
                }

                // if (onChangeSuccess) {
                // 	onChangeSuccess()
                // } else {
                // 	window.location.hash = ""
                // 	window.location.reload()
                // }

                dispatch({
                    type: LoginActionTypes.SET_LOGIN_IS_SEND,
                    payload: false,
                });
            })
            .catch(() => {
                dispatch({
                    type: LoginActionTypes.SET_LOGIN_IS_SEND,
                    payload: false,
                });

                throw new SubmissionError({
                    password: 'Неверный пароль',
                });
            });
    };
};
