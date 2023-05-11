/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
    ],
  },
};