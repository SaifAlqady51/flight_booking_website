/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
        AIRLABS_API_KEY: process.env.AIRLABS_API_KEY,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        URL: process.env.URL,
    },
};

module.exports = nextConfig;
