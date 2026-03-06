import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import { _remote } from '../mfe-shared/utils/urlConfigs.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const env = process.env;
    const argv = { name: 'wrangler' }; // Default brand name for example

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './LandingPage': './components/LandingPage.js',
          './SharedButton': './components/SharedButton.js',
          './store': './store/store.js',
          './dataSlice': './store/dataSlice.js',
          './ReduxProvider': './store/ReduxProvider.js',
          './Navbar': './components/Navbar.js',
          './Header': './components/Header.js',
        },
        remotes: {
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
