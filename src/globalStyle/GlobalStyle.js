import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    //font-family
    color: #051619;
  }

  body{
        --black : #051619;
        --orange: #ff6b00;
        --beige: #eae7de;
        --white: #fff;

        background-color: var(--beige);
        color: var(--font-Color);
    }
`

export default GlobalStyle;