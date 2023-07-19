const nativeEntryPoint = '@/App';
const platform = process.env.PLATFORM;
const isStorybook = process.env.STORYBOOK === '1';
const isNativeStorybook = isStorybook && platform === 'native';

/**
 * @param {import('@babel/core').ConfigAPI} api
 */
module.exports = api => {
  api.cache.using(() => JSON.stringify({platform, isStorybook}));

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      platform === 'web'
        ? ['babel-plugin-react-native-web', {commonjs: true}]
        : null,
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            [nativeEntryPoint]: isNativeStorybook
              ? './src/App.storybook'
              : './src/App',
          },
        },
      ],
    ].filter(Boolean),
  };
};
