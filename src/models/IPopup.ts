import { Noop } from '@/types/functions';

export interface PopupContent {
    title: string;
    content: React.ReactNode;
    btn?: string;
    callbackClose?: Noop;
}

export interface Popup extends PopupContent {
    isOpen: boolean;
}
