/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: process.env.BUILD_DIR || '.next',
    images: {
        remotePatterns: [
            {
                hostname: 'storage.yandexcloud.net',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/cabinet',
                destination: '/cabinet/history',
                permanent: true,
            },
            {
                source: '/cabinet/sell',
                destination: '/sell-create',
                permanent: true,
            },
            {
                source: '/help',
                destination: '/help/all',
                permanent: true,
            },
            {
                source: '/help/public-offerte',
                destination: '/public-offer',
                permanent: true,
            },
            {
                source: '/help/user-agreement',
                destination: '/user-agreement',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
