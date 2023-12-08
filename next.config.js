const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    reactRemoveProperties: {
      properties: ["&data-testid"],
    },
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

module.exports = withVanillaExtract(nextConfig);
