import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'mfeshared',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            host: `host@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
            decide: `decide@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
            checkout: `checkout@http://localhost:3003/_next/static/chunks/remoteEntry.js`,
            blogs: `blogs@http://localhost:3004/_next/static/chunks/remoteEntry.js`,
          },
          exposes: {},
          shared: {},
          extraOptions: {
            enableImageLoaderFix: true,
            enableUrlLoaderFix: true,
          }
        })
      );
    }
    return config;
  },
};

export default nextConfig;
