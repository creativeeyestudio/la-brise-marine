import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // config.js ou .env.local

  // API Strapi
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:1337',
  apiToken: '5577e6e776fbdda8f7d5455f87734ecbe1b1889a06faebe50f547fdbdf20df7582b69be62ac9714e8c3fe5346cf85a87b45bae8097b8a9c50f95768e6e477239ef61b350c86b9c999de9c950835da047406c8e1df4d83ae404b09570a5fe48b2b87cabe9838bd471047f7bbb8aa3f7d96efe2230ccf6d272f72bad7ec20fa354',

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
    ],
  },

};

export default nextConfig;
