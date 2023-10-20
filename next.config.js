/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()];
        }
        return config;
    },
    env: {
        AIRLABS_API_KEY: process.env.AIRLABS_API_KEY,
    },
};

module.exports = nextConfig;
