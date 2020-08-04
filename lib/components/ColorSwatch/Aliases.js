import React from 'react';
import PropTypes from 'prop-types';

const Aliases = ({ colorValue, themeAliasesArray }) => {
  const colorsAliases = themeAliasesArray
    .filter((a) => a.value === colorValue)
    .map((a) => a.key);

  if (colorsAliases.length) {
    return <span> (aliases: {colorsAliases.join(', ')})</span>;
  }

  return null;
};

Aliases.propTypes = {
  colorValue: PropTypes.string.isRequired,
  themeAliasesArray: PropTypes.array.isRequired,
};

export default Aliases;
