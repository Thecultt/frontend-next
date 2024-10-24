type ITouchedFields<T extends object> = {
    [key in keyof T]: boolean;
};

export const prepareFormikFiledTouched = <V extends object>(values: V) =>
    Object.keys(values).reduce((acc, fieldName) => {
        acc[fieldName as keyof V] = true;
        return acc;
    }, {} as ITouchedFields<V>);
