const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const isProd = process.env.NODE_ENV === "production";

/** type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    reactRemoveProperties: isProd && {
      properties: ["&data-testid"],
    },
    removeConsole: isProd && {
      exclude: ["error", "warn"],
    },
  },
};

module.exports = withVanillaExtract(nextConfig);
