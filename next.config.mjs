/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  output: "export",
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default withPlausibleProxy({
  customDomain: "https://plausible.eclair.ec-lyon.fr",
})(nextConfig);
