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
  red: '#E74444',
  yellow: '#E7DA44',
  offWhite: '#F7F8FA',
  white: '#FFFFFF',
};

const colorsAliases = {
  info: colorsBrand.yellow,
  success: colorsBrand.green,
  warning: colorsBrand.red,
  text: colorsBrand.grayDark,
};

const units = {
  borderRadius: '3px',
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
