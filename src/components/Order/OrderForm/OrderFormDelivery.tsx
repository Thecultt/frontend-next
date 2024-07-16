import React from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';

import { setOrderCurrentDelivery } from '@/redux/actions/order';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { getClassNames } from '@/functions/getClassNames';
import { RenderRadioSelect } from '@/components';

const deliveryItemsRussiaMoscow: {
    title: string;
    description: string;
    price: number;
    id: number;
}[] = [
    {
        title: 'Доставка с примеркой (по Москве)',
        description: `
				<span style="color: #838383;">Стоимость доставки — 600₽</span>
				Вы можете заказать доставку лотов(не более 2 сумок или не более 2 пар обуви или 4 аксессуаров) по Москве в пределах МКАД и принять решение о покупке после примерки.Курьер заранее согласует с вами время доставки в промежутке с 11 до 20 с понедельника по воскресенье.Время ожидания курьера во время примерки - 15 минут.
			`,
        price: 600,
        id: 4,
    },
    {
        title: 'Бесплатная доставка (без примерки)',
        description: `
				<span style="color: #838383;">Стоимость доставки — бесплатно</span>
				Мы бесплатно доставим оплаченный вами заказ по Москве в пределах МКАД. Курьер заранее согласует с вами время доставки в промежутке 11 до 20 с пн по пт. Доставка будет осуществлена в течение 24 часов.
			`,
        price: 0,
        id: 2,
    },
    {
        title: 'Самовывоз',
        description:
            'Самовывоз из офиса осуществляется по адресу: Трубная 23с2, (3 этаж, офис THE CULTT) ежедневно с 10:00 до 20:00. Оплаченный заказ может храниться до 7 дней.',
        price: 0,
        id: 1,
    },
];

const deliveryItemsRussia: {
    title: string;
    description: string;
    price: number;
    id: number;
}[] = [
    {
        title: 'Бесплатная доставка по России',
        description:
            'Мы бесплатно доставим оплаченный вами заказ с помощью курьерской службы СДЭК или Boxberry, срок доставки от 2 дней в зависимости от региона. Примерка для регионов недоступна.',
        price: 0,
        id: 3,
    },
];

const deliveryItemsSng: {
    title: string;
    description: string;
    price: number;
    id: number;
}[] = [
    {
        title: 'Доставка по странам СНГ',
        description: `
			<span style="color: #838383;">Стоимость доставки — 2000₽</span>

			Доставка осуществляется службой СДЭК/EMS. 

			Важно: размер таможенных пошлин определяется законодательством той страны, в которую осуществляется доставка. 
			
			Заказы, оформленные международной доставкой, возврату и обмену не подлежат.	
		`,
        price: 2000,
        id: 5,
    },
];

const sngCountrys = [
    'азербайджан',
    'армения',
    'беларусь',
    'казахстан',
    'кырзызстан',
    'молдова',
    'таджикистан',
    'туркмения',
    'туркменистан',
    'узбекистан',
    'грузия',
];

const deliveryItemsGlobal: {
    title: string;
    description: string;
    price: number;
    id: number;
}[] = [
    {
        title: 'Международная доставка',
        description: `
			<span style="color: #838383;">Стоимость доставки — 6000₽</span>
		
			Международная доставка осуществляется службой EMS. 

			Важно: условия оплаты и размер таможенных пошлин определяются таможенным законодательством страны, в которую осуществляется доставка.
		`,
        price: 6000,
        id: 6,
    },
];

const OrderFormDelivery: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoggedIn } = useAuthUser();

    const {
        address: { country, city },
    } = useTypedSelector(({ order }) => order);

    const [currentCountry_lowerCase, setCurrentCountry_lowerCase] = React.useState<string>('');
    const [currentCity_lowerCase, setCurrentCity_lowerCase] = React.useState<string>('');

    React.useEffect(() => {
        setCurrentCountry_lowerCase(country.title.toLocaleLowerCase());
        setCurrentCity_lowerCase(city.title.toLocaleLowerCase());
    }, [country, city]);

    const onClickSetCurrentDelivery = (delivery: { title: string; price: number; id: number }) => {
        dispatch(setOrderCurrentDelivery(delivery));
    };

    return (
        <div className="order-form-block order-form-block-delivery">
            <h3 className="order-form-block__title">Варианты доставки</h3>

            <div className="order-form-block-checkboxs-wrapper">
                {currentCountry_lowerCase === 'россия' && currentCity_lowerCase.indexOf('москва') !== -1
                    ? deliveryItemsRussiaMoscow.map((item, index) => (
                          <div
                              className={getClassNames('order-form-block-checkbox', {
                                  hidden: !isLoggedIn && item.title === 'Доставка с примеркой (по Москве)',
                              })}
                              key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
                              onClick={() =>
                                  onClickSetCurrentDelivery({
                                      title: item.title,
                                      price: item.price,
                                      id: item.id,
                                  })
                              }
                          >
                              <Field
                                  component={RenderRadioSelect}
                                  label={item.title}
                                  description={item.description}
                                  type="radio"
                                  name="delivery"
                                  value={item.title}
                              />
                          </div>
                      ))
                    : null}

                {currentCountry_lowerCase === 'россия' && currentCity_lowerCase.indexOf('москва') == -1
                    ? deliveryItemsRussia.map((item, index) => (
                          <div
                              className="order-form-block-checkbox"
                              key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
                              onClick={() =>
                                  onClickSetCurrentDelivery({
                                      title: item.title,
                                      price: item.price,
                                      id: item.id,
                                  })
                              }
                          >
                              <Field
                                  component={RenderRadioSelect}
                                  label={item.title}
                                  description={item.description}
                                  type="radio"
                                  name="delivery"
                                  value={item.title}
                              />
                          </div>
                      ))
                    : null}

                {sngCountrys.find((country) => country == currentCountry_lowerCase)
                    ? deliveryItemsSng.map((item, index) => (
                          <div
                              className="order-form-block-checkbox"
                              key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
                              onClick={() =>
                                  onClickSetCurrentDelivery({
                                      title: item.title,
                                      price: item.price,
                                      id: item.id,
                                  })
                              }
                          >
                              <Field
                                  component={RenderRadioSelect}
                                  label={item.title}
                                  description={item.description}
                                  type="radio"
                                  name="delivery"
                                  value={item.title}
                              />
                          </div>
                      ))
                    : null}

                {['россия', ...sngCountrys].find((country) => country === currentCountry_lowerCase)
                    ? null
                    : deliveryItemsGlobal.map((item, index) => (
                          <div
                              className="order-form-block-checkbox"
                              key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
                              onClick={() =>
                                  onClickSetCurrentDelivery({
                                      title: item.title,
                                      price: item.price,
                                      id: item.id,
                                  })
                              }
                          >
                              <Field
                                  component={RenderRadioSelect}
                                  label={item.title}
                                  description={item.description}
                                  type="radio"
                                  name="delivery"
                                  value={item.title}
                              />
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default OrderFormDelivery;
