/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.licdn.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://joshuamoorexyz.vercel.app/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
