import React from 'react';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { sendNewWaitingListItem } from '@/redux/actions/waiting';
import { Popup, WaitingListCreateForm, WaitingListCreateSuccess } from '@/components';
import { useWaitingData } from '@/hooks/catalog/useWaitingData';
import { WaitingPopupType } from '@/types/waiting';
import { useHash } from '@/hooks/useHash';

const WaitingListCreate: React.FC = React.memo(() => {
    const dispatch = useDispatch();

    const pathname = usePathname();
    const { hash, changeHash, removeHash } = useHash();

    const [state, setState] = React.useState(false);
    const [type, setType] = React.useState(WaitingPopupType.Form);
    const [isChange, setIsChange] = React.useState(false);

    const { removeWaitingData } = useWaitingData();

    React.useEffect(() => {
        const hashType = hash ? (hash as WaitingPopupType) : null;

        if (hashType && Object.values(WaitingPopupType).includes(hashType)) {
            if (state) {
                setIsChange(true);

                setTimeout(() => {
                    setType(hashType);
                    setIsChange(false);
                }, 190);
            } else {
                setState(true);
                setIsChange(false);
                setType(hashType);
            }
        } else {
            setState(false);
        }
    }, [hash, pathname]);

    const onSubmit = (data: any) => {
        dispatch(
            sendNewWaitingListItem(
                {
                    category: data.category,
                    subcategory: data.type,
                    brand: data.brand,
                    model_name: data.model,
                    size: data.size,
                },
                () => changeHash(WaitingPopupType.Success),
            ) as any,
        );
    };

    const closeFunc = () => {
        setState(false);
        removeWaitingData();
        removeHash();
    };

    const content: Record<WaitingPopupType, React.ReactNode> = {
        [WaitingPopupType.Form]: <WaitingListCreateForm onSubmit={onSubmit} />,
        [WaitingPopupType.Success]: <WaitingListCreateSuccess />,
    };

    return (
        <Popup state={state} setState={closeFunc} stateContent={!isChange}>
            {content[type]}
        </Popup>
    );
});

export default WaitingListCreate;
