/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.idus.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
