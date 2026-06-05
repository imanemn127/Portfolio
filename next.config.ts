import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  /* GitHub Pages serves from /Portfolio/ */
  basePath:    isProd ? "/Portfolio" : "",
  assetPrefix: isProd ? "/Portfolio/" : "",
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
