import styled from 'styled-components';
import theme from '../theme';
import InputField from '../InputField';
import iconToggle from './iconToggle.png';

const ToggleStyled = styled(InputField)`
  position: relative;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 12px;
    font-weight: normal;
    cursor: pointer;
  }

  .text {
    min-width: ${(props) => props.labelWidth}px;
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;

    &:checked ~ .control {
      &:after {
        left: 22px;
        background-color: ${(props) => props.theme.colors.primary};
      }
    }

    &:focus ~ .control {
      outline: 3px solid ${(props) => props.theme.colors.primary};
    }
  }

  .control {
    position: relative;
    height: 38px;
    width: 60px;

    background: ${(props) => props.theme.colors.grayLight};
    border: 1px solid ${(props) => props.theme.colors.grayMedium};
    border-radius: 20px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 36px;
      width: 36px;
      border: 1px solid ${(props) => props.theme.colors.white};
      border-radius: 50%;

      background-color: ${(props) => props.theme.colors.grayDark};
      background-image: url(${iconToggle});
      background-repeat: no-repeat;
      background-size: contain, cover;

      box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.5);

      transition: left 0.1s ease-in;
    }
  }
`;

ToggleStyled.defaultProps = {
  theme,
};

export default ToggleStyled;
