/** @type {import('next').NextConfig} */

import { withPlausibleProxy } from "next-plausible";

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default withPlausibleProxy({
  customDomain: "https://plausible.eclair.ec-lyon.fr",
})(nextConfig);
