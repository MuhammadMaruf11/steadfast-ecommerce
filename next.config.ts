import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "157.230.240.97",
        port: "8888", // 👈 include port if needed
        pathname: "/storage/media/**",
      },
    ],
  },
};

export default nextConfig;
