interface orderPayParams {
    type: string;
    orderId: number;
    totalPrice: number;
    deliveryPrice: number;
    products: { name: string; price: number }[];
    orderNum: string;
    onSuccessCallback: () => void;
}

const orderPay = ({
    type,
    orderId,
    totalPrice,
    deliveryPrice,
    products,
    orderNum,
    onSuccessCallback,
}: orderPayParams) => {
    // TODO payment types to const/enum
    if (type === 'Кредит' || type === 'Рассрочка от Тинькофф') {
        const data: any = {
            shopId: process.env.NEXT_PUBLIC_TINKOFF_SHOP_ID as string,
            showcaseId: process.env.NEXT_PUBLIC_TINKOFF_SHOW_CASE_ID as string,
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
            successURL: `https://thecultt.com/order/${orderId}`,
        };

        if (type === 'Рассрочка от Тинькофф') {
            data.promoCode = 'installment_0_0_3_3,87';
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
            publicId: process.env.NEXT_PUBLIC_CLOUD_PAYMENTS_PUBLIC_ID,
            description: `${orderNum}`,
            amount: totalPrice,
            invoiceId: String(orderNum),
            currency: 'RUB',
        },
        {
            onFail: () => {
                window.location.href = `/order/${orderId}`;
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
        window.location.href = `/order/${orderId}`;
    }, 900000);
};

export default orderPay;
