import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { CabinetSellStepKeys } from '@/redux/types/ICabinetSell';
import { setCabinetSellCurrentStep } from '@/redux/actions/cabinet_sell';
import { fetchOrderAddressCitys, fetchOrderAddressStreet } from '@/redux/actions/order';
import { SellBackBtn, SellDeliveryTypes, Loader, RenderInputHints, RenderInput, RenderTextarea } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

import { APP_ROUTE, EXTERNAL_LINKS } from '@/constants/routes';
import { DeliveryTypes } from '@/constants/sell';

import validate from './validate';

const SellDelivery: React.FC<{} & InjectedFormProps<{}, {}>> = ({ handleSubmit, invalid, submitting, initialize }) => {
    const dispatch = useDispatch();

    const [currentCity, setCurrentCity] = React.useState<{
        title: string;
        value: string;
    }>({ title: '', value: '' });
    const [currentTypeDelivery, setCurrentTypeDelivery] = React.useState(DeliveryTypes.courier);

    const { user } = useAuthUser();

    const { globalCitys, globalStreets } = useTypedSelector(({ order }) => order);
    const { isSending } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    const onChangeCitys = (query: string) => {
        dispatch(fetchOrderAddressCitys(query, 'Россия') as any);
    };

    const onChangeStreets = (query: string) => {
        dispatch(fetchOrderAddressStreet(query, currentCity.value) as any);
    };

    React.useEffect(() => {
        // TODO: Вынести в const
        if (currentCity.title.toLocaleLowerCase().indexOf('москва') !== -1) {
            setCurrentTypeDelivery(DeliveryTypes.courier);
        } else {
            setCurrentTypeDelivery(DeliveryTypes.cdek);
        }
    }, [currentCity]);

    React.useEffect(() => {
        localStorage.setItem('sell-info-global-type-delivery', currentTypeDelivery);
    }, [currentTypeDelivery]);

    React.useEffect(() => {
        if (user.city !== '') {
            initialize({
                ...user,
            });
        } else {
            initialize({
                city: currentCity.title,
                street: '',
                house: '',
                flat: '',
                comm: '',
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className="sell-block sell-block-delivery">
            <SellBackBtn onClick={() => dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.CONTACT))} />

            <h3 className="sell-block__title">Cпособ отправки товара</h3>
            <p className="sell-block__subtitle">Выберите город, из которого товар будет отправлен к нам в офис.</p>

            <div className="sell-block-input-wrapper-wrapper">
                <div className="sell-block-select">
                    <Field
                        component={RenderInputHints}
                        type="text"
                        label="Город"
                        name="city"
                        hints={globalCitys}
                        bgWhite
                        onChangeCustom={onChangeCitys}
                        onSaveValue={(item: { title: string; value: string }) => setCurrentCity(item)}
                    />
                </div>
            </div>

            {currentCity.title !== '' ? (
                <>
                    <SellDeliveryTypes
                        currentCity={currentCity.title}
                        currentTypeDelivery={currentTypeDelivery}
                        setCurrentTypeDelivery={(value: DeliveryTypes) => setCurrentTypeDelivery(value)}
                    />

                    {currentTypeDelivery === 'Лично в офис' ? (
                        <div className="sell-block-delivery-message">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p className="sell-block-delivery-message__text">
                                Для посещения офиса THE CULTT необходима предварительная регистрация поcле отправки
                                заявки.{' '}
                            </p>
                        </div>
                    ) : (
                        <div className="sell-block-delivery-form">
                            <h5 className="sell-block-delivery-form__title">Адрес</h5>

                            <div className="sell-block-input-wrapper-wrapper">
                                <div className="sell-block-input-wrapper">
                                    <div className="sell-block-input" style={{ width: '100%' }}>
                                        <Field
                                            component={RenderInputHints}
                                            type="text"
                                            label="Улица"
                                            name="street"
                                            hints={globalStreets}
                                            onChangeCustom={onChangeStreets}
                                            bgWhite
                                        />
                                    </div>

                                    <div className="sell-block-input" style={{ width: '49%' }}>
                                        <Field component={RenderInput} name="house" label="Дом" bgWhite />
                                    </div>

                                    <div className="sell-block-input" style={{ width: '49%' }}>
                                        <Field component={RenderInput} name="flat" label="Квартира" bgWhite />
                                    </div>

                                    <div className="sell-block-input" style={{ width: '100%' }}>
                                        <Field component={RenderTextarea} name="comment" label="Комментарий" bgWhite />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : null}

            <p className="sell-block__policy">
                Нажимая кнопку, вы принимаете условия{' '}
                <a href={EXTERNAL_LINKS.personalData}>обработки персональных данных</a> и{' '}
                <Link href={APP_ROUTE.help.sellers}>условия продажи</Link>
            </p>

            {isSending ? (
                <button className="btn disabled loader sell-block__btn" disabled>
                    <Loader />
                </button>
            ) : (
                <button
                    className={getClassNames('btn sell-block__btn', {
                        disabled: submitting,
                    })}
                    disabled={submitting}
                >
                    Отправить заявку
                </button>
            )}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'sell-delivery-form',
    validate,
})(SellDelivery);
