import clsExtended from "@cls-extended/core/adapters/webpack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(clsExtended());
    return config;
  },
};

export default nextConfig;
