module.exports = {
  stories: [
    '../stories/**/*.stories.js',
    '../lib/**/*.stories.js',
  ],
  addons: [
    // https://github.com/storybookjs/storybook/tree/master/addons/knobs
    '@storybook/addon-knobs/register',
    // https://github.com/storybookjs/storybook/tree/master/addons/actions
    '@storybook/addon-actions',
    // https://github.com/storybookjs/storybook/tree/master/addons/links
    '@storybook/addon-links',
    // https://github.com/storybookjs/storybook/tree/master/addons/storysource
    '@storybook/addon-storysource',
    // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    '@storybook/addon-a11y/register',
    // https://github.com/storybookjs/storybook/tree/master/addons/viewport
    '@storybook/addon-viewport/register',
  ],
};
