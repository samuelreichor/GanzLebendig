// Theme Settings
const breakpointSettings = require('./theme/breakpoints');
const colorSettings = require('./theme/colors');
const fontSettings = require('./theme/fonts');
const fontSizeSettings = require('./theme/fontSizes');
const zIndexSettings = require('./theme/zIndex');
const designSystemSpacingSetting = require('./theme/designSystemSpacing');

// Plugins
const designSystemSpacingPlugin = require('./theme/plugins/designSystemSpacingPlugin');

module.exports = {
  content: ['./templates/**/*.{twig,html,vue,js,ts}', './assets/**/*.{vue,js,ts}'],
  safelist: [],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: colorSettings,
    fontFamily: fontSettings,
    fontSize: fontSizeSettings,
    screens: breakpointSettings.pixel,
    zIndex: zIndexSettings,
    designSystemSpacing: designSystemSpacingSetting,
  },
  plugins: [designSystemSpacingPlugin],
};
