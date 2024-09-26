/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ["images.unsplash.com", "plus.unsplash.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.exercise.com',
                port: '',
                pathname: '/blog/wp-content/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'blog.o2fitnessclubs.com',
                port: '',
                pathname: '/hs-fs/hubfs/**'
            },
            {
                protocol: 'https',
                hostname: 'axisfitness.co.uk',
                port: '',
                pathname: '/wp-content/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                port: '',
                pathname: '/s/files/**'
            },
            {
                protocol: 'https',
                hostname: 'images.herzindagi.info',
                port: '',
                pathname: '/image/2022/May/**'
            },
            {
                protocol: 'https',
                hostname: 'clearskyibogaine.com',
                port: '',
                pathname: '/wp-content/uploads/2020/04/**'
            },
        ]
    }
};

export default nextConfig;
