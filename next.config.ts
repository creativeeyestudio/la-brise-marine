import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // config.js ou .env.local

  // Locales
  i18n: {
    locales: ['default', 'fr', 'en'],
    defaultLocale: "default"
  },
  trailingSlash: true,

  // Images
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '172.22.224.1',
        port: '1337',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
