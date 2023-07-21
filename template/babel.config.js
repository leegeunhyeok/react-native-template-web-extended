/**
 * @param {import('@babel/core').ConfigAPI} api
 */
module.exports = api => {
  const isWeb = api.caller(({target}) => target === 'web');
  const isStorybook = process.env.STORYBOOK === '1';
  const isNativeStorybook = !isWeb && isStorybook;
  api.cache.using(() => JSON.stringify({isWeb, isStorybook}));

  return {
    presets: [
      'module:metro-react-native-babel-preset',
      {
        // to avoid duplicate plugin error in react-scripts
        // false (default): using `@babel/plugin-transform-react-jsx`
        // true: not using `@babel/plugin-transform-react-jsx`
        useTransformReactJSXExperimental: isWeb,
      },
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@/App': isNativeStorybook ? './src/App.storybook' : './src/App',
          },
        },
      ],
      isWeb ? ['babel-plugin-react-native-web', {commonjs: true}] : null,
      // additional plugins here
    ].filter(Boolean),
  };
};
