// next.config.mjs
import nextI18NextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */ 
const nextConfig = {
    images: {
        domains: ['cdn-icons-png.flaticon.com'],
    },
    ...nextI18NextConfig, // Integrate i18n configuration
};

export default nextConfig;
