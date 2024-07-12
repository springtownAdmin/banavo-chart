/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        INSTANCE_API: 'https://backend.holbox.ai/',
    },
    images: {
        domains: ['d22d9wm4wefphp.cloudfront.net', 'image.shoplc.com'],
    }
};

export default nextConfig;