/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {},
  images: {
    domains: ["media.rawg.io"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
