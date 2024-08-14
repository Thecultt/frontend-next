import React from 'react';
import { useDispatch } from 'react-redux';

import { sendConciergeProductCustomApplication } from '@/redux/actions/concierge';

import ConciergeMainApplicationForm from './ConciergeMainApplicationForm';

import ConciergeMainImage from '@/assets/images/concierge/concierge-main-form.jpg';

const ConciergeMainApplication: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmitProductCustomApplication = (data: any) => {
        dispatch(sendConciergeProductCustomApplication(data) as any);
    };

    return (
        <div className="concierge-application" id="concierge-application">
            <div
                className="concierge-application-image"
                style={{
                    backgroundImage: `url("${ConciergeMainImage.src}")`,
                }}
            />

            <ConciergeMainApplicationForm onSubmit={onSubmitProductCustomApplication} />
        </div>
    );
};

export default ConciergeMainApplication;
