export const COUNT_MINUTES_RESERVED_ORDER = 15;

export const ORDER_STATUSES: { [key: string]: string } = {
    register: 'Заказ оформлен',
    awaitingPayment: 'Ожидает оплаты',
    processing: 'Закза в обработке',
    craft: 'Сборка',
    crafted: 'Заказ собран',
    waitingDelivery: 'Готов к выдаче',
    delivery: 'В доставке',
    notPayment: 'Заказ не выкуплен',
    successed: 'Заказ завершен',
    canceled: 'Заказ отменен',
    refund: 'Оформлен возврат',
};

export const ORDER_STATUSES_COLORS = {
    [ORDER_STATUSES.register]: 'black',
    [ORDER_STATUSES.awaitingPayment]: 'red',
    [ORDER_STATUSES.processing]: 'green',
    [ORDER_STATUSES.craft]: 'green',
    [ORDER_STATUSES.crafted]: 'green',
    [ORDER_STATUSES.waitingDelivery]: 'green',
    [ORDER_STATUSES.delivery]: 'green',
    [ORDER_STATUSES.notPayment]: 'red',
    [ORDER_STATUSES.successed]: 'green',
    [ORDER_STATUSES.canceled]: 'red',
    [ORDER_STATUSES.refund]: 'black',
};
