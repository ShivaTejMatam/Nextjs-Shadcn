import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "html.tailus.io",
        protocol: "https",
        pathname: "/blocks/customers/**",
      },
    ],
  },
};

export default nextConfig;
