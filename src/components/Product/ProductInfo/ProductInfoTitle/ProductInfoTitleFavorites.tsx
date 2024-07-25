'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';

import { ProductPage } from '@/models/IProduct';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useRegLog } from '@/hooks/useRegLog';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { sendRemoveFavorite, sendSaveFavorite } from '@/redux/actions/favorites';
import { MEDIA_SIZES } from '@/constants/styles';

interface Props {
    productData: ProductPage;
}

export const ProductInfoTitleFavorites: React.FC<Props> = ({ productData }) => {
    const {
        id,
        article,
        price,
        old_price,
        store_price,
        condition,
        manufacturer,
        name,
        availability,
        images,
        category,
        subcategory,
        shoe_size,
        size,
        is_trial,
        from_boutique,
        from_parnter,
        price_drop,
        num_of_favorites,
    } = productData;

    const dispatch = useDispatch();
    const { isLoggedIn } = useAuthUser();
    const { login } = useRegLog();

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);
    const inFavorites = React.useMemo(() => !!favoritesItems[id], [favoritesItems, id]);

    const [inLocalFavorites, setInLocalFavorites] = React.useState(inFavorites);

    const addOrRemoveToFavorite = () => {
        if (!isLoggedIn) {
            login();
            return;
        }

        if (inLocalFavorites) {
            setInLocalFavorites(false);
            dispatch(
                sendRemoveFavorite({
                    id,
                    article,
                    price,
                    old_price,
                    store_price,
                    condition,
                    manufacturer,
                    name,
                    availability,
                    images,
                    num_of_favorites,
                    category,
                    subcategory,
                    shoe_size,
                    size,
                    is_trial,
                    from_boutique,
                    from_parnter,
                    price_drop,
                }) as any,
            );
            return;
        }

        setInLocalFavorites(true);
        dispatch(
            sendSaveFavorite({
                id,
                article,
                price,
                old_price,
                store_price,
                condition,
                manufacturer,
                name,
                availability,
                images,
                num_of_favorites,
                category,
                subcategory,
                shoe_size,
                size,
                is_trial,
                from_boutique,
                from_parnter,
                price_drop,
            }) as any,
        );
    };

    React.useEffect(() => {
        setInLocalFavorites(inFavorites);
    }, [inFavorites]);

    if (!isMobile) {
        return (
            <button
                type="button"
                className={`btn product-content-info-title-btn__btn fav ${inLocalFavorites ? 'btn' : 'btn-regular'}`}
                onClick={addOrRemoveToFavorite}
            >
                {inLocalFavorites ? 'В избранном' : 'В избранное'}
                {inLocalFavorites ? (
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.1279 0.666687C11.5501 0.666687 10.1687 1.34518 9.30757 2.49205C8.44647 1.34518 7.06503 0.666687 5.48723 0.666687C4.23127 0.668103 3.02716 1.16766 2.13907 2.05575C1.25097 2.94385 0.751416 4.14796 0.75 5.40391C0.75 10.7524 8.68027 15.0816 9.01799 15.2604C9.107 15.3083 9.2065 15.3334 9.30757 15.3334C9.40865 15.3334 9.50814 15.3083 9.59715 15.2604C9.93487 15.0816 17.8651 10.7524 17.8651 5.40391C17.8637 4.14796 17.3642 2.94385 16.4761 2.05575C15.588 1.16766 14.3839 0.668103 13.1279 0.666687ZM9.30757 14.0226C7.91238 13.2096 1.97251 9.5062 1.97251 5.40391C1.97372 4.47213 2.34441 3.57885 3.00329 2.91997C3.66216 2.2611 4.55544 1.89041 5.48723 1.8892C6.97334 1.8892 8.22107 2.68077 8.74216 3.95218C8.78821 4.06429 8.86656 4.16018 8.96723 4.22767C9.06791 4.29515 9.18637 4.33118 9.30757 4.33118C9.42877 4.33118 9.54724 4.29515 9.64791 4.22767C9.74859 4.16018 9.82693 4.06429 9.87298 3.95218C10.3941 2.67848 11.6418 1.8892 13.1279 1.8892C14.0597 1.89041 14.953 2.2611 15.6119 2.91997C16.2707 3.57885 16.6414 4.47213 16.6426 5.40391C16.6426 9.50009 10.7012 13.2089 9.30757 14.0226Z"
                            fill="white"
                        />
                    </svg>
                ) : (
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0188 0C12.2976 0 10.7905 0.740174 9.85116 1.9913C8.91177 0.740174 7.40475 0 5.68351 0C4.31338 0.00154431 2.9998 0.546512 2.03097 1.51534C1.06214 2.48418 0.517169 3.79775 0.515625 5.16789C0.515625 11.0026 9.16683 15.7254 9.53525 15.9204C9.63236 15.9727 9.7409 16 9.85116 16C9.96142 16 10.07 15.9727 10.1671 15.9204C10.5355 15.7254 19.1867 11.0026 19.1867 5.16789C19.1852 3.79775 18.6402 2.48418 17.6714 1.51534C16.7025 0.546512 15.3889 0.00154431 14.0188 0ZM9.85116 14.5701C8.32913 13.6832 1.84927 9.64311 1.84927 5.16789C1.8506 4.15139 2.25498 3.1769 2.97376 2.45813C3.69253 1.73936 4.66701 1.33497 5.68351 1.33365C7.30473 1.33365 8.66588 2.19718 9.23435 3.58418C9.28459 3.70648 9.37005 3.81109 9.47988 3.88471C9.58971 3.95832 9.71894 3.99763 9.85116 3.99763C9.98338 3.99763 10.1126 3.95832 10.2224 3.88471C10.3323 3.81109 10.4177 3.70648 10.468 3.58418C11.0364 2.19468 12.3976 1.33365 14.0188 1.33365C15.0353 1.33497 16.0098 1.73936 16.7286 2.45813C17.4473 3.1769 17.8517 4.15139 17.853 5.16789C17.853 9.63644 11.3715 13.6824 9.85116 14.5701Z" />
                    </svg>
                )}
            </button>
        );
    }

    return (
        <button type="button" className="product-info-favorites-mobile" onClick={addOrRemoveToFavorite}>
            {inLocalFavorites ? (
                <svg
                    className="product-info-favorites-mobile__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1652 5.81395C12.08 5.91643 11.92 5.91643 11.8348 5.81395C10.9096 4.70151 9.55664 4 8.04951 4C5.26074 4 3 6.40188 3 9.36476C3 11.9459 4.11824 14.0017 4.94784 15.2238C5.83667 16.5332 6.87291 17.5809 7.61229 18.2599C10.1389 20.58 13.8611 20.58 16.3877 18.2599C17.1271 17.5809 18.1633 16.5332 19.0522 15.2238C19.8818 14.0017 21 11.9459 21 9.36476C21 6.40188 18.7393 4 15.9505 4C14.4434 4 13.0904 4.70151 12.1652 5.81395Z"
                        fill="#285141"
                        stroke="#285141"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ) : (
                <svg
                    className="product-info-favorites-mobile__icon"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2736 6.7827C12.1884 6.88518 12.0284 6.88518 11.9432 6.7827C11.018 5.67026 9.66504 4.96875 8.1579 4.96875C5.36914 4.96875 3.1084 7.37063 3.1084 10.3335C3.1084 12.9147 4.22664 14.9704 5.05624 16.1925C5.94507 17.5019 6.98131 18.5497 7.72069 19.2286C10.2473 21.5488 13.9695 21.5488 16.4961 19.2286C17.2355 18.5497 18.2717 17.5019 19.1606 16.1925C19.9902 14.9704 21.1084 12.9147 21.1084 10.3335C21.1084 7.37063 18.8477 4.96875 16.0589 4.96875C14.5518 4.96875 13.1988 5.67026 12.2736 6.7827Z"
                        stroke="#282828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            )}
        </button>
    );
};
