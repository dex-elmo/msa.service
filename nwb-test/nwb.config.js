module.exports = {
  type: 'react-component',
  npm: {
    esModules: {
      entry: './src/index.tsx',
    },
    umd: false
  },
  // babel: {
  //   react: 'automatic',
  //   presets: [[ "@babel/preset-typescript", { "isTSX": true, "allExtensions": true }]],
  // },
  webpack: {
    extra: {
      // entry: './src/index.tsx',
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [{test: /\.tsx$/, loader: 'ts-loader'}],
      },
    },
  },
}
