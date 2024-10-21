'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { CONTACTS } from '@/constants/contacts';
import { sendConciergeProductApplication } from '@/redux/actions/concierge';
import { Button } from '@/shared/ui';
import { FormikInput, FormikTextarea } from '@/shared/form';

import { IConciergeProductFormValues, INITIAL_VALUES, SCHEMA } from './validate';

interface Props {
    id: string;
}

const ConciergeProductForm: React.FC<Props> = ({ id }) => {
    const dispatch = useDispatch();

    const { isSendFormProductPage } = useTypedSelector(({ concierge }) => concierge);
    const { user } = useAuthUser();

    const initialValues: IConciergeProductFormValues = {
        ...INITIAL_VALUES,
        name: user.name ?? '',
        phone: user.phone ?? '',
    };

    const sendForm = (data: IConciergeProductFormValues) => {
        dispatch(sendConciergeProductApplication(data, +id) as any);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={SCHEMA} onSubmit={sendForm} enableReinitialize>
            {({ isValid, handleSubmit }) => (
                <Form className="concierge-product-form" onSubmit={handleSubmit}>
                    <h2 className="concierge-product-form__title">Консультация с менеджером THE CULTT</h2>

                    <p className="concierge-product-form__description">
                        Заполните заявку, и мы свяжемся с вами в течение 24 часов. Наш менеджер ответит на любые вопросы
                        о желаемом лоте, доставке, условиях и сроках, или поможет с выбором
                    </p>

                    <div className="concierge-product-form-input">
                        <FormikInput label="Имя" name="name" />
                    </div>

                    <div className="concierge-product-form-input">
                        <FormikInput label="Контактный номер телефона" name="phone" type="tel" />
                    </div>

                    <div className="concierge-product-form-input">
                        <FormikTextarea label="Комментарий к заявке" name="comment" />
                    </div>

                    <div className="concierge-product-form-btn">
                        <Button
                            type="submit"
                            label="Отправить заявку"
                            className="concierge-product-form-btn__btn"
                            disabled={isSendFormProductPage || !isValid}
                        />

                        <a
                            href={CONTACTS.whatsappLinkConcierge}
                            target="__blank"
                            className="concierge-product-form-btn__social"
                        >
                            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="4" width="48" height="48" rx="24" fill="white" />
                                <path
                                    d="M35.7942 19.8427C34.7807 18.824 33.5734 18.0163 32.2429 17.4667C30.9123 16.9171 29.4851 16.6367 28.0445 16.6417C22.0083 16.6417 17.0887 21.5367 17.0887 27.5426C17.0887 29.4676 17.5972 31.3376 18.548 32.9876L17.0002 38.6416L22.8043 37.1236C24.4073 37.9926 26.2093 38.4546 28.0445 38.4546C34.0806 38.4546 39.0002 33.5596 39.0002 27.5536C39.0002 24.6386 37.8615 21.8997 35.7942 19.8427ZM28.0445 36.6066C26.4083 36.6066 24.8053 36.1666 23.4012 35.3416L23.0696 35.1436L19.6203 36.0456L20.5379 32.7016L20.3168 32.3606C19.4078 30.9163 18.9251 29.2468 18.9239 27.5426C18.9239 22.5486 23.0143 18.4787 28.0334 18.4787C30.4656 18.4787 32.754 19.4247 34.4676 21.1407C35.3161 21.981 35.9885 22.9806 36.4458 24.0814C36.9032 25.1822 37.1364 26.3625 37.1319 27.5536C37.154 32.5476 33.0636 36.6066 28.0445 36.6066ZM33.0414 29.8306C32.7651 29.6986 31.4163 29.0386 31.1731 28.9396C30.9188 28.8516 30.742 28.8076 30.554 29.0716C30.3661 29.3466 29.8465 29.9626 29.6917 30.1386C29.5369 30.3256 29.3711 30.3476 29.0947 30.2046C28.8183 30.0726 27.9339 29.7756 26.8947 28.8516C26.0766 28.1256 25.5349 27.2346 25.3691 26.9596C25.2143 26.6846 25.347 26.5416 25.4907 26.3986C25.6123 26.2776 25.7671 26.0796 25.8997 25.9256C26.0324 25.7716 26.0877 25.6506 26.1761 25.4746C26.2646 25.2876 26.2203 25.1336 26.154 25.0016C26.0877 24.8696 25.5349 23.5276 25.3138 22.9776C25.0927 22.4497 24.8605 22.5156 24.6947 22.5047H24.1641C23.9761 22.5047 23.6887 22.5706 23.4344 22.8456C23.1912 23.1206 22.4837 23.7806 22.4837 25.1226C22.4837 26.4646 23.4676 27.7626 23.6002 27.9386C23.7329 28.1256 25.5349 30.8756 28.2766 32.0526C28.9289 32.3386 29.4374 32.5036 29.8354 32.6246C30.4877 32.8336 31.0847 32.8006 31.56 32.7346C32.0907 32.6576 33.1852 32.0746 33.4063 31.4366C33.6384 30.7986 33.6384 30.2596 33.561 30.1386C33.4837 30.0176 33.3178 29.9626 33.0414 29.8306Z"
                                    fill="#285141"
                                />
                            </svg>
                        </a>

                        <a href={CONTACTS.tgHelp} target="__blank" className="concierge-product-form-btn__social">
                            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="4" width="48" height="48" rx="24" fill="white" />
                                <path
                                    d="M28 16.6416C21.928 16.6416 17 21.5696 17 27.6416C17 33.7136 21.928 38.6416 28 38.6416C34.072 38.6416 39 33.7136 39 27.6416C39 21.5696 34.072 16.6416 28 16.6416ZM33.104 24.1216C32.939 25.8596 32.224 30.0836 31.861 32.0306C31.707 32.8556 31.399 33.1306 31.113 33.1636C30.475 33.2186 29.991 32.7456 29.375 32.3386C28.407 31.7006 27.857 31.3046 26.922 30.6886C25.833 29.9736 26.537 29.5776 27.164 28.9396C27.329 28.7746 30.145 26.2116 30.2 25.9806C30.2076 25.9456 30.2066 25.9093 30.197 25.8748C30.1875 25.8403 30.1696 25.8086 30.145 25.7826C30.079 25.7276 29.991 25.7496 29.914 25.7606C29.815 25.7826 28.275 26.8056 25.272 28.8296C24.832 29.1266 24.436 29.2806 24.084 29.2696C23.688 29.2586 22.94 29.0496 22.379 28.8626C21.686 28.6426 21.147 28.5216 21.191 28.1366C21.213 27.9386 21.488 27.7406 22.005 27.5316C25.217 26.1346 27.351 25.2106 28.418 24.7706C31.476 23.4946 32.103 23.2746 32.521 23.2746C32.609 23.2746 32.818 23.2966 32.95 23.4066C33.06 23.4946 33.093 23.6156 33.104 23.7036C33.093 23.7696 33.115 23.9676 33.104 24.1216Z"
                                    fill="#285141"
                                />
                            </svg>
                        </a>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ConciergeProductForm;
