import React from 'react';
import dynamic from 'next/dynamic';

const NoSsr: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
    ssr: false,
});
