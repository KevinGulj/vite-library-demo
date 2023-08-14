export default {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: [],
    framework: {
      name: '@storybook/react-vite',
      options: {
        legacyRootApi: false,
        fastRefresh: true
      }
    },
    staticDirs: ["../public"],
  };