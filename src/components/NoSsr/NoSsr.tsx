'use client';

import React from 'react';
import { useIsClient } from 'usehooks-ts';

interface Props extends React.PropsWithChildren {
    fallback?: React.ReactNode;
}

const NoSsr: React.FC<Props> = ({ children, fallback = null }) => {
    const isClient = useIsClient();

    return <>{isClient ? children : fallback}</>;
};

// export default dynamic(() => Promise.resolve(NoSsr), {
//     ssr: false,
// });

export default NoSsr;
