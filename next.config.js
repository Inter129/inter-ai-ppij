/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/api/chat",
        destination:
          "https://builder.pingpong.us/api/builder/pingpong/chat/demo",
      },
    ];
  },
};

module.exports = nextConfig;
