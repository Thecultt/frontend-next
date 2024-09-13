import { Noop } from '@/types/functions';

export interface PopupContent {
    title: string;
    content: React.ReactNode;
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
