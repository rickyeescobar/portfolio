import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    dynamicIO: true,
  },
  /* config options here */
};

export default nextConfig;
