import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import theme from '../theme';

import CardTitleGraphic from './CardTitleGraphic.png';

const CardTitleStyled = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  font-weight: bold;

  padding: ${theme.units.padding};

  background-image: url(${CardTitleGraphic});
  background-size: 167px 96px;
  background-repeat: no-repeat;
  background-position: top right -50px;
`;

const CardContentStyled = styled.div`
  padding: ${theme.units.padding};

  border-bottom: 1px solid ${theme.colors.grayLight};
  border-left: 1px solid ${theme.colors.grayLight};
  border-right: 1px solid ${theme.colors.grayLight};

  /*
    Setting margin-bottom so that the spacing set by the above spacing is
    consistent regardless of the last element used.
  */

  > :last-child {
    margin-bottom: 0;
  }
`;

const CardStyled = styled.div`
  // TODO Decide how to handle placing Card components within Grid/Box layouts.
  // We'd like Cards to be able to stand on their own, but also be compatible
  // within the Grid system. This margin-bottom rule, when placed within Grid
  // results in extra spacing. Removing this rule will break current usage of
  // this component.
  margin-bottom: ${theme.units.fieldPadding};

  background: ${theme.colors.white};
  color: ${theme.colors.text};

  border-radius: ${theme.units.borderRadius};

  /* So children don't flow outside border-radius. */
  overflow: hidden;

  /* So first child's top left/right borders don't get cut off. */
  > :first-child {
    border-top-right-radius: ${theme.units.borderRadius};
    border-top-left-radius: ${theme.units.borderRadius};
  }

  /* So last child's bottom left/right borders don't get cut off. */
  > :last-child {
    border-bottom-right-radius: ${theme.units.borderRadius};
    border-bottom-left-radius: ${theme.units.borderRadius};
  }

  /*
    When there is no Card.Title, the first Card.Content needs to have a top
    border so that the entire card has a border surrounding it. We don't place
    the border in the Card component because it doesn't look nice surrounding
    the Card.Title.
  */
  ${CardContentStyled}:first-child {
    border-top: 1px solid ${theme.colors.grayLight};
  }
`;

const Card = ({ children, className, title = false }) => {
  const cx = classNames(className);

  return (
    <CardStyled className={cx}>
      {title && <CardTitleStyled>{title}</CardTitleStyled>}
      {children}
    </CardStyled>
  );
};

Card.Title = CardTitleStyled;
Card.Content = CardContentStyled;

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.any,
};

Card.displayName = 'Card';
CardStyled.displayName = 'CardStyled';
CardTitleStyled.displayName = 'Card.Title';
CardContentStyled.displayName = 'Card.Content';

export default Card;
