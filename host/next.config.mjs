import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
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
        remotes: {},
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
