import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // config.js ou .env.local

  // API Strapi
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:1337',
  apiToken: '979d0b2a6ed133b83344bb83a700a0b7816feb2f739e9a24882154ee7d9c4bde537055ee19aa6c7b157cf1ebfdc3ba18f1cf98dd041ae831d2a53ccb144c540a1de8a9a9ec47247156dab0051ab578a85b8d7c6956ac3040705279fb9f7496e54f07ecfda3e54613fc9943c1e277d67d866c11db5e5e2dd321998806c815930f',

  // Locales
  i18n: {
    locales: ['default', 'fr', 'en', 'es', 'it', 'de'],
    defaultLocale: "default"
  },
  trailingSlash: true,

  // Images
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
