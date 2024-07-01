import React from 'react';

import { Popup } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { APP_PROD_DOMAIN } from '@/constants/app';

const CabinetFavoritesShare: React.FC = () => {
    const { user } = useAuthUser();

    const [statePopup, setStatePopup] = React.useState(false);
    const [statePopupCopy, setStatePopupCopy] = React.useState(false);

    const url = `${APP_PROD_DOMAIN}/favorites/${user.user_wishlist_link}?utm_source=website&utm_medium=favorites&utm_campaign=selection`;

    const onClickCopyUrl = () => {
        navigator.clipboard.writeText(url);
        setStatePopupCopy(true);

        setTimeout(() => {
            setStatePopupCopy(false);
        }, 10000);
    };

    return (
        <>
            <Popup state={statePopup} setState={() => setStatePopup(!statePopup)}>
                <div className="cabinet-favorites-share-popup">
                    <h2 className="cabinet-favorites-share-popup__title">Поделитесь желаниями</h2>

                    <p className="cabinet-favorites-share-popup__subtitle">Отправьте эту ссылку вашим друзьям</p>

                    <p className="cabinet-favorites-share-popup__link">{url}</p>

                    <button
                        className={getClassNames('cabinet-favorites-share-popup__btn', {
                            btn: !statePopupCopy,
                            'btn-regular': statePopupCopy,
                        })}
                        onClick={onClickCopyUrl}
                    >
                        {statePopupCopy ? 'Скопировано' : 'Скопировать ссылку'}
                    </button>
                </div>
            </Popup>

            <button className="cabinet-favorites__share" onClick={() => setStatePopup(true)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.89417 14.4713C10.0347 14.6119 10.1137 14.8026 10.1137 15.0014C10.1137 15.2002 10.0347 15.3909 9.89417 15.5316L8.96229 16.4691C7.97681 17.4539 6.64045 18.007 5.2472 18.0065C3.85395 18.0061 2.51794 17.4522 1.53308 16.4667C0.54821 15.4812 -0.0048338 14.1449 -0.00439427 12.7516C-0.00395474 11.3584 0.549933 10.0224 1.53542 9.03751L3.79667 6.77626C4.74325 5.82892 6.01608 5.27914 7.35469 5.2394C8.6933 5.19967 9.9965 5.67299 10.9976 6.56251C11.0715 6.62801 11.1317 6.70741 11.1749 6.79619C11.2181 6.88497 11.2434 6.98139 11.2493 7.07993C11.2552 7.17848 11.2416 7.27723 11.2094 7.37054C11.1772 7.46385 11.1269 7.54989 11.0614 7.62376C10.9959 7.69763 10.9165 7.75788 10.8277 7.80106C10.7389 7.84424 10.6425 7.86951 10.5439 7.87543C10.4454 7.88135 10.3466 7.8678 10.2533 7.83556C10.16 7.80331 10.074 7.75301 10.0001 7.68751C9.28509 7.05255 8.35451 6.71473 7.39868 6.74313C6.44284 6.77153 5.53397 7.16402 4.85792 7.84032L2.59667 10.0988C1.89327 10.8022 1.4981 11.7562 1.4981 12.7509C1.4981 13.7457 1.89327 14.6997 2.59667 15.4031C3.30007 16.1065 4.25409 16.5017 5.24886 16.5017C6.24362 16.5017 7.19764 16.1065 7.90104 15.4031L8.83292 14.4713C8.90257 14.4015 8.98529 14.3462 9.07634 14.3085C9.16739 14.2707 9.26498 14.2513 9.36354 14.2513C9.46211 14.2513 9.5597 14.2707 9.65075 14.3085C9.7418 14.3462 9.82451 14.4015 9.89417 14.4713ZM16.4642 1.53376C15.4785 0.550341 14.1431 -0.00195312 12.7507 -0.00195312C11.3584 -0.00195312 10.0229 0.550341 9.03729 1.53376L8.10542 2.46657C7.96481 2.6073 7.88587 2.79813 7.88596 2.99706C7.88605 3.196 7.96516 3.38675 8.10589 3.52736C8.24662 3.66796 8.43744 3.7469 8.63638 3.74682C8.83531 3.74673 9.02606 3.66762 9.16667 3.52689L10.0985 2.59501C10.8019 1.89161 11.756 1.49644 12.7507 1.49644C13.7455 1.49644 14.6995 1.89161 15.4029 2.59501C16.1063 3.29842 16.5015 4.25244 16.5015 5.2472C16.5015 6.24196 16.1063 7.19598 15.4029 7.89939L13.1417 10.1625C12.4653 10.8384 11.5562 11.2304 10.6004 11.2583C9.64452 11.2862 8.71415 10.9478 7.99948 10.3125C7.8503 10.1802 7.65468 10.1126 7.45565 10.1246C7.25663 10.1365 7.07051 10.2271 6.93823 10.3763C6.80595 10.5254 6.73836 10.7211 6.75031 10.9201C6.76227 11.1191 6.8528 11.3052 7.00198 11.4375C8.00285 12.3273 9.30591 12.8009 10.6445 12.7615C11.9831 12.7222 13.2561 12.1727 14.2029 11.2256L16.4642 8.96439C17.4482 7.97868 18.0008 6.6428 18.0008 5.25001C18.0008 3.85722 17.4482 2.52134 16.4642 1.53564V1.53376Z"
                        fill="black"
                    />
                </svg>
                Поделиться Избранным
            </button>
        </>
    );
};

export default CabinetFavoritesShare;
