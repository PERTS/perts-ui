// PERTS Style Guide
// https://docs.google.com/document/d/1OLRm8TcnhIVQ-UW0cCWvTjVrbwYlJZVGvjpwAMWoVwQ

const colorsBrand = {
  primary: '#1C9DE3',
  primaryDark: '#061D2A',
  primaryLight: '#ACDBF4',
  green: '#44E790',
  red: '#E74444',
  white: '#F7F8FA',
  yellow: '#E7DA44',
};

const colorsAliases = {
  info: colorsBrand.yellow,
  success: colorsBrand.green,
  warning: colorsBrand.red,
};

const units = {
  lineHeight: '1.4em',
  liFontTopPosition: '.14em',
};

export default {
  colors: {
    ...colorsAliases,
    ...colorsBrand,
  },
  units,
};
