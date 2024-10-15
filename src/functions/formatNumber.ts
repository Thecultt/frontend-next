/**
 * Return formatted number
 * @param value
 * @returns
 */
export const formatNumber = (value: number | null | undefined) => {
    const sum = value || 0;

    try {
        return new Intl.NumberFormat('ru-RU', {
            maximumFractionDigits: 0,
        }).format(sum);
    } catch {
        return sum.toLocaleString('ru-RU');
    }
};
