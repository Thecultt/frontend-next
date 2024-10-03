import { APP_PROD_DOMAIN } from '@/constants/app';
import { PAYMENTS_NAMES } from '@/constants/pay';
import { APP_ROUTE } from '@/constants/routes';

interface orderPayParams {
    type: string;
    orderId: number;
    totalPrice: number;
    deliveryPrice: number;
    products: { name: string; price: number; is_jewelry?: boolean }[];
    orderNum: string;
    onSuccessCallback: () => void;
}

export const orderPay = ({
    type,
    orderId,
    totalPrice,
    deliveryPrice,
    products,
    orderNum,
    onSuccessCallback,
}: orderPayParams) => {
    const isJewelry = products.some((product) => product.is_jewelry);

    if (type === PAYMENTS_NAMES.creditTinkoff || type === PAYMENTS_NAMES.installmentTinkoff) {
        const data: any = {
            shopId: process.env.NEXT_PUBLIC_TINKOFF_SHOP_ID,
            showcaseId: process.env.NEXT_PUBLIC_TINKOFF_SHOW_CASE_ID,
            orderNumber: String(orderId),
            items: [
                ...products.map((product) => ({
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                })),
                { name: 'Доставка', price: deliveryPrice, quantity: 1 },
            ],
            sum: totalPrice,
            successURL: `${APP_PROD_DOMAIN}/${orderId}`,
        };

        if (type === PAYMENTS_NAMES.installmentTinkoff) {
            data.promoCode = process.env.NEXT_PUBLIC_TINKOFF_PROMOCODE;
        }

        if (typeof window !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const tinkoff = require('@tcb-web/create-credit');
            tinkoff.create(data, { view: 'self' });
        }

        return;
    }

    const widget = new window.cp.CloudPayments();

    widget.pay(
        'charge',
        {
            publicId: isJewelry
                ? process.env.NEXT_PUBLIC_CLOUD_PAYMENTS_PUBLIC_ID_JEWELRY
                : process.env.NEXT_PUBLIC_CLOUD_PAYMENTS_PUBLIC_ID,
            description: `${orderNum}`,
            amount: totalPrice,
            invoiceId: String(orderNum),
            currency: 'RUB',
        },
        {
            onFail: () => {
                window.location.href = `${APP_ROUTE.order}/${orderId}`;
            },
            onComplete: (paymentResult: any) => {
                if (paymentResult.success) {
                    onSuccessCallback();
                }
            },
        },
    );

    // Закрываем окно через 15 минут
    setTimeout(() => {
        window.location.href = `${APP_ROUTE.order}/${orderId}`;
    }, 900000);
};
