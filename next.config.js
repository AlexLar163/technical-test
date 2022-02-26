/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "https://github.com/AlexLar163/technical-test.git" : "",
};

module.exports = nextConfig;
