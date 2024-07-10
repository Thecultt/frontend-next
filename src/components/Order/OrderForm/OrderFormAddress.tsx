import React from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchOrderAddressStreet, setOrderAddressStreet } from '@/redux/actions/order';
import { RenderInputHints, RenderInput, RenderTextarea } from '@/components';

const OrderFormAddress: React.FC = () => {
    const dispatch = useDispatch();

    const {
        globalStreets,
        address: { city },
    } = useTypedSelector(({ order }) => order);

    const onChangeStreets = (query: string) => {
        dispatch(fetchOrderAddressStreet(query, city.value) as any);
    };

    return (
        <div className="order-form-block">
            <h3 className="order-form-block__title">Адрес</h3>

            <div className="order-form-block-inputs-wrapper">
                <div className="order-form-block-input" style={{ width: '32.5%' }}>
                    <Field
                        component={RenderInputHints}
                        type="text"
                        label="Улица"
                        name="street"
                        hints={globalStreets}
                        onChangeCustom={onChangeStreets}
                        onSaveValue={(value: { title: string; value: string }) =>
                            dispatch(setOrderAddressStreet(value))
                        }
                    />
                </div>

                <div className="order-form-block-input" style={{ width: '32.5%' }}>
                    <Field component={RenderInput} type="text" name="house" label="Дом" />
                </div>

                <div className="order-form-block-input" style={{ width: '32.5%' }}>
                    <Field component={RenderInput} type="text" name="flat" label="Квартира" />
                </div>

                <div className="order-form-block-input" style={{ width: '100%' }}>
                    <Field
                        component={RenderTextarea}
                        name="comment"
                        label="Комментарий (желаемые дата и время доставки; комментарии курьеру и т.д.)"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderFormAddress;
