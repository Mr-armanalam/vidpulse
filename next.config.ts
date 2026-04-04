import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  serverExternalPackages: ["uploadthing", "@uploadthing/react", "@uploadthing/mime-types"],
  turbopack: {
    rules: {
      // Force Turbopack to treat these files as static assets
      '*.md': { as: 'asset' },
      '*.d.cts': { as: 'asset' },
    },
  },
  };

export default nextConfig;
