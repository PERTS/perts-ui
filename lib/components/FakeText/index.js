import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const FakeTextStyled = styled.div`
  height: 12px;
  width: 100%;

  :not(:last-child) {
    margin-bottom: ${theme.units.padding};
  }

  background: ${theme.colors.grayLight};
`;

const FakeText = ({ rows }) => {
  const render = [];
  for (let i = 0; i < rows; i += 1) {
    render.push(<FakeTextStyled />);
  }
  return <>{render}</>;
};

FakeText.propTypes = {
  rows: PropTypes.number.isRequired,
};

export default FakeText;
