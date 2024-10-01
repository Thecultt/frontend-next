'use client';

import React from 'react';

import { Button } from '@/components';
import { ShareIcon } from '@/assets/icons';
import { useAuthUser } from '@/hooks/useAuthUser';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { sendReachGoal } from '@/functions/yandex';
import { usePopupInfo } from '@/hooks/usePopupInfo';

const CabinetFavoritesSharePopupContent = ({ url }: { url: string }) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const handleClickCopyUrl = () => {
        navigator.clipboard.writeText(url);
        sendReachGoal('share_link_favorites');
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 10000);
    };

    return (
        <>
            <p className="cabinet-favorites-share-popup__subtitle">Отправьте эту ссылку вашим друзьям</p>
            <p className="cabinet-favorites-share-popup__link">{url}</p>
            <Button
                label={isCopied ? 'Скопировано' : 'Скопировать ссылку'}
                theme={isCopied ? 'light' : 'dark'}
                onClick={handleClickCopyUrl}
                wide
            />
        </>
    );
};

const CabinetFavoritesShare: React.FC = () => {
    const { user } = useAuthUser();
    const { openPopupInfo } = usePopupInfo();

    const url = `${APP_PROD_DOMAIN}/favorites/${user.user_wishlist_link}?utm_source=website&utm_medium=favorites&utm_campaign=selection`;

    const handleShareFavoritesClick = () => {
        sendReachGoal('click_share_favorites');
        openPopupInfo({
            title: 'Поделитесь желаниями',
            content: <CabinetFavoritesSharePopupContent url={url} />,
        });
    };

    return (
        <Button
            className="cabinet-favorites__share"
            label="Поделиться Избранным"
            size="m"
            theme="light"
            icon={<ShareIcon />}
            onClick={handleShareFavoritesClick}
            wide
        />
    );
};

export default CabinetFavoritesShare;
