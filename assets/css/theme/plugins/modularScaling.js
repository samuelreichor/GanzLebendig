import plugin from 'tailwindcss/plugin';

export default plugin(({ addBase }) => {
  const breakpoints = {
    min: 400, // mobile breakpoint
    max: 1920, // desktop breakpoint
  };
  const rootFontSize = 16;

  const mobile = {
    fontSize: 16,
    ratio: 1.125,
    breakpoint: breakpoints.min,
  };

  const desktop = {
    fontSize: 17,
    ratio: 1.2,
    breakpoint: breakpoints.max,
  };

  const pxToRem = (pxValue) => pxValue / rootFontSize;

  const calcModularScale = (scale = 0) => {
    const minFontSizePx = mobile.fontSize * Math.pow(mobile.ratio, scale);
    const maxFontSizePx = desktop.fontSize * Math.pow(desktop.ratio, scale);

    const minFontSizeRem = pxToRem(minFontSizePx);
    const maxFontSizeRem = pxToRem(maxFontSizePx);
    const minBreakpointRem = pxToRem(mobile.breakpoint);
    const maxBreakpointRem = pxToRem(desktop.breakpoint);

    const minRemFormatted = minFontSizeRem.toFixed(4);
    const maxRemFormatted = maxFontSizeRem.toFixed(4);
    const minBreakpointRemFormatted = minBreakpointRem.toFixed(4);
    const maxBreakpointRemFormatted = maxBreakpointRem.toFixed(4);

    const fluidValue = `calc(${minRemFormatted}rem + (${maxRemFormatted} - ${minRemFormatted}) * ((100vw - ${minBreakpointRemFormatted}rem) / (${maxBreakpointRemFormatted} - ${minBreakpointRemFormatted})))`;

    return `clamp(${minRemFormatted}rem, ${fluidValue}, ${maxRemFormatted}rem)`;
  };

  const fontSizes = {
    xs: calcModularScale(-2),
    sm: calcModularScale(-1),
    base: calcModularScale(0),
    lg: calcModularScale(1),
    xl: calcModularScale(2),
    '2xl': calcModularScale(3),
    '3xl': calcModularScale(4),
    '4xl': calcModularScale(5),
    '5xl': calcModularScale(6),
    '6xl': calcModularScale(7),
    '7xl': calcModularScale(8),
    '8xl': calcModularScale(9),
    '9xl': calcModularScale(10),
    '10xl': calcModularScale(11),
  };

  const rootVars = {};
  Object.entries(fontSizes).forEach(([key, fontSize]) => {
    rootVars[`--font-size-${key}`] = fontSize;
  });

  addBase({
    ':root': rootVars,
  });
});
