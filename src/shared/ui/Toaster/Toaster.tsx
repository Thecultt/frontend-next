'use client';

import React from 'react';
import toast, { Toaster as HotToaster, ToastOptions } from 'react-hot-toast';

import { XIcon } from '@/assets/icons';
import { Noop } from '@/types/functions';

import './styles.sass';

interface Props {
    text: string;
    status?: 'success' | 'error';
    onClose?: Noop;
}

const Toast: React.FC<Props> = ({ text, status = 'success', onClose }) => (
    <div className="tc-toast">
        {status === 'success' ? (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="20" height="20" rx="10" fill="#0E402C" />
                <path
                    d="M14.25 7.5L9.09375 12.6562L6.75 10.3125"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ) : (
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20.5" width="20" height="20" rx="10" transform="rotate(-180 20 20.5)" fill="#9A1A1A" />
                <path
                    d="M10.0067 5.14613L10.0067 10.5008M10.0067 15.8555H9.99333"
                    stroke="#F1EDE8"
                    strokeWidth="2.4096"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        )}

        <div className="tc-toast__text">
            <h5 className="tc-toast__title">{text}</h5>
            {status === 'error' && <p className="tc-toast__subtitle">Пожалуйста, перезагрузите страницу</p>}
        </div>

        <button type="button" className="tc-toast__button" onClick={onClose}>
            <XIcon className="tc-toast__x-icon" />
        </button>
    </div>
);

export const showToast = {
    success: (message: string, options?: ToastOptions) =>
        toast((t) => <Toast text={message} onClose={() => toast.dismiss(t.id)} />, options),
    error: (message: string, options?: ToastOptions) =>
        toast((t) => <Toast text={message} status="error" onClose={() => toast.dismiss(t.id)} />, options),
};

export const Toaster = () => (
    <HotToaster
        position="top-right"
        toastOptions={{
            duration: 2000,
            style: {
                width: '100%',
                maxWidth: 400,
                padding: 0,
                boxShadow: 'none',
                background: 'none',
            },
        }}
    />
);
