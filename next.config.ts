import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.sabinpaudel.com.np",
          },
        ],
        destination: "https://sabinpaudel.com.np/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
