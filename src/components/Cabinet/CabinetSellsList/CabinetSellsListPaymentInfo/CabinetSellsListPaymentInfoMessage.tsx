import React from 'react';

import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';

const CabinetSellsListPaymentInfoMessage: React.FC = () => {
    const dispatch = useAppDispatch();

    const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);

    const onSubmit = (data: any) => {
        dispatch(updateClientAttributes({ ...data, callbackSuccess: () => setIsOpenPopup(false) }) as any);
    };

    return (
        <>
            <div className="cabinet-sells-list-payment-info-message">
                <h4 className="cabinet-sells-list-payment-info-message__title">
                    Мы обновляем сайт, чтобы сделать его удобнее
                </h4>

                <p className="cabinet-sells-list-payment-info-message__description">
                    Мы стараемся сделать это быстро и незаметно, но возможны сбои в отображении сделок по продаже ваших
                    лотов. По всем техническим вопросам всегда можно обратиться в telegram{' '}
                    <a href="https://t.me/thecultt_help_it">@thecultt_help_it</a>.
                </p>

                {/* <button className="cabinet-sells-list-payment-info-message__btn" onClick={() => setIsOpenPopup(true)}>Заполнить данные</button> */}
            </div>

            {/* <div className='cabinet-sells-list-payment-info-message'>
				<h4 className="cabinet-sells-list-payment-info-message__title">
					Мы обновляем сайт, чтобы сделать его удобнее
				</h4>

				<p className="cabinet-sells-list-payment-info-message__description">
					Для проведения выплаты за проданные товары необходимо заполнить анкету с паспортными данными и банковскими реквизитами.
				</p>

				<button className="cabinet-sells-list-payment-info-message__btn" onClick={() => setIsOpenPopup(true)}>Заполнить данные</button>
			</div>

			<Popup state={isOpenPopup} setState={() => setIsOpenPopup(!isOpenPopup)}>
				<CabinetSellsListPaymentInfoPopupForm onSubmit={onSubmit} />
			</Popup> */}
        </>
    );
};

export default CabinetSellsListPaymentInfoMessage;
