import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body{
    background-color: #171328;
    color: #fff;
    font-size: 1.6rem;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }

  a, a:visited, a:active{
    text-decoration: none;
  }

  h4{
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

/**
 * Media Query Breakpoints
 */
export const size = {
  xs: 320,
  // xs375: 375,
  sm: 425,
  md: 768,
  lg: 1024,
  // lg1440: '1440px',
  xl: 2560,
};

export const device = {
  xs: `(min-width: ${size.xs}px)`,
  sm: `(min-width: ${size.sm}px)`,
  md: `(min-width: ${size.md}px)`,
  lg: `(min-width: ${size.lg}px)`,
  xl: `(min-width: ${size.xl}px)`,
};
