import React from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
    fetchOrderAddressCountrys,
    fetchOrderAddressCitys,
    setOrderAddressContry,
    setOrderAddressCity,
} from '@/redux/actions/order';
import { RenderInputHints } from '@/components';

const OrderFormCountry: React.FC = () => {
    const dispatch = useDispatch();

    const {
        globalCountrys,
        globalCitys,
        address: { country },
    } = useTypedSelector(({ order }) => order);

    const onChangeCountrys = (query: string) => {
        dispatch(fetchOrderAddressCountrys(query) as any);
    };

    const onChangeCitys = (query: string) => {
        dispatch(fetchOrderAddressCitys(query, country.value) as any);
    };

    return (
        <div className="order-form-block">
            <h3 className="order-form-block__title">Страна и город доставки</h3>

            <div className="order-form-block-inputs-wrapper">
                <div className="order-form-block-input" style={{ width: '49%' }}>
                    <Field
                        component={RenderInputHints}
                        type="text"
                        label="Страна"
                        name="country"
                        hints={globalCountrys}
                        onChangeCustom={onChangeCountrys}
                        onSaveValue={(value: { title: string; value: string }) =>
                            dispatch(setOrderAddressContry(value))
                        }
                    />
                </div>

                <div className="order-form-block-input" style={{ width: '49%' }}>
                    <Field
                        component={RenderInputHints}
                        type="text"
                        label="Город"
                        name="city"
                        hints={globalCitys}
                        onChangeCustom={onChangeCitys}
                        disabled={country.title && country.title !== '' ? false : true}
                        onSaveValue={(value: { title: string; value: string }) => dispatch(setOrderAddressCity(value))}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderFormCountry;
