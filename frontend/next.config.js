/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/xesque-dev/challenge-images/**',
      },
    ],
  },
  compiler: {
    styledComponents: {
      displayName: false,
    },
  },
  env: {
    GRAPHQL_HOST: process.env.NEXT_PUBLIC_GRAPHQL_HOST 
  } 
}

module.exports = nextConfig
