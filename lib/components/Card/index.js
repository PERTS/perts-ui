import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

import CardTitleGraphic from './CardTitleGraphic.png';

const CardStyled = styled.div`
  background: ${theme.colors.white};
  color: ${theme.colors.text};

  border-radius: ${theme.units.borderRadius};

  /* So children don't flow outside border-radius. */
  overflow: hidden;

  /* So last child's bottom left/right borders don't get cut off. */
  > :last-child {
    border-bottom-right-radius: ${theme.units.borderRadius};
    border-bottom-left-radius: ${theme.units.borderRadius};
  }
`;

const CardTitleStyled = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  font-weight: bold;
  font-size: 18px;

  border: 1px solid ${theme.colors.primary};

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
    Setting margin-top and margin-bottom so that the spacing set by the above
    padding is consistent regardless of the first/last element used.
  */
  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

const Card = ({ children, title = false }) => (
  <CardStyled>
    {title && <CardTitleStyled>{title}</CardTitleStyled>}
    {children}
  </CardStyled>
);

Card.Title = CardTitleStyled;
Card.Content = CardContentStyled;

Card.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
};

Card.displayName = 'Card';
CardStyled.displayName = 'CardStyled';
CardTitleStyled.displayName = 'Card.Title';
CardContentStyled.displayName = 'Card.Content';

export default Card;
