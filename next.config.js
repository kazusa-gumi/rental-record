const withTM = require('next-transpile-modules')(['gridstack']);

module.exports = withTM({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 他の必要なカスタマイズを追加

    return config;
  },
});