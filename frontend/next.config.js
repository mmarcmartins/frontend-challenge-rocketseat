/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/xesque-dev/challenge-images/',
      },
    ],
  },
  compiler: {
    styledComponents: {
      displayName: false,
    },
  }
}

module.exports = nextConfig
