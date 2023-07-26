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
      --black : ${({$nightMode})=>$nightMode? "#fff" : "#051619"};
      --orange: ${({$nightMode})=>$nightMode? "#582D25" : "#ff6b00"};
      --beige: ${({$nightMode})=>$nightMode? "#976961" : "#eae7de"};
      --white: ${({$nightMode})=>$nightMode? "#051619" : "#fff"};
      --red: ${({$nightMode})=>$nightMode? "#00498c" : "#b22222"};
      --light-gray: ${({$nightMode})=>$nightMode? "#666" : "#ccc"};
      --dark-gray: ${({$nightMode})=>$nightMode? "#ccc" : "#666"};

      letter-spacing: -.0125rem;
      background-color: var(--beige);
      color: var(--font-Color);
      margin: 0;
  }

  b, h1, h2, h3, h4, h5, h6, legend, strong, th{
    font-weight: 700;
    color: var(--black);
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.4;
    word-break: keep-all;
  }

  .centered{
    text-align: center;
    align-items: center;
  }
`;

export default GlobalStyle;
