export const getClassNames = (defaultClasses: string, dynamicClasses: { [className: string]: boolean }) => {
    if (Object.keys(dynamicClasses).length === 0) {
        return '';
    }

    const result: string[] = [defaultClasses];

    for (const key in dynamicClasses) {
        if (dynamicClasses[key]) {
            result.push(key);
        }
    }

    return result.join(' ');
};
