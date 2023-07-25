import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    color: #051619;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    line-height: 1.8;
  }

  body{
      --black : #051619;
      --orange: #ff6b00;
      --beige: #eae7de;
      --white: #fff;
      --red: #b22222;
      --light-gray: #ccc;
      --dark-gray: #666;

      letter-spacing: -.0125rem;
      background-color: var(--beige);
      color: var(--font-Color);
      margin: 0;
  }

  .centered{
    text-align: center;
    align-items: center;
  }
`;

export default GlobalStyle;
