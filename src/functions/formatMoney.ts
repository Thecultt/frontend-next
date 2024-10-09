/**
 * Return formatted money (RUB)
 * @param value
 * @returns
 */
export const formatMoney = (value: number | null | undefined) => {
    const sum = value || 0;

    try {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
        }).format(sum);
    } catch {
        return `${sum.toLocaleString('ru-RU')}₽`;
    }
};
