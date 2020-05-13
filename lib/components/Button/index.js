import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import theme from '../theme';

import Spin from '../Spin';
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaSpinner } from 'react-icons/fa';

const Button = ({ className, children, disabled, icon, loading, onClick }) => {
  const cx = classNames(className);

  const isDisabled = disabled || loading;
  const showProvidedIcon = icon && !loading;
  const showLoadingIcon = loading;

  return (
    <ButtonStyled className={cx} disabled={isDisabled} onClick={onClick}>
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

  // Optional, button icon JSX.
  icon: PropTypes.any,

  // Whether the button is in loading state.
  loading: PropTypes.bool,

  // onClick handler.
  onClick: PropTypes.func,
};

const ButtonText = styled.div`
  flex-grow: 1;
  padding: ${theme.units.fieldPadding};
`;

const ButtonGutter = styled.div`
  flex-basis: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 48px;

  font-size: 16px;
  font-weight: bold;

  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};

  border: 0;
  border-radius: ${theme.units.borderRadius};

  cursor: pointer;

  &:enabled:active {
    background: ${theme.colors.primaryDark};
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${theme.colors.disabled};
      cursor: not-allowed;
    `};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 5px ${theme.colors.primaryLight};
  }
`;

export default Button;
