import { Noop } from '@/types/functions';

export interface PopupInfo {
    title: string;
    content: React.ReactNode;
    btn?: string;
    onClose?: Noop;
}
