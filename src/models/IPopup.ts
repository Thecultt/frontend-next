import { Noop } from '@/types/functions';

export interface PopupContent {
    content: React.ReactNode;
    title?: React.ReactNode;
    beforeTitle?: React.ReactNode;
    subtitle?: React.ReactNode;
    btn?: {
        label: string;
        href?: string;
        onClick?: Noop;
    };
    callbackClose?: Noop;
}

export interface IPopup extends PopupContent {
    isOpen: boolean;
}
