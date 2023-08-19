/** @type {import('next').NextConfig} */
const nextConfig = {
  swcPlugins: [["next-superjson-plugin", {}]],
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
