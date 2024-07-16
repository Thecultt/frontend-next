// TODO events to enum

export const pushDataLayer = (event: string, data?: object) => {
    if (typeof window === 'undefined' || !window.dataLayer) {
        console.error('pushDataLayer: window = undefined or window.dataLayer not found');
        return;
    }

    window.dataLayer.push({
        ecommerce: null,
    });
    window.dataLayer.push({
        event,
        ecommerce: {
            timestamp: Math.floor(Date.now() / 1000),
            ...data,
        },
    });
};
