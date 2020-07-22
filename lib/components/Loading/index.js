import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

// Sourced from https://codepen.io/haitham/pen/brpGrm

const LoadingPadding = styled.div`
  padding: 20px 0;
`;

const folding = keyframes`
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`;

const LoadingStyles = styled.div`
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  transform: rotateZ(45deg);

  .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
  }

  .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.grayMedium};
    animation: ${folding} 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }

  .sk-cube2 {
    transform: scale(1.1) rotateZ(90deg);
  }

  .sk-cube3 {
    transform: scale(1.1) rotateZ(180deg);
  }

  .sk-cube4 {
    transform: scale(1.1) rotateZ(270deg);
  }

  .sk-cube2:before {
    animation-delay: 0.3s;
  }

  .sk-cube3:before {
    animation-delay: 0.6s;
  }

  .sk-cube4:before {
    animation-delay: 0.9s;
  }
`;

LoadingStyles.defaultProps = {
  theme,
};

const Loading = () => (
  <LoadingPadding>
    <LoadingStyles>
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </LoadingStyles>
  </LoadingPadding>
);

export default Loading;
