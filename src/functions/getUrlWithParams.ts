import qs from 'qs';

export const getUrlWithParams = (root: string, params: object) =>
    `${root}${qs.stringify(params, {
        arrayFormat: 'comma',
        skipNulls: true,
        addQueryPrefix: true,
        encodeValuesOnly: true,
    })}`;
