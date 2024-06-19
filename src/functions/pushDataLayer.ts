export const pushDataLayer = <T>(event: string, data?: { [key: string]: T }) => {
    window?.dataLayer?.push({
        ecommerce: null,
    }); // Clear the previous ecommerce object.

    window?.dataLayer?.push({
        event,
        ecommerce: {
            timestamp: Math.floor(Date.now() / 1000),
            ...data,
        },
    });
};
