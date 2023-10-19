/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.infrastructureLogging = { debug: /PackFileCache/ };
        return config;
    },
    env: {
        AIRLABS_API_KEY: process.env.AIRLABS_API_KEY,
    },
};

module.exports = nextConfig;
