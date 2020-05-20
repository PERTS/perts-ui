// HTML li element
//
// For this component to properly render its bullet icons, it must be wrapped
// within an UnorderedList component.

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import theme from '../theme';

// https://react-icons.github.io/icons?name=go
import { GoPrimitiveDot } from 'react-icons/go';

const ListItem = ({ className, children, icon, iconColor }) => {
  const cxLI = classNames(className);

  return (
    <LIStyled className={cxLI} iconColor={iconColor}>
      <IconStyled color={iconColor}>{icon}</IconStyled>
      {children}
    </LIStyled>
  );
};

ListItem.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // The list item text.
  children: PropTypes.any,

  // React Icons icon type. Example: <FaHatWizard />
  // Available icons: https://react-icons.github.io/
  icon: PropTypes.any,

  // Apply a custom color style to bullet.
  // Valid colors are those that are defined in `theme.colors`. Any other colors
  // that are passed in will result in a `theme.colors.primary` colored bullet.
  iconColor: PropTypes.string,
};

ListItem.defaultProps = {
  icon: <GoPrimitiveDot />,
};

export default ListItem;

// Limit color selections to those defined in theme.colors. Default primary.
const applyColor = (color) => {
  if (color in theme.colors) {
    return theme.colors[color];
  }

  return theme.colors.primary;
};

const LIStyled = styled.li`
  position: relative;
`;

const IconStyled = styled.span`
  position: absolute;
  left: -2.1em;
  width: 2.1em;
  top: 0.14em;
  text-align: center;

  color: ${theme.colors.primary};

  ${(props) =>
    props.color &&
    css`
      color: ${applyColor(props.color)};
    `};
`;
