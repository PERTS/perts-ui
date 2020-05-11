// HTML li element
//
// For this component to properly render its bullet icons, it must be wrapped
// within an UnorderedList component.

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import theme from '../theme';

const applyColor = (color) => {
  if (color in theme.colors) {
    return theme.colors[color];
  }

  return theme.colors.primary;
};

const LIStyled = styled.li`
  i.fa-li {
    /* Font Awesome's top setting doesn't visually line up with text. */
    top: ${theme.units.liTopPosition};

    /*  */
    color: ${theme.colors.primary};

    ${(props) =>
      props.iconColor &&
      css`
        color: ${applyColor(props.iconColor)};
      `};
  }
`;

const ListItem = ({ className, children, icon, iconColor, iconSpin }) => {
  const cxLI = classNames(className);
  const cxIcon = classNames('fa', 'fa-li', `fa-${icon}`, {
    'fa-spin': iconSpin,
  });

  return (
    <LIStyled className={cxLI} iconColor={iconColor}>
      <i className={cxIcon}></i> {children}
    </LIStyled>
  );
};

ListItem.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // The list item text.
  children: PropTypes.any,

  // The Font Awesome icon that is used as the bullet.
  // https://fontawesome.com/v4.7.0/icons/
  icon: PropTypes.string,

  // Apply a custom color style to bullet.
  // Valid colors are those that are defined in `theme.colors`. Any other colors
  // that are passed in will result in a `theme.colors.primary` colored bullet.
  iconColor: PropTypes.string,

  // Apply the `fa-spin` className to the bullet.
  // https://fontawesome.com/v4.7.0/examples/#animated
  iconSpin: PropTypes.bool,
};

ListItem.defaultProps = {
  icon: 'circle',
};

export default ListItem;
