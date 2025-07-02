/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // 👈 add this line
    },
    experimental: {
        middleware: true,
    },
};
export default nextConfig;
