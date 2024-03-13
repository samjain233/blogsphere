/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/samjain233/blog-server/main/images/**",
      },
      {
        hostname: 'source.unsplash.com'
      },
    ],
  },
};

module.exports = nextConfig;
