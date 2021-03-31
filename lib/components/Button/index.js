import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import theme from '../theme';

import Spin from '../Spin';
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaSpinner } from 'react-icons/fa';

const Button = ({ className, children, disabled, icon, loading, ...rest }) => {
  const cx = classNames(className);

  const isDisabled = disabled || loading;
  const showProvidedIcon = icon && !loading;
  const showLoadingIcon = loading;

  return (
    <ButtonStyled className={cx} disabled={isDisabled} {...rest}>
      <ButtonGutter />

      <ButtonText>{children}</ButtonText>

      <ButtonGutter>
        {showProvidedIcon && icon}
        {showLoadingIcon && (
          <Spin>
            <FaSpinner />
          </Spin>
        )}
      </ButtonGutter>
    </ButtonStyled>
  );
};

Button.propTypes = {
  // To allow styled-components wrapping.
  className: PropTypes.string,

  // Button text.
  children: PropTypes.any.isRequired,

  // Whether the button is disabled.
  disabled: PropTypes.bool,

  // Whether the button is styled with secondary colors.
  secondary: PropTypes.bool,

  // Optional, button icon JSX.
  icon: PropTypes.any,

  // Whether the button is in loading state.
  loading: PropTypes.bool,

  // onClick handler.
  onClick: PropTypes.func,

  // Button type
  type: PropTypes.string,
};

const ButtonText = styled.div`
  flex-grow: 1;
  padding: ${(props) => props.theme.units.fieldPadding};
`;

ButtonText.defaultProps = {
  theme,
};

const ButtonGutter = styled.div`
  flex-basis: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

ButtonGutter.defaultProps = {
  theme,
};

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 48px;
  padding: 0;

  font-size: 0.89rem;
  font-weight: bold;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  border: 0;
  border-radius: ${(props) => props.theme.units.borderRadius};

  cursor: pointer;

  &:enabled:active {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  ${(props) =>
    props.secondary &&
    css`
      color: ${props.theme.colors.primary};
      background: ${props.theme.colors.white};
      border: 1px solid ${props.theme.colors.primary};

      &:enabled:active {
        color: ${props.theme.colors.white};
        background: ${props.theme.colors.primaryDark};
      }
    `};

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${props.theme.colors.disabled};
      cursor: not-allowed;
    `};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 5px ${(props) => props.theme.colors.primaryLight};
  }
`;

ButtonStyled.defaultProps = {
  theme,
};

ButtonText.displayName = 'ButtonText';
ButtonGutter.displayName = 'ButtonGutter';

export default Button;
