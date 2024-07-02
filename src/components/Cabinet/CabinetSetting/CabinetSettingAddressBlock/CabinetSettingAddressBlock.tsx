import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { fetchOrderAddressCountrys, fetchOrderAddressCitys, fetchOrderAddressStreet } from '@/redux/actions/order';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RenderInput, RenderInputHints, RenderTextarea } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';

const CabinetSettingAddressBlock: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const dispatch = useDispatch();

    const { globalCountrys, globalCitys, globalStreets } = useTypedSelector(({ order }) => order);

    // const {
    //     user: { country, city, street, house, flat, comment },
    //     isSending,
    // } = useTypedSelector(({ user }) => user);
    const {
        isSending,
        user: { country, city, street, house, flat, comment },
    } = useAuthUser();

    const [state, setState] = React.useState<boolean>(country !== '' || country !== null ? true : false);
    const [isEdit, setIsEdit] = React.useState<boolean>(country === '' || country === null ? true : false);

    const [currentCountry, setCurrentCountry] = React.useState<{
        title: string;
        value: string;
    }>({ title: '', value: '' });
    const [currentCity, setCurrentCity] = React.useState<{
        title: string;
        value: string;
    }>({ title: '', value: '' });

    React.useEffect(() => {
        initialize({
            country,
            city,
            street,
            house,
            flat,
            comment,
        });
    }, [isEdit]);

    React.useEffect(() => {
        if (!isSending) {
            setIsEdit(false);
        }
    }, [isSending]);

    const toggleState = () => {
        setState(!state);
    };

    const onChangeCountrys = (query: string) => {
        dispatch(fetchOrderAddressCountrys(query) as any);
    };

    const onChangeCitys = (query: string) => {
        dispatch(fetchOrderAddressCitys(query, currentCountry.value) as any);
    };

    const onChangeStreets = (query: string) => {
        dispatch(fetchOrderAddressStreet(query, currentCity.value) as any);
    };

    // React.useEffect(() => {
    // 	initialize({
    // 		country: currentCountry.title,
    // 		city: currentCity.title,
    // 		street: "",
    // 		dom: "",
    // 		flat: "",
    // 		comm: "",
    // 	})
    // }, [currentCountry, currentCity])

    return (
        <form onSubmit={handleSubmit} className={getClassNames('cabinet-setting-block', { active: state })}>
            <div className="cabinet-setting-block-title">
                <h3 className="cabinet-setting-block-title__title">Адрес</h3>

                {/* {state ? (
					<>
						<button type="submit" className={`cabinet-setting-block-title__btn ${invalid || pristine || submitting ? "disabled" : ""}`}>
							Сохранить
						</button>
						<button type="button" className="cabinet-setting-block-title__btn" onClick={() => setState(false)}>
							Отменить
						</button>
					</>
				) : null} */}

                {state ? (
                    isEdit ? (
                        <>
                            <button
                                type="submit"
                                className={getClassNames('cabinet-setting-block-title__btn', {
                                    disabled: invalid || pristine || submitting,
                                })}
                            >
                                Сохранить
                            </button>

                            <button
                                type="button"
                                className="cabinet-setting-block-title__btn"
                                onClick={() => setIsEdit(!isEdit)}
                            >
                                Отменить
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            className="cabinet-setting-block-title__btn"
                            onClick={() => setIsEdit(true)}
                        >
                            Изменить
                        </button>
                    )
                ) : null}
            </div>

            {state ? (
                <div
                    className={getClassNames('cabinet-setting-block-form', {
                        active: isEdit,
                    })}
                >
                    <div className="cabinet-setting-block-form-input-wrapper">
                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                            <Field
                                component={RenderInputHints}
                                type="text"
                                label="Страна"
                                name="country"
                                hints={globalCountrys}
                                onChangeCustom={onChangeCountrys}
                                onSaveValue={(value: { title: string; value: string }) => setCurrentCountry(value)}
                            />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
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

                        <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
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

                        <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
                            <Field component={RenderInput} name="house" label="Дом" bgWhite />
                        </div>

                        <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
                            <Field component={RenderInput} name="flat" label="Квартира" bgWhite />
                        </div>

                        {/* <div
							className="cabinet-setting-block-form-input"
							style={{ width: "49%" }}
						>
							<Select items={["Россия"]} label="Страна" />
						</div>

						<div
							className="cabinet-setting-block-form-input"
							style={{ width: "49%" }}
						>
							<Select items={["Москва"]} label="Город" />
						</div>

						<div
							className="cabinet-setting-block-form-input"
							style={{ width: "32%" }}
						>
							<Input type="text" name="" label="Улица" bgWhite />
						</div>

						<div
							className="cabinet-setting-block-form-input"
							style={{ width: "32%" }}
						>
							<Input type="text" name="" label="Дом" bgWhite />
						</div>

						<div
							className="cabinet-setting-block-form-input"
							style={{ width: "32%" }}
						>
							<Input
								type="text"
								name=""
								label="Квартира"
								bgWhite
							/>
						</div> */}

                        <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                            <Field component={RenderTextarea} name="comment" label="Комментарий" bgWhite />
                        </div>
                    </div>
                </div>
            ) : (
                <button className="cabinet-setting-block-form-add__btn" onClick={() => setState(true)}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="30" height="30" rx="6" fill="#F7F4F0" />
                        <path
                            d="M15 8.5V22.5"
                            stroke="#838383"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 15.5H22"
                            stroke="#838383"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Добавить новый адрес
                </button>
            )}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'cabinet-setting-address-form',
    // validate,
})(CabinetSettingAddressBlock);
