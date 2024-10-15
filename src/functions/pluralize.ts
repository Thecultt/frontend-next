import { formatNumber } from './formatNumber';

/**
 * @param {Number} n
 * @param {Array<String>} forms
 * @returns {String}
 */
export const pluralize = (n: number, forms: [string, string, string]): string => {
    const getForm = () => {
        if (n % 10 === 1 && n % 100 !== 11) {
            return forms[0] ?? '';
        }

        if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
            return forms[1] ?? '';
        }

        return forms[2] ?? '';
    };

    return `${formatNumber(n)} ${getForm()}`;
};
