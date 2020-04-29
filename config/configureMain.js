const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')

const appPath = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appPath, relativePath)
const appSrcPath = resolveApp('src')

function configureMain (callback) {
  //
  const defaultConfig = {
    stories: [
      '../src/storybook/**/*.stories.tsx',
      '../src/storybook/**/*.story.tsx',
    ],
    addons: [
      '@storybook/preset-typescript',
      {
        name: '@storybook/addon-docs',
        options: {
          configureJSX: true,
          babelOptions: {},
          sourceLoaderOptions: null,
        },
      },
      '@storybook/addon-links/register',
      {
        name: '@storybook/addon-storysource',
        options: {
          rule: {
            test: [/\.(stories|story)\.tsx?$/],
          },
        },
      },
      '@storybook/addon-actions/register',
      '@storybook/addon-knobs/register',
    ],
    webpackFinal: async webpackConfig => {
      //
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '~': appSrcPath,
        [process.env.npm_package_name]: path.resolve(appSrcPath, 'lib'), // 수정?
      };
      if (!webpackConfig.resolve.plugins) {
        webpackConfig.resolve.plugins = []
      }
      webpackConfig.resolve.plugins.push(new TsconfigPathsWebpackPlugin(
        { configFile: 'src/storybook/tsconfig.json' }));

      // webpackConfig.module.rules.push({
      //   test: /\.(js|mjs|jsx|ts|tsx)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       options: {
      //         formatter: require.resolve('react-dev-utils/eslintFormatter'),
      //         eslintPath: require.resolve('eslint'),
      //         baseConfig: {
      //           // extends: [require.resolve('eslint-config-nara')], // NARA
      //         },
      //         ignore: true, // NARA
      //         useEslintrc: true, // NARA
      //       },
      //       loader: require.resolve('eslint-loader'),
      //     },
      //   ],
      //   include: appSrcPath,
      // });
      webpackConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: appSrcPath,
        use: [
          {
            loader: require.resolve('react-docgen-typescript-loader'),
            options: {
              tsconfigPath: path.resolve(appPath, 'tsconfig.json'),
            },
          },
        ],
      })
      // webpackConfig.module.rules.push({
      //   test: /\.code$/,
      //   include: appSrcPath,
      //   loader: require.resolve('raw-loader'),
      // }); // mobx 소스코드 viewer

      webpackConfig.plugins.push(new webpack.DefinePlugin({
        APP_NAME: JSON.stringify(process.env.npm_package_name),
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
      }))

      webpackConfig.node = {
        module: 'empty',
        dgram: 'empty',
        dns: 'mock',
        fs: 'empty',
        http2: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
      }

      return webpackConfig
    },
  }

  if (typeof callback === 'function') {
    return callback(defaultConfig)
  } else {
    return defaultConfig
  }
}

module.exports = configureMain
