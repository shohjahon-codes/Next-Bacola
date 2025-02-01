/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                port: '8000',
                hostname: 'localhost',
                pathname: '/media/**',
            },
            {
                protocol: 'https',
                hostname: 'klbtheme.com',
                port: '',
                pathname: '/**',
            },
        ],
        domains: ['klbtheme.com', 'localhost', '127.0.0.1'],
    },
    reactStrictMode: false,
}

module.exports = nextConfig 