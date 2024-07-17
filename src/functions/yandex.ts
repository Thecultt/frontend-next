import { YANDEX_METRIC_ID } from '@/constants/env';

export const sendReachGoal = (event: string) => {
    const ym = window.ym || (window.ym = []);
    if (!ym) {
        console.error('sendReachGoal', 'ym not found');
    }

    ym(YANDEX_METRIC_ID, 'reachGoal', event);
};
