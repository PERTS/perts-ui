import { createGlobalStyle } from 'styled-components';

export const StylesAlignVertically = createGlobalStyle`
  body {
    /* Center content vertically. */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
  }
`;
