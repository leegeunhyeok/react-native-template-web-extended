/**
 * @param {import('@babel/core').ConfigAPI} api 
 */
module.exports = (api) => {
  api.cache.using(() => process.env.PLATFORM);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      process.env.PLATFORM === 'web'
        ? ['babel-plugin-react-native-web', { commonjs: true }]
        : null,
    ].filter(Boolean),
  }
};
