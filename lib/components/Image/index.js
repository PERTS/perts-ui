import styled, { css } from 'styled-components';

const Image = styled.img`
  /*
    Avoid the extra space that occurs when an image is displayed inline.
    https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  */
  display: ${(props) => (props.display ? props.display : 'block')};

  /*
    By default, the image height will adjust. This is recommended for most cases
    since you're probably using this for dynamic widths. But you can override
    this if you need to.
  */
  height: ${(props) => (props.height ? props.height : 'auto')};

  /*
    Reduce the width of the image to fit parent element.
  */
  ${(props) =>
    props.sizeDown &&
    css`
      max-width: 100%;
    `};

  /*
    Increase the width of the image to expand to parent element.
  */
  ${(props) =>
    props.sizeUp &&
    css`
      width: 100%;
    `};
`;

export default Image;
