export const MEDIA_SIZES_NUMBERS = {
    tablet: 1200,
    tabletExtra: 1250,
} as const;

type MediaSizesKeys = keyof typeof MEDIA_SIZES_NUMBERS;

type MediaSizes = {
    [K in MediaSizesKeys]: `${(typeof MEDIA_SIZES_NUMBERS)[K]}px`;
};

export const MEDIA_SIZES: MediaSizes = Object.entries(MEDIA_SIZES_NUMBERS).reduce(
    (acc, [key, value]) => ({
        ...acc,
        [key as MediaSizesKeys]: `${value}px`,
    }),
    {} as MediaSizes,
);
