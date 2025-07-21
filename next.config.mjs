/** @type {import('next').NextConfig} */
export default (phase) => {
  reactStrictMode: false;
  const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: "2048mb",
      },
    },
    images: {
      domains: ["208.72.36.40"],
    },
  };
  return nextConfig;
};
