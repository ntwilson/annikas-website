import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  turbopack: { root: './' },
};

export default nextConfig;
