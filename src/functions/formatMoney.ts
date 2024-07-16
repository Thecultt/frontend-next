/**
 * Return formatted money (RUB)
 * @param value
 * @returns
 */
export const formatMoney = (value = 0) => {
    try {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
        }).format(value);
    } catch {
        return `${value.toLocaleString('ru-RU')}₽`;
    }
};
