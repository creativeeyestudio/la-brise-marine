import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // config.js ou .env.local
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
  },

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
