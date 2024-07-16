interface PathOptions {
    pathname?: string;
    search?: string;
    hash?: string;
}

export const getPath = ({ pathname = '/', search, hash }: PathOptions) => {
    let url = pathname;

    if (search) {
        url += search.startsWith('?') ? search : `?${search}`;
    }

    if (hash) {
        url += hash.startsWith('#') ? hash : `#${hash}`;
    }

    return url;
};
