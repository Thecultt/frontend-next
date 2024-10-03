import React from 'react';

import { Spinner } from '@/shared/ui/Spinner/Spinner';

import './styles.sass';

export const FullscreenLoader: React.FC = () => (
    <div className="tc-fullscreen-loader">
        <Spinner />
    </div>
);
