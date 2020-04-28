module.exports = {
  stories: [
    '../stories/**/*.stories.js',
    '../lib/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
  ],
};
