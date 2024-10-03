import React from 'react';

import { Spinner } from '@/shared/ui/Spinner/Spinner';

import './styles.sass';

export const PageLoader: React.FC = () => (
    <div className="tc-page-loader">
        <Spinner />
    </div>
);
