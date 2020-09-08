// PERTS Style Guide
// https://docs.google.com/document/d/1OLRm8TcnhIVQ-UW0cCWvTjVrbwYlJZVGvjpwAMWoVwQ

const colorsBrand = {
  primary: '#1C9DE3',
  primaryDark: '#061D2A',
  primaryLight: '#ACDBF4',
  grayDark: '#202020',
  grayMedium: '#464646',
  grayLight: '#DDDDDD',
  green: '#44E790',
  greenDark: '#2B8254',
  red: '#E74444',
  redDark: '#CE4545',
  yellow: '#E7DA44',
  offWhite: '#F7F8FA',
  white: '#FFFFFF',
};

const colorsAliases = {
  info: colorsBrand.yellow,
  success: colorsBrand.green,
  warning: colorsBrand.red,
  disabled: colorsBrand.grayMedium,
  text: colorsBrand.grayDark,
  textDisabled: colorsBrand.grayMedium,
  fieldBackgroundDisabled: '#F0F0F0',
};

const units = {
  borderRadius: '3px',
  checkboxSize: '24px',
  // Padding between field elements.
  fieldPadding: '12px',
  // Padding between internal to field elements: label, input, error text.
  fieldPaddingInternal: '8px',
  gridColumns: 12,
  gridBreakpointSmall: 600, // in pixels
  gridBreakpointMedium: 900, // in pixels
  gridBreakpointLarge: 1200, // in pixels
  gridDefaultGutter: 16, // in pixels
  lineHeight: '1.4em',
  liFontTopPosition: '.14em',
  padding: '16px',
};

export default {
  colors: {
    ...colorsAliases,
    ...colorsBrand,
  },
  units,
};
