const { withContentCollections } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com", protocol: "https", port: "" },
      { hostname: "github.com", protocol: "https", port: "" },
    ],
  },
};

// withContentCollections must be the outermost plugin
module.exports = withContentCollections(nextConfig);
