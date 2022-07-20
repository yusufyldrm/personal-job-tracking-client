import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    transition: all 0.3s linear;
    ::selection {
      background-color: #F1B00B;
      color: #212121;
    }
  }
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  textarea {
    :focus {
      outline: none;
    }
  }

  button, input {
    :focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    all: unset;
  }

  a:hover {
    cursor: pointer;
  }

`;
export default GlobalStyle;
