import { createGlobalStyle } from 'styled-components';

// Injects vertical centering styles into body styles.
// https://github.com/PERTS/saturn/issues/167
// https://github.com/PERTS/neptune/commit/5ee9c03e436e162058eb1b48d7fc45ed6119d58c

export const StylesAlignVertically = createGlobalStyle`
  body {
    /* Center content vertically. */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
  }
`;
