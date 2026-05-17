import plugin from 'tailwindcss/plugin';

export default plugin(({ matchUtilities, theme }) => {
  const screens = theme('screens');
  const classes = [
    ['m', (val) => ({ margin: val })],
    ['mt', (val) => ({ 'margin-top': val })],
    ['mr', (val) => ({ 'margin-right': val })],
    ['mb', (val) => ({ 'margin-bottom': val })],
    ['ml', (val) => ({ 'margin-left': val })],
    ['mx', (val) => ({ 'margin-left': val, 'margin-right': val })],
    ['my', (val) => ({ 'margin-top': val, 'margin-bottom': val })],
    ['p', (val) => ({ padding: val })],
    ['pt', (val) => ({ 'padding-top': val })],
    ['pr', (val) => ({ 'padding-right': val })],
    ['pb', (val) => ({ 'padding-bottom': val })],
    ['pl', (val) => ({ 'padding-left': val })],
    ['px', (val) => ({ 'padding-left': val, 'padding-right': val })],
    ['py', (val) => ({ 'padding-top': val, 'padding-bottom': val })],
  ];
  const utilities = {};
  classes.forEach(([u, properties]) => {
    utilities[`${u}-ds`] = (value) => {
      if (typeof value === 'string') {
        return properties(value);
      }

      if (typeof value === 'object') {
        const rules = properties(value.default);
        Object.keys(value).forEach((breakpoint) => {
          if (breakpoint !== 'default') {
            rules[`@media (min-width: ${screens[breakpoint]})`] = properties(
              value[breakpoint],
            );
          }
        });
        return rules;
      }

      throw Error(
        'designSystemSpacing values must be a string spacing value or an object mapping breakpoints to string spacing values',
      );
    };
  });
  matchUtilities(utilities, { values: theme('designSystemSpacing') });
});
