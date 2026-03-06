import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import { _remote } from './utils/urlConfigs.js';

/** @type {import('import').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const env = process.env;
    const argv = { name: 'wrangler' };

    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'mfeshared',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            host: _remote('host', env, argv),
            decide: _remote('decide', env, argv),
            checkout: _remote('checkout', env, argv),
            blogs: _remote('blogs', env, argv),
          },
          exposes: {
            './ThemeProvider': './components/ThemeProvider.js',
            './ErrorBoundary': './components/ErrorBoundary.js',
          },
          shared: {
            react: { singleton: true, requiredVersion: false },
            'react-dom': { singleton: true, requiredVersion: false },
            '@reduxjs/toolkit': { singleton: true, requiredVersion: false },
            'react-redux': { singleton: true, requiredVersion: false },
            'redux-persist': { singleton: true, requiredVersion: false },
            'js-cookie': { singleton: true, requiredVersion: false },
          },
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
