import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'blogs',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Blogs': './components/Blogs.jsx',
        },
        remotes: {
          host: `host@http://localhost:3001/_next/static/${options.isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
        extraOptions: {
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        }
      })
    );
    return config;
  },
};

export default nextConfig;
