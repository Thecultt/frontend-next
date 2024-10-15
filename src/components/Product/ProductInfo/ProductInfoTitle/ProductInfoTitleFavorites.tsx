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
import { Button } from '@/shared/ui';
import { HeartIcon } from '@/assets/icons';

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
                    price: price ?? 0,
                    old_price: old_price ?? 0,
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
                price: price ?? 0,
                old_price: old_price ?? 0,
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

    return (
        <Button
            type="button"
            className={!isMobile ? 'product-content-info-title-btn__btn fav' : undefined}
            theme={inLocalFavorites ? 'dark' : 'light'}
            label={!isMobile ? (inLocalFavorites ? 'В избранном' : 'В избранное') : undefined}
            icon={<HeartIcon />}
            onClick={addOrRemoveToFavorite}
        />
    );
};
