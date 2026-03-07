import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import { _remote } from '../mfe-shared/utils/urlConfigs.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // Fix: resolve React from the root node_modules to avoid Module Federation
    // "Cannot find module '../node_modules/react/jsx-runtime.js'" error
    config.resolve.alias = {
      ...config.resolve.alias,
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };
    const env = process.env;
    const argv = { name: 'wrangler' };

    config.plugins.push(
      new NextFederationPlugin({
        name: 'checkout',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './OrderSummary': './components/OrderSummary.jsx',
        },
        remotes: {
          host: _remote('host', env, argv),
          mfeshared: _remote('mfeshared', env, argv),
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
    return config;
  },
};

export default nextConfig;
