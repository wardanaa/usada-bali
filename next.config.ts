import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // `next/image` Un-configured Host
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
