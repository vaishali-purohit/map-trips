/* eslint-disable @typescript-eslint/no-var-requires */
const { getWebpackConfig } = require('ocular-dev-tools');
const webpack = require('webpack');

// eslint-disable-next-line no-undef
module.exports = (env) => {
  const config = getWebpackConfig(env);

  config.resolve = { ...config.resolve, extensions: ['.ts', '.tsx', '.js', '.json'] };

  config.module.rules = [
    ...config.module.rules.filter((r) => r.loader !== 'babel-loader'),
    {
      // Compile source using babel
      test: /(\.js|\.ts|\.tsx)$/,
      loader: 'babel-loader',
      exclude: [/node_modules/],
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'last 2 chrome versions' }],
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: './src/App',
      loader: require.resolve('babel-loader'),
      options: {
        ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
      },
    },
    {
      test: /\.(js|mjs)$/,
      exclude: /@babel(?:\/|\\{1,2})runtime/,
      loader: require.resolve('babel-loader'),
      options: {
        ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
      },
    },
  ];

  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      __MAPBOX_TOKEN__: JSON.stringify(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN), // eslint-disable-line
    }),
  ]);

  if (env.mode === 'size') {
    // Only measure self bundle size
    config.externals = ['mapbox-gl'];
  }

  return config;
};
