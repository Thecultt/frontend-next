import { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => {
    return {
        short_name: 'THECULTT',
        name: 'Ресейл-платформа культовых сумок | THECULTT',
        start_url: '.',
        display: 'standalone',
        theme_color: '#285141',
        background_color: '#ffffff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
};

export default manifest;
