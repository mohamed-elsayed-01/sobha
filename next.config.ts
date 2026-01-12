import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  basePath: "/bashayer-apartment-alhudayriat",
  assetPrefix: "/bashayer-apartment-alhudayriat/",
};

export default nextConfig;
