'use client';

import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';

import { formatMoney } from '@/functions/formatMoney';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { sendFormAuctionProduct } from '@/redux/actions/cinema_artistic';
import { EXTERNAL_LINKS } from '@/constants/routes';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Loader } from '@/components';
import { FormikInput } from '@/shared/form';

import { AuctionFieldName, getValidationSchema, IAuctionForm, INITIAL_VALUES } from './validate';

interface Props {
    productId: string;
    currentBid: number;
}

export const CinemaAuctionProductForm: React.FC<Props> = ({ productId, currentBid }) => {
    const dispatch = useDispatch();

    const [isSent, setIsSent] = React.useState(false);

    const { formIsLoading } = useTypedSelector(({ cinema_artistic }) => cinema_artistic);
    const { user } = useAuthUser();

    const minBid = currentBid + 5000;
    const validationSchema = getValidationSchema(minBid);
    const initialValues: IAuctionForm = {
        ...INITIAL_VALUES,
        [AuctionFieldName.Fio]: (user?.fullname as string) ?? INITIAL_VALUES[AuctionFieldName.Fio],
        [AuctionFieldName.Phone]: (user?.phone as string) ?? INITIAL_VALUES[AuctionFieldName.Phone],
    };

    const handleFormSubmit = (values: IAuctionForm, { resetForm }: FormikHelpers<IAuctionForm>) => {
        dispatch(
            sendFormAuctionProduct(
                productId,
                {
                    ...values,
                    bid: values[AuctionFieldName.Bid].toString(),
                },
                () => {
                    resetForm();
                    setIsSent(true);
                },
            ) as any,
        );
    };

    return (
        <div className="cinema-auction-product-form">
            <div
                className={getClassNames('cinema-auction-product-form__wrapper', {
                    sent: isSent,
                })}
            >
                <h3 className="cinema-auction-product-form__title">Сделать ставку</h3>
                <p className="cinema-auction-product-form__description">
                    Заполните заявку, чтобы участвовать в аукционе. Ваша ставка должна быть выше текущей цены на
                    5&nbsp;000&nbsp;₽ и более. Вам придёт уведомление, как только ставка будет принята, а также если
                    кто-то перебьёт вашу ставку.
                </p>

                <div className="cinema-auction-product-form__price">
                    <span className="cinema-auction-product-form__price-title">Текущая стоимость лота: </span>
                    <span className="cinema-auction-product-form__price-value">{formatMoney(currentBid)}</span>
                </div>

                {isSent ? (
                    <button className="btn cinema-auction-product-form__btn" disabled>
                        Спасибо, ваша ставка принята!
                    </button>
                ) : (
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                        enableReinitialize
                    >
                        {({ isValid, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormikInput
                                    name={AuctionFieldName.Fio}
                                    className="cinema-auction-product-form__input"
                                    label="ФИО"
                                    placeholder="ФИО"
                                />
                                <FormikInput
                                    name={AuctionFieldName.Phone}
                                    type="tel"
                                    className="cinema-auction-product-form__input"
                                    label="Телефон"
                                    placeholder="Номер телефона"
                                />
                                <FormikInput
                                    name={AuctionFieldName.Bid}
                                    type="number"
                                    className="cinema-auction-product-form__input"
                                    label="Ставка"
                                    placeholder={formatMoney(minBid)}
                                />
                                <button
                                    type="submit"
                                    className="btn cinema-auction-product-form__btn"
                                    disabled={!isValid || formIsLoading}
                                >
                                    {formIsLoading ? <Loader /> : 'Сделать ставку'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                )}
            </div>

            <div
                className={getClassNames('cinema-auction-product-form__agreement', {
                    sent: isSent,
                })}
            >
                Нажимая кнопку, я принимаю условия{' '}
                <a
                    href="https://storage.yandexcloud.net/the-cultt-docs/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B0%D1%83%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    договора купли-продажи
                </a>{' '}
                и даю свое{' '}
                <a href={EXTERNAL_LINKS.personalData} target="_blank" rel="noopener noreferrer">
                    согласие на обработку персональных данных
                </a>
                .
            </div>
        </div>
    );
};
