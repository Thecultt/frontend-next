'use client';

import React from 'react';

import { VISIT_AVAILABLE } from '@/constants/app';
import { LS_KEYS } from '@/constants/keys';
import { useLS } from '@/hooks/useLS';

import { HeaderTopMessageVisit } from './HeaderTopMessageVisit';
import { HeaderTopMessageSubscribe } from './HeaderTopMessageSubscribe';

const HeaderTopMessage: React.FC = () => {
    const [headerVisitMessageClosed, setHeaderVisitMessage] = useLS(LS_KEYS.headerVisitMessage, false);
    const [headerSubscribeMessageClosed, setHeaderSubscribeMessage] = useLS(LS_KEYS.headerSubscribeMessage, false);

    if (VISIT_AVAILABLE && !headerVisitMessageClosed) {
        return <HeaderTopMessageVisit onClose={() => setHeaderVisitMessage(true)} />;
    }

    if (!headerSubscribeMessageClosed) {
        return <HeaderTopMessageSubscribe onClose={() => setHeaderSubscribeMessage(true)} />;
    }

    return null;
};

export default HeaderTopMessage;
