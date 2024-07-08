import React from 'react';
import { Metadata } from 'next/types';

import { Contact } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const ContactPage = () => <Contact />;

export default ContactPage;
