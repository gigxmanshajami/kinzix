/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // 👈 add this line
    },
};
export default nextConfig;
