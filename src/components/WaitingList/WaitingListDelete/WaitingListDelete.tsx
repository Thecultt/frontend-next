'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { usePathname, useSearchParams } from 'next/navigation';

import { sendDeleteWaitingListItem } from '@/redux/actions/waiting';
import { Popup, WaitingListDeleteConfirm } from '@/components';
import { useHash } from '@/hooks/useHash';
import { SEARCH_PARAMS_KEYS } from '@/constants/keys';

const WaitingListDelete: React.FC = () => {
    const dispatch = useDispatch();

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { hash, removeHash } = useHash();

    const [state, setState] = React.useState(false);
    const [isChange, setIsChange] = React.useState(false);

    React.useEffect(() => {
        if (hash === 'delete_waiting') {
            if (state) {
                setIsChange(true);

                setTimeout(() => {
                    setIsChange(false);
                }, 190);
            } else {
                setState(true);
                setIsChange(false);
            }
        } else {
            setState(false);
        }
    }, [hash, pathname]);

    const handleClose = () => {
        setState(false);
        removeHash();
    };

    const handleSubmit = () => {
        const id = searchParams.get(SEARCH_PARAMS_KEYS.id);
        if (id) {
            dispatch(sendDeleteWaitingListItem(id, removeHash) as any);
        }
    };

    return (
        <Popup state={state} setState={handleClose} stateContent={!isChange}>
            <WaitingListDeleteConfirm onSubmit={handleSubmit} onClose={handleClose} />
        </Popup>
    );
};

export default WaitingListDelete;
