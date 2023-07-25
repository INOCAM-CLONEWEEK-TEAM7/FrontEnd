import { styled } from "styled-components";

const LogoBox = styled.div`
  margin: ${({ $margin }) => $margin || "0"};
  width: ${({ $width }) => $width || "100%"};
  box-sizing: border-box;
  position: relative;
  align-items: center;
`;

export default LogoBox;
