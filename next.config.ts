import type { NextConfig } from "next";

/* GitHub Pages serves under /Portfolio. Expose the same value to
   the client (NEXT_PUBLIC_BASE_PATH) so the asset() helper can prefix
   plain <img>/url() references that Next won't rewrite automatically. */
const basePath = "/Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
