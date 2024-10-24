'use client';

import React from 'react';
import Link from 'next/link';
import { useFormikContext } from 'formik';

import { APP_ROUTE, EXTERNAL_LINKS } from '@/constants/routes';
import { DELIVERY_ITEM } from '@/constants/delivery';
import { PAYMENT_ITEMS } from '@/constants/pay';
import { JEWELRY_PASSPORT_SUM } from '@/constants/app';
import { IOrderCreateData } from '@/types/order';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { sendMindbox } from '@/functions/mindbox';
import { orderPay } from '@/functions/orderPay';
import { checkPromoCodeIsAvailable } from '@/functions/checkPromoCodeIsAvailable';
import { prepareFormikFiledTouched } from '@/functions/prepareFormikFiledTouched';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useOrder } from '@/hooks/order/useOrder';
import { createOrder } from '@/redux/slices/order/asyncActions';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { Button } from '@/shared/ui';

import { IOrderFormValues } from '../../types';

import './styles.sass';

export const OrderSubmit = () => {
    const dispatch = useAppDispatch();

    const { values, setTouched, validateForm } = useFormikContext<IOrderFormValues>();

    const { user, isLoggedIn } = useAuthUser();
    const {
        checkedCartItems,
        cartSum,
        cartIsLoading,
        isJewelry,
        deliveryPrice,
        promoCode,
        orderIsLoading,
        submitOrder,
    } = useOrder();

    const promoCodeIsAvailable = React.useMemo(
        () => checkPromoCodeIsAvailable(promoCode, values.payment),
        [promoCode, values.payment],
    );

    const totalSum = React.useMemo(
        () => (promoCodeIsAvailable ? cartSum + deliveryPrice - (promoCode?.discount ?? 0) : cartSum + deliveryPrice),
        [promoCodeIsAvailable, promoCode, cartSum, deliveryPrice],
    );

    const buttonIsAvailable = checkedCartItems.length > 0 && cartSum > 0 && !cartIsLoading && !orderIsLoading;

    const successPayment = (orderId: number) => {
        try {
            pushDataLayer('purchase', {
                transaction_id: `${orderId}`,
                value: `${totalSum}`,
                tax: '-',
                shipping: `${promoCode?.discount ?? 0}`,
                currency: 'RUB',
                coupon: promoCode?.name ?? '',
                items: checkedCartItems.map((item) => ({
                    item_name: item.name,
                    item_id: `${item.id}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    quantity: 1,
                })),
            });

            sendMindbox('Website.CreateAuthorizedOrder', {
                customer: {
                    ids: {
                        websiteID: `${user.user_id}`,
                    },
                    discountCard: {
                        ids: {
                            number: '',
                        },
                    },
                    lastName: user.middlename ?? '',
                    firstName: user.name ?? '',
                    email: user.email ?? '',
                    mobilePhone: values.phone,
                    customFields: {
                        tipKlienta: 'Pokupatel',
                        gorod: values.city,
                    },
                },
                order: {
                    ids: {
                        websiteID: `${orderId}`,
                    },
                    deliveryCost: `${deliveryPrice}`,
                    customFields: {
                        deliveryType: `${Object.values(DELIVERY_ITEM).find((item) => item.id === values.delivery)?.title ?? ''}`,
                    },
                    discounts: checkPromoCodeIsAvailable(promoCode, values.payment)
                        ? [
                              {
                                  type: 'Промокод',
                                  promoCode: {
                                      ids: {
                                          code: promoCode?.name ?? '',
                                      },
                                  },
                                  amount: promoCode?.discount ?? 0,
                              },
                          ]
                        : [],
                    lines: checkedCartItems.map((product) => ({
                        minPricePerItem: `${product.price}`,
                        basePricePerItem: `${product.price}`,
                        quantity: '1',
                        quantityType: 'int',
                        discountedPricePerLine: `${cartSum}`,
                        lineId: `${product.id}`,
                        discounts: checkPromoCodeIsAvailable(promoCode, values.payment)
                            ? [
                                  {
                                      type: 'Промокод',
                                      externalPromoAction: {
                                          ids: {
                                              externalId: promoCode?.name ?? '',
                                          },
                                      },
                                      amount: promoCode?.discount ?? 0,
                                  },
                              ]
                            : [],
                        product: {
                            ids: {
                                website: `${product.id}`,
                            },
                        },
                    })),
                    email: user.email ?? '',
                    mobilePhone: `${values.phone.replace(/[^0-9]/g, '')}`,
                },
                executionDateTimeUtc: new Date(),
            });

            checkedCartItems.map((product) => {
                sendMindbox('Website.ClearCart', {
                    customer: {
                        email: user.email || '',
                    },
                    removeProductFromList: {
                        product: {
                            ids: {
                                website: product.id,
                            },
                        },
                        pricePerItem: product.price,
                    },
                    executionDateTimeUtc: new Date(),
                });
            });
        } catch (e) {
            console.error('successPayment', e);
        }

        submitOrder(orderId);
    };

    const handlePay = (orderId: number, orderNum: string) => {
        if (values.delivery === DELIVERY_ITEM.withFittingMoscow.id) {
            successPayment(orderId);
        } else {
            const paymentType = PAYMENT_ITEMS.find((item) => item.id === values.payment)?.title ?? '';
            if (paymentType) {
                orderPay({
                    type: paymentType,
                    orderId,
                    totalPrice: totalSum,
                    deliveryPrice: deliveryPrice,
                    products: checkedCartItems.map((item) => ({
                        name: item.name,
                        price: item.price,
                        is_jewelry: item.is_jewelry,
                    })),
                    orderNum,
                    onSuccessCallback: () => successPayment(orderId),
                });
            }
        }
    };

    const updateUser = () => {
        const splitName = values.name.split(' ');
        const lastname = splitName[0];
        const name = splitName[1];
        const middlename = splitName[2];

        // TODO any
        const newUserName: any = {};

        if (middlename && user.middlename !== '') {
            newUserName.middlename = middlename;
        }

        if (name && user.name !== '') {
            newUserName.name = name;
        }

        if (lastname && user.lastname !== '') {
            newUserName.lastname = lastname;
        }

        dispatch(updateClientAttributes(newUserName));
    };

    const handleSubmit = async () => {
        const validationErrors = await validateForm();
        const errorKeys = Object.keys(validationErrors);

        const errorFieldTouched = prepareFormikFiledTouched(validationErrors);
        await setTouched(errorFieldTouched);

        if (errorKeys.length > 0) {
            document
                .querySelector(`.order-form input[name="${errorKeys[0]}"]`)
                ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        const requestData: IOrderCreateData = {
            isLoggedIn,

            email: values.email,
            name: values.name,
            phone: values.phone,

            country: values.country,
            city: values.city,
            street: values.street,
            home: values.house,
            room: values.flat,
            comment: values.comment,

            products: checkedCartItems.map((item) => item.id),

            delivery_type: values.delivery,
            payment_type: values.payment,

            coupon_id: checkPromoCodeIsAvailable(promoCode, values.payment) ? promoCode?.id ?? 0 : 0,
        };

        if (isJewelry && cartSum >= JEWELRY_PASSPORT_SUM && values.passport) {
            requestData.passport_data = values.passport;
        }

        dispatch(
            createOrder({
                data: requestData,
                onSuccess: (orderId: number, orderNum: string) => {
                    updateUser();
                    handlePay(orderId, orderNum);
                },
            }),
        );
    };

    return (
        <div className="order-submit">
            <p className="order-submit__text">
                Нажимая кнопку, вы принимаете условия{' '}
                <a href={EXTERNAL_LINKS.personalData} target="_blank" rel="noreferrer">
                    обработки персональных данных
                </a>{' '}
                и{' '}
                <Link href={APP_ROUTE.help.theCultt} target="_blank">
                    условия продажи
                </Link>
                .
            </p>
            <Button
                label={values.delivery === DELIVERY_ITEM.withFittingMoscow.id ? 'Оформить заказ' : 'Перейти к оплате'}
                disabled={!buttonIsAvailable}
                onClick={handleSubmit}
                wide
            />
        </div>
    );
};
