/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dr9kwlfuq/**',
      },
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
