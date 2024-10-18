'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { formValueSelector } from 'redux-form';
import dayjs from 'dayjs';
import isEqual from 'lodash.isequal';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { changeCheckCartItem, checkAvailabilityCartItems, removeCartItem } from '@/redux/actions/cart';
import { sendCreateOrder } from '@/redux/actions/order';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { sendOrderApplyPromocode } from '@/redux/actions/order';
import { CartProductItem, Loader, OrderProductsPromocode } from '@/components';
import { Checkbox } from '@/shared/ui';
import { getClassNames } from '@/functions/getClassNames';
import { sendMindbox } from '@/functions/mindbox';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { formatMoney } from '@/functions/formatMoney';
import { APP_ROUTE, EXTERNAL_LINKS } from '@/constants/routes';
import { useOrder } from '@/hooks/order/useOrder';
import { JEWELRY_PASSPORT_SUM } from '@/constants/app';
import { orderPay } from '@/functions/orderPay';
import { DELIVERY_VALUES } from '@/constants/delivery';
import { PAYMENTS_NAMES } from '@/constants/pay';

const OrderProducts: React.FC = () => {
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    const [isDisableSendBtn, setIsDisableSendBtn] = React.useState(false);

    const { isLoggedIn, user } = useAuthUser();
    const { promocode, currentDelivery, isValid } = useTypedSelector(({ order }) => order);

    const { cartItems, cartIsLoading, isJewelry, submitOrder } = useOrder();

    const availableCartItems = cartItems.filter((item) => !!item.availability && !item.is_trial);
    const checkedCartItems = availableCartItems.filter((item) => item.checked);

    const cartPrice = checkedCartItems.reduce((acc, cur) => acc + cur.price, 0);

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (article: string) => {
        const item = cartItems.find((item) => item.article === article);

        if (item) {
            dispatch(removeCartItem(item, user.email));
        }

        if (promocode.name) {
            dispatch(sendOrderApplyPromocode(promocode.name, cartPrice) as any);
        }
    };

    const isCheckedAll =
        availableCartItems.length === 0
            ? false
            : isEqual(
                  availableCartItems.map((item) => item.id),
                  checkedCartItems.map((item) => item.id),
              );

    const isCheckNull = () => {
        const checkedArr: boolean[] = [];

        cartItems.map((item) => {
            if (item.checked && !item.is_trial) {
                checkedArr.push(true);
            }
        });

        return !!checkedArr.length;
    };

    const checkAllItems = () => {
        availableCartItems.forEach((item) => {
            if (!item.checked) {
                dispatch(changeCheckCartItem(item.article, true));
            }
        });
    };

    const uncheckAllItems = () => {
        checkedCartItems.forEach((item) => {
            dispatch(changeCheckCartItem(item.article, false));
        });
    };

    const selector = formValueSelector('order-form');

    const {
        emailValue,
        nameValue,
        phoneValue,
        countryValue,
        cityValue,
        // deliveryValue,
        paymentValue,
        streetValue,
        houseValue,
        flatValue,
        commentValue,
        passportValue,
    } = useTypedSelector((state) => {
        const { email, name, phone, country, city, delivery, payment, street, house, flat, comment, passport } =
            selector(
                state,
                'email',
                'name',
                'phone',
                'country',
                'city',
                'delivery',
                'payment',
                'street',
                'house',
                'flat',
                'comment',
                'passport',
            );
        return {
            emailValue: email,
            nameValue: name,
            phoneValue: phone,

            countryValue: country,
            cityValue: city,

            deliveryValue: delivery,
            paymentValue: payment,

            streetValue: street,
            houseValue: house,
            flatValue: flat,
            commentValue: comment ? comment : '',

            passportValue: passport,
        };
    });

    const isPromocode = () => {
        if (
            promocode.isActive &&
            paymentValue !== PAYMENTS_NAMES.installmentTinkoff &&
            paymentValue !== PAYMENTS_NAMES.creditTinkoff &&
            paymentValue !== PAYMENTS_NAMES.yandexSplit
        ) {
            return true;
        }

        return false;
    };

    const totalPrice = isPromocode()
        ? cartPrice + currentDelivery.price - promocode.saleSum
        : cartPrice + currentDelivery.price;

    const onClickSendCreateOrder = () => {
        setIsDisableSendBtn(true);

        const products = checkedCartItems.map((item) => item.id);

        const splitName = nameValue.split(' ');
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

        appDispatch(updateClientAttributes(newUserName));

        let paymentId;

        if (currentDelivery.title === DELIVERY_VALUES.withFittingMoscow) {
            paymentId = 1;
        } else if (paymentValue === PAYMENTS_NAMES.creditTinkoff) {
            paymentId = 7;
        } else if (paymentValue === PAYMENTS_NAMES.installmentTinkoff) {
            paymentId = 4;
        } else if (paymentValue === PAYMENTS_NAMES.yandexSplit) {
            paymentId = 9;
        } else {
            paymentId = 6;
        }

        const requestData: any = {
            isLoggedIn,

            email: emailValue,
            name: nameValue,
            phone: phoneValue,

            country: countryValue,
            city: cityValue,
            street: streetValue,
            home: houseValue,
            room: flatValue,
            comment: commentValue,

            products,

            delivery_type: currentDelivery.id,
            payment_type: paymentId,

            coupon_id:
                paymentValue === PAYMENTS_NAMES.card || currentDelivery.title === DELIVERY_VALUES.withFittingMoscow
                    ? promocode.id
                    : 0,
        };

        if (isJewelry && cartPrice >= JEWELRY_PASSPORT_SUM && passportValue) {
            requestData.passport_data = passportValue;
        }

        dispatch(sendCreateOrder(requestData, (orderId: number, orderNum: string) => pay(orderId, orderNum)) as any);
    };

    const successPayment = (orderId: number) => {
        pushDataLayer('purchase', {
            transaction_id: `${orderId}`,
            value: `${totalPrice}`,
            tax: '-',
            shipping: `${promocode.saleSum}`,
            currency: 'RUB',
            coupon: `${promocode.name}`,
            items: checkedCartItems.map((item) => ({
                item_name: item.name,
                item_id: `${item.id}`,
                price: `${item.price}`,
                item_brand: item.manufacturer,
                item_category: item.category,
                quantity: 1,
            })),
        });

        try {
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
                    lastName: `${user.middlename}`,
                    firstName: `${user.name}`,
                    email: `${user.email}`,
                    mobilePhone: `${phoneValue}`,
                    customFields: {
                        tipKlienta: 'Pokupatel',
                        gorod: `${cityValue}`,
                    },
                },
                order: {
                    ids: {
                        websiteID: `${orderId}`,
                    },
                    deliveryCost: `${currentDelivery.price}`,
                    customFields: {
                        deliveryType: `${currentDelivery.title}`,
                    },
                    discounts: promocode.isActive
                        ? [
                              {
                                  type: 'Промокод',
                                  promoCode: {
                                      ids: {
                                          code: promocode.name,
                                      },
                                  },
                                  amount: promocode.saleSum,
                              },
                          ]
                        : [],
                    lines: checkedCartItems.map((product) => {
                        return {
                            minPricePerItem: `${product.price}`,
                            basePricePerItem: `${product.price}`,
                            quantity: '1',
                            quantityType: 'int',
                            discountedPricePerLine: `${cartPrice}`,
                            lineId: `${product.id}`,
                            discounts: promocode.isActive
                                ? [
                                      {
                                          type: 'Промокод',
                                          externalPromoAction: {
                                              ids: {
                                                  externalId: `${promocode.name}`,
                                              },
                                          },
                                          amount: `${promocode.saleSum}`,
                                      },
                                  ]
                                : [],
                            product: {
                                ids: {
                                    website: `${product.id}`,
                                },
                            },
                        };
                    }),
                    email: `${user.email}`,
                    mobilePhone: `${phoneValue.replace(/[^0-9]/g, '')}`,
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
            console.log(e);
        }

        submitOrder(orderId);
    };

    const pay = (orderId: number, orderNum: string) => {
        if (currentDelivery.title === DELIVERY_VALUES.withFittingMoscow) {
            successPayment(orderId);
        } else {
            orderPay({
                type: paymentValue,
                orderId,
                totalPrice,
                deliveryPrice: currentDelivery.price,
                products: checkedCartItems.map((item) => ({
                    name: item.name,
                    price: item.price,
                    is_jewelry: item.is_jewelry,
                })),
                orderNum,
                onSuccessCallback: () => successPayment(orderId),
            });
        }
    };

    React.useEffect(() => {
        dispatch(checkAvailabilityCartItems(cartItems) as any);
    }, []);

    React.useEffect(() => {
        pushDataLayer('add_shipping_info', {
            shipping_tier: `${currentDelivery.title}|${dayjs().format('DD.MM.YYYY')}|${currentDelivery.price}`,
            items: checkedCartItems.map((item, index) => ({
                item_name: item.name,
                item_id: `${item.id}`,
                price: `${item.price}`,
                item_brand: item.manufacturer,
                item_category: item.category,
                item_category2: item.subcategory,
                item_category3: '-',
                item_category4: '-',
                item_list_name: 'Search Results',
                item_list_id: item.article,
                index,
                quantity: 1,
            })),
        });
    }, [currentDelivery.title]);

    React.useEffect(() => {
        pushDataLayer('add_payment_info', {
            payment_type: `${paymentValue}`,
            items: checkedCartItems.map((item, index) => ({
                item_name: item.name,
                item_id: `${item.id}`,
                price: `${item.price}`,
                item_brand: item.manufacturer,
                item_category: item.category,
                item_category2: item.subcategory,
                item_category3: '-',
                item_category4: '-',
                item_list_name: 'Search Results',
                item_list_id: item.article,
                index,
                quantity: 1,
            })),
        });
    }, [paymentValue]);

    return (
        <div className="order-products">
            <h3 className="order-products__title">Ваш заказ:</h3>

            <Checkbox
                className="order-products-check-all"
                checked={isCheckedAll}
                onChange={isCheckedAll ? uncheckAllItems : checkAllItems}
                disabled={availableCartItems.length === 0}
            >
                <p className="order-products-check-all__title">Выделить все</p>
            </Checkbox>

            <div className="order-products-items-wrapper">
                {cartItems.map((item) => (
                    <CartProductItem
                        key={item.id}
                        data={item}
                        removeDisabled={cartItems.length === 1 && !!item.availability && !item.is_trial}
                        onCheck={() => changeCheck(item.article, !item.checked)}
                        onRemove={() => removeItem(item.article)}
                    />
                ))}
            </div>

            <OrderProductsPromocode
                disabled={
                    paymentValue === PAYMENTS_NAMES.installmentTinkoff ||
                    paymentValue === PAYMENTS_NAMES.creditTinkoff ||
                    paymentValue === PAYMENTS_NAMES.yandexSplit
                }
                totalPrice={cartPrice + currentDelivery.price}
            />

            <div className="order-products-total">
                <div className="order-products-total-item">
                    <p className="order-products-total-item__title">Товары - {checkedCartItems.length} шт</p>
                    <p className="order-products-total-item__value">{formatMoney(cartPrice)}</p>
                </div>

                {isPromocode() && (
                    <div className="order-products-total-item promocode">
                        <p className="order-products-total-item__title">Скидка в корзине</p>
                        <p className="order-products-total-item__value">- {formatMoney(promocode.saleSum)}</p>
                    </div>
                )}

                <div className="order-products-total-item">
                    <p className="order-products-total-item__title">Доставка</p>
                    <p className="order-products-total-item__value">{formatMoney(currentDelivery.price)}</p>
                </div>
                <div className="order-products-total-item">
                    <p className="order-products-total-item__title">Итого:</p>
                    <p className="order-products-total-item__value">{formatMoney(totalPrice)}</p>
                </div>

                <p className="order-products__description">
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

                <button
                    className={getClassNames('btn order-products__btn', {
                        loader: isDisableSendBtn || cartIsLoading,
                        disabled: !isCheckNull() || !isValid,
                    })}
                    onClick={onClickSendCreateOrder}
                    disabled={!isValid || isDisableSendBtn || cartIsLoading}
                >
                    {isDisableSendBtn ? (
                        <Loader />
                    ) : currentDelivery.title === DELIVERY_VALUES.withFittingMoscow ? (
                        'Оформить заказ'
                    ) : (
                        'Перейти к оплате'
                    )}
                </button>
            </div>
        </div>
    );
};

export default OrderProducts;
