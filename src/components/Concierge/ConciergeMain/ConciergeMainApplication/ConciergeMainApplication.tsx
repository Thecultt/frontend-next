import React from 'react';

import ConciergeMainApplicationForm from './ConciergeMainApplicationForm';

import ConciergeMainImage from '@/assets/images/concierge/concierge-main.jpg';

const ConciergeMainApplication: React.FC = () => {
    return (
        <div className="concierge-application" id="concierge-application">
            <div
                className="concierge-application-image"
                style={{
                    backgroundImage: `url("${ConciergeMainImage.src}")`,
                }}
            />

            <ConciergeMainApplicationForm />
        </div>
    );
};

export default ConciergeMainApplication;
