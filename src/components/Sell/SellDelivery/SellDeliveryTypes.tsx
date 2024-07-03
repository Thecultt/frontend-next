import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

interface SellDeliveryTypesProps {
    currentCity: string;
    currentTypeDelivery: string;
    setCurrentTypeDelivery: (value: string) => void;
}

// TODO вынести delivery types в enum/const

const SellDeliveryTypes: React.FC<SellDeliveryTypesProps> = ({
    currentCity,
    currentTypeDelivery,
    setCurrentTypeDelivery,
}) => {
    return (
        <div className="sell-block-delivery-types">
            {currentCity.toLocaleLowerCase().indexOf('москва') !== -1 ? (
                <>
                    <div
                        className={getClassNames('sell-block-delivery-types-block', {
                            active: currentTypeDelivery === 'Курьер',
                        })}
                        onClick={() => setCurrentTypeDelivery('Курьер')}
                    >
                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.8463 19.6154H9.0963H9.8463ZM26.7694 19.6154H27.5194H26.7694ZM16.7001 18.8654C16.2859 18.8654 15.9501 19.2012 15.9501 19.6154C15.9501 20.0296 16.2859 20.3654 16.7001 20.3654V18.8654ZM25.0771 2.01538H25.8271H25.0771ZM1.38477 0.25C0.970552 0.25 0.634766 0.585786 0.634766 1C0.634766 1.41421 0.970552 1.75 1.38477 1.75V0.25ZM9.254 20.3654C9.66821 20.3654 10.004 20.0296 10.004 19.6154C10.004 19.2012 9.66821 18.8654 9.254 18.8654V20.3654ZM5.51938 10.3077C5.51938 9.89348 5.18359 9.55769 4.76938 9.55769C4.35517 9.55769 4.01938 9.89348 4.01938 10.3077H5.51938ZM3.07707 5.32692C2.66286 5.32692 2.32707 5.66271 2.32707 6.07692C2.32707 6.49114 2.66286 6.82692 3.07707 6.82692V5.32692ZM9.8463 6.82692C10.2605 6.82692 10.5963 6.49114 10.5963 6.07692C10.5963 5.66271 10.2605 5.32692 9.8463 5.32692V6.82692ZM25.0771 5.32692C24.6629 5.32692 24.3271 5.66271 24.3271 6.07692C24.3271 6.49114 24.6629 6.82692 25.0771 6.82692V5.32692ZM34.5709 6.07692L34.5711 5.32692H34.5709V6.07692ZM35.4983 6.67938L36.1837 6.37481L36.1835 6.37438L35.4983 6.67938ZM38.5275 13.496L37.8422 13.8006L37.8425 13.8014L38.5275 13.496ZM38.6155 13.9072H39.3655L39.3655 13.9056L38.6155 13.9072ZM38.6155 18.6H39.3655H38.6155ZM37.6001 19.6154V20.3654V19.6154ZM34.3848 18.8654C33.9706 18.8654 33.6348 19.2012 33.6348 19.6154C33.6348 20.0296 33.9706 20.3654 34.3848 20.3654V18.8654ZM13.2309 23.75C14.3275 23.75 15.3791 23.3144 16.1545 22.539L15.0939 21.4783C14.5998 21.9724 13.9297 22.25 13.2309 22.25V23.75ZM16.1545 22.539C16.9299 21.7636 17.3655 20.712 17.3655 19.6154H15.8655C15.8655 20.3141 15.588 20.9843 15.0939 21.4783L16.1545 22.539ZM17.3655 19.6154C17.3655 18.5188 16.9299 17.4672 16.1545 16.6918L15.0939 17.7524C15.588 18.2465 15.8655 18.9166 15.8655 19.6154H17.3655ZM16.1545 16.6918C15.3791 15.9164 14.3275 15.4808 13.2309 15.4808V16.9808C13.9297 16.9808 14.5998 17.2583 15.0939 17.7524L16.1545 16.6918ZM13.2309 15.4808C12.1343 15.4808 11.0827 15.9164 10.3073 16.6918L11.368 17.7524C11.8621 17.2583 12.5322 16.9808 13.2309 16.9808V15.4808ZM10.3073 16.6918C9.53191 17.4672 9.0963 18.5188 9.0963 19.6154H10.5963C10.5963 18.9166 10.8739 18.2465 11.368 17.7524L10.3073 16.6918ZM9.0963 19.6154C9.0963 20.712 9.53191 21.7636 10.3073 22.539L11.368 21.4783C10.8739 20.9843 10.5963 20.3141 10.5963 19.6154H9.0963ZM10.3073 22.539C11.0827 23.3144 12.1343 23.75 13.2309 23.75V22.25C12.5322 22.25 11.8621 21.9724 11.368 21.4783L10.3073 22.539ZM30.154 23.75C31.2506 23.75 32.3022 23.3144 33.0776 22.539L32.0169 21.4783C31.5229 21.9724 30.8527 22.25 30.154 22.25V23.75ZM33.0776 22.539C33.853 21.7636 34.2886 20.712 34.2886 19.6154H32.7886C32.7886 20.3141 32.511 20.9843 32.0169 21.4783L33.0776 22.539ZM34.2886 19.6154C34.2886 18.5188 33.853 17.4672 33.0776 16.6918L32.0169 17.7524C32.511 18.2465 32.7886 18.9166 32.7886 19.6154H34.2886ZM33.0776 16.6918C32.3022 15.9164 31.2506 15.4808 30.154 15.4808V16.9808C30.8527 16.9808 31.5229 17.2583 32.0169 17.7524L33.0776 16.6918ZM30.154 15.4808C29.0574 15.4808 28.0058 15.9164 27.2304 16.6918L28.291 17.7524C28.7851 17.2583 29.4553 16.9808 30.154 16.9808V15.4808ZM27.2304 16.6918C26.455 17.4672 26.0194 18.5188 26.0194 19.6154H27.5194C27.5194 18.9166 27.797 18.2465 28.291 17.7524L27.2304 16.6918ZM26.0194 19.6154C26.0194 20.712 26.455 21.7636 27.2304 22.539L28.291 21.4783C27.797 20.9843 27.5194 20.3141 27.5194 19.6154H26.0194ZM27.2304 22.539C28.0058 23.3144 29.0574 23.75 30.154 23.75V22.25C29.4553 22.25 28.7851 21.9724 28.291 21.4783L27.2304 22.539ZM16.7001 20.3654H25.0771V18.8654H16.7001V20.3654ZM25.8271 19.6154V2.01538H24.3271V19.6154H25.8271ZM25.8271 2.01538C25.8271 1.54718 25.6411 1.09814 25.31 0.767069L24.2493 1.82773C24.2991 1.8775 24.3271 1.945 24.3271 2.01538H25.8271ZM25.31 0.767069C24.9789 0.435995 24.5299 0.25 24.0617 0.25V1.75C24.1321 1.75 24.1996 1.77796 24.2493 1.82773L25.31 0.767069ZM24.0617 0.25H1.38477V1.75H24.0617V0.25ZM9.254 18.8654H5.78477V20.3654H9.254V18.8654ZM5.78477 18.8654C5.74991 18.8654 5.7154 18.8585 5.68321 18.8452L5.10918 20.231C5.32337 20.3197 5.55294 20.3654 5.78477 20.3654V18.8654ZM5.68321 18.8452C5.65101 18.8318 5.62175 18.8123 5.59711 18.7877L4.53645 19.8483C4.70038 20.0122 4.89499 20.1423 5.10918 20.231L5.68321 18.8452ZM5.59711 18.7877C5.57247 18.763 5.55292 18.7338 5.53958 18.7016L4.15376 19.2756C4.24248 19.4898 4.37252 19.6844 4.53645 19.8483L5.59711 18.7877ZM5.53958 18.7016C5.52625 18.6694 5.51938 18.6349 5.51938 18.6H4.01938C4.01938 18.8318 4.06504 19.0614 4.15376 19.2756L5.53958 18.7016ZM5.51938 18.6V10.3077H4.01938V18.6H5.51938ZM3.07707 6.82692H9.8463V5.32692H3.07707V6.82692ZM25.0771 6.82692H34.5709V5.32692H25.0771V6.82692ZM34.5707 6.82692C34.622 6.82694 34.6722 6.84181 34.7152 6.86976L35.5324 5.61189C35.2462 5.42599 34.9123 5.32701 34.5711 5.32692L34.5707 6.82692ZM34.7152 6.86976C34.7583 6.89771 34.7923 6.93752 34.8131 6.98438L36.1835 6.37438C36.0447 6.06263 35.8186 5.79778 35.5324 5.61189L34.7152 6.86976ZM34.8129 6.98396L37.8422 13.8006L39.2129 13.1914L36.1837 6.37481L34.8129 6.98396ZM37.8425 13.8014C37.8576 13.8352 37.8655 13.8719 37.8655 13.9089L39.3655 13.9056C39.365 13.6592 39.3129 13.4156 39.2125 13.1906L37.8425 13.8014ZM37.8655 13.9072V18.6H39.3655V13.9072H37.8655ZM37.8655 18.6C37.8655 18.6349 37.8587 18.6694 37.8453 18.7016L39.2312 19.2756C39.3199 19.0614 39.3655 18.8318 39.3655 18.6H37.8655ZM37.8453 18.7016C37.832 18.7338 37.8124 18.763 37.7878 18.7877L38.8485 19.8483C39.0124 19.6844 39.1424 19.4898 39.2312 19.2756L37.8453 18.7016ZM37.7878 18.7877C37.7632 18.8123 37.7339 18.8318 37.7017 18.8452L38.2757 20.231C38.4899 20.1423 38.6845 20.0122 38.8485 19.8483L37.7878 18.7877ZM37.7017 18.8452C37.6695 18.8585 37.635 18.8654 37.6001 18.8654V20.3654C37.832 20.3654 38.0615 20.3197 38.2757 20.231L37.7017 18.8452ZM37.6001 18.8654H34.3848V20.3654H37.6001V18.8654ZM25.0771 20.3654H26.7694V18.8654H25.0771V20.3654Z"
                                fill="#202020"
                            />
                        </svg>

                        <h5 className="sell-block-delivery-types-block__title">Курьер</h5>

                        <p className="sell-block-delivery-types-block__subtitle">
                            Мы согласуем с вами удобное время и отправим курьера для забора товаров к нам в офис.
                        </p>
                    </div>

                    <div
                        className={getClassNames('sell-block-delivery-types-block', {
                            active: currentTypeDelivery === 'Лично в офис',
                        })}
                        onClick={() => setCurrentTypeDelivery('Лично в офис')}
                    >
                        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.818 10.8182C20.818 18.4545 10.9998 25 10.9998 25C10.9998 25 1.18164 18.4545 1.18164 10.8182C1.18164 8.21424 2.21605 5.71695 4.05732 3.87568C5.89859 2.03441 8.39588 1 10.9998 1C13.6038 1 16.1011 2.03441 17.9423 3.87568C19.7836 5.71695 20.818 8.21424 20.818 10.8182Z"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.9993 14.0962C12.8068 14.0962 14.272 12.631 14.272 10.8235C14.272 9.01603 12.8068 7.55078 10.9993 7.55078C9.19181 7.55078 7.72656 9.01603 7.72656 10.8235C7.72656 12.631 9.19181 14.0962 10.9993 14.0962Z"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <h5 className="sell-block-delivery-types-block__title">Лично в офис</h5>

                        <p className="sell-block-delivery-types-block__subtitle">
                            Забронируйте дату и время для посещения нашего офиса.
                        </p>
                    </div>
                </>
            ) : (
                <div
                    className={getClassNames('sell-block-delivery-types-block full', {
                        active: currentTypeDelivery === 'CDEK',
                    })}
                    onClick={() => setCurrentTypeDelivery('CDEK')}
                >
                    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.1667 17.6667L16.1667 19M16.1667 19C16.1667 19 26.1667 17 27.5 17C28.8333 17 28.8333 18.3333 27.5 19.6667C26.1667 21 21.5 25 17.5 25C13.5 25 10.8333 23 8.16667 23H1.5M16.1667 19C16.1667 19 19.1667 17 18.1667 15.6667C17.1667 14.3333 10.8333 11.6667 8.16667 11.6667C5.5 11.6667 2.83333 13.6667 1.5 15M9.5 7.66667V2.33333C9.5 1.97971 9.64048 1.64057 9.89052 1.39052C10.1406 1.14048 10.4797 1 10.8333 1H26.8333C27.187 1 27.5261 1.14048 27.7761 1.39052C28.0262 1.64057 28.1667 1.97971 28.1667 2.33333V13M15.5 1H22.1667V7H15.5V1Z"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <h5 className="sell-block-delivery-types-block__title">CDEK</h5>

                    <p className="sell-block-delivery-types-block__subtitle">
                        Мы согласуем с вами удобное время и отправим курьера СДЭК для передачи товаров к нам в офис.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SellDeliveryTypes;