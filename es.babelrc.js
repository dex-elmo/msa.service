module.exports = {
  presets: [
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
    ['@babel/preset-env', { modules: false }],
    ['@babel/preset-react'],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'module-resolver', {
      root: ['./src'],
      alias: {
        '^~/(.+)': ([, currentFile]) => `./es/${currentFile}`
        ,
      },
    },
    ],
  ],
};
