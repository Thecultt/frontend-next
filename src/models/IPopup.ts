import { Noop } from '@/types/functions';

export interface PopupContent {
    content: React.ReactNode;
    title?: React.ReactNode;
    btn?: {
        label: string;
        href?: string;
        onClick?: Noop;
    };
    callbackClose?: Noop;
}

export interface Popup extends PopupContent {
    isOpen: boolean;
}
