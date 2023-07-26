import { styled } from "styled-components";

const SnsLoginButtonBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  * {
    opacity: 0;
  }
`

const GoogleLogoSpan = styled.span`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 1rem;
`

export {SnsLoginButtonBox, GoogleLogoSpan}