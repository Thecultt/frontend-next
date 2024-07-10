import tinkoff from '@tcb-web/create-credit';

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

        tinkoff.create(data, { view: 'self' });

        // tinkoff.methods.on(tinkoff.constants.MODAL_CLOSED, () => {
        // 	window.location.href = `/order/${orderId}`
        // });

        // tinkoff.methods.on(tinkoff.constants.REJECT, () => {
        // 	window.location.href = `/order/${orderId}`
        // });

        // type IframeInstance = {
        // 	url: string,
        // 	frameId: string,
        // 	destroy(): void
        // };

        // type Data = {
        // 	type: string, // Значения из tinkoff.constants
        // 	payload: any, // Данные для экшена. Используется для тех. событий
        // 	meta: {
        // 		iframe: IframeInstance
        // 	}
        // };

        // const onMessage = (data: Data) => {
        // 	switch (data.type) {
        // 		case tinkoff.constants.SUCCESS:
        // 			console.log('SUCCESS', data.meta.iframe.url);
        // 			break;
        // 		case tinkoff.constants.REJECT:
        // 			console.log('REJECT', data.meta.iframe.url);
        // 			break;
        // 		case tinkoff.constants.CANCEL:
        // 			console.log('CANCEL', data.meta.iframe.url);
        // 			break;
        // 		default:
        // 	}

        // 	tinkoff.methods.off(tinkoff.constants.SUCCESS, onMessage);
        // 	tinkoff.methods.off(tinkoff.constants.REJECT, onMessage);
        // 	tinkoff.methods.off(tinkoff.constants.CANCEL, onMessage);

        // 	data.meta.iframe.destroy();
        // }

        // tinkoff.methods.on(tinkoff.constants.SUCCESS, onMessage);
        // tinkoff.methods.on(tinkoff.constants.REJECT, onMessage);
        // tinkoff.methods.on(tinkoff.constants.CANCEL, onMessage);

        return true;
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
};

export default orderPay;
