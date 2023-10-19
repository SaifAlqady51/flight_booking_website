/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    env: {
        AIRLABS_API_KEY: process.env.AIRLABS_API_KEY,
    },
};

module.exports = nextConfig;
