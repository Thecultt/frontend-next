import React from 'react';

import { ProductInfoTabsItem } from '@/components';

const tabs = [
    {
        title: 'Доставка',
        description: `
            <span>Доставка оплаченных заказов по Москве и России — бесплатно.</span>

            <span>Доставка по Москве (внутри МКАД) осуществляется собственным курьером платформы THE CULTT. Доставка по России курьерской службой СДЭК до пункта самовывоза или вашего адреса.</span>

            <span>Услуга доставки с примеркой по Москве — 600₽.</span>

            <span>Доставка международных заказов осуществляется службой EMS. Стоимость международной доставки — от 2.000₽ до 5.000₽ в зависимости от страны.</span>

            <span>Подробнее в разделе <a href="/help-delivery">«Доставка и оплата»</a>.</span>
        `,
    },
    {
        title: 'Оплата',
        description: `
            <span>К оплате на сайте принимаются платежные системы: МИР, MasterCard, Visa, Maestro, UnionPay, YandexPay или СБП. Оплата наличными возможна только для услуги «Примерка по Москве».</span>

            <span>Вид оплаты «Рассрочка» или »Кредит» возможен для заказов стоимостью не более 500.000₽.  Для оплаты »Яндекс Сплит» - не более 150.000₽.</span>

            <span>Подробнее в разделе <a href="/help-delivery">«Доставка и оплата»</a>.</span>
        `,
    },
    {
        title: 'Возврат',
        description: `
            <span>Мы принимаем возврат в течение трех дней с момента получения заказа (кроме заказов с методом доставки самовывоз). Товары из подборки "Архив Алены Долецкой" и оплаченные международными картами, не подлежат возврату.</span>

            <span>Подробнее в разделе <a href="/help-return">«Возврат»</a>.</span>
        `,
    },
];

const ProductInfoTabs: React.FC = () => {
    return (
        <div className="product-content-info-tabs">
            {tabs.map((tab, index) => (
                <ProductInfoTabsItem {...tab} key={`product-content-info-tab-${index}`} />
            ))}
        </div>
    );
};

export default ProductInfoTabs;
