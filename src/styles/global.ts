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
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
