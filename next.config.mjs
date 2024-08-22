/** @type {import('next').NextConfig} */

import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "**",
          port: "1337",
          pathname: "/uploads/**/*",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
      ],
    },
    webpack: (config) => {
      config.resolve.alias = {
       ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
       };
      return config;
      },
  };
  
  export default nextConfig;