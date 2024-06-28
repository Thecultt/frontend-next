/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/cabinet',
                destination: '/cabinet/history',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
