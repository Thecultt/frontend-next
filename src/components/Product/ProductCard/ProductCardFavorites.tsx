import React from 'react';
import { useDispatch } from 'react-redux';

import { Product } from '@/models/IProduct';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useRegLog } from '@/hooks/useRegLog';
import { sendRemoveFavorite, sendSaveFavorite } from '@/redux/actions/favorites';

interface Props {
    productData: Product;
}

export const ProductCardFavorites: React.FC<Props> = ({ productData }) => {
    const { id, num_of_favorites } = productData;

    const dispatch = useDispatch();
    const { isLoggedIn } = useAuthUser();
    const { login } = useRegLog();

    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);
    const { inFavorites, count } = React.useMemo(() => {
        if (favoritesItems[id]) {
            return {
                inFavorites: true,
                count: (favoritesItems[id]?.num_of_favorites as number) || num_of_favorites,
            };
        }

        return {
            inFavorites: false,
            count: num_of_favorites,
        };
    }, [favoritesItems, id, num_of_favorites]);

    const [inLocalFavorites, setInLocalFavorites] = React.useState(inFavorites);
    const [localCount, setLocalCount] = React.useState(count);

    const addOrRemoveToFavorite = () => {
        if (!isLoggedIn) {
            login();
            return;
        }

        if (inLocalFavorites) {
            setInLocalFavorites(false);
            setLocalCount((state) => state - 1);
            dispatch(sendRemoveFavorite(productData) as any);
            return;
        }

        setInLocalFavorites(true);
        setLocalCount((state) => state + 1);
        dispatch(sendSaveFavorite(productData) as any);
    };

    React.useEffect(() => {
        setInLocalFavorites(inFavorites);
    }, [inFavorites]);

    return (
        <button type="button" className="product-card-favorites" onClick={addOrRemoveToFavorite}>
            {inLocalFavorites ? (
                <svg
                    className="product-card-favorites__icon"
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
                    className="product-card-favorites__icon"
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

            <span className="product-card-favorites__count">{localCount}</span>
        </button>
    );
};
