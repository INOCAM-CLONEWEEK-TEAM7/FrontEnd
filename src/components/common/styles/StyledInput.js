import { styled } from "styled-components";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 40px 11px 1.5rem;
  border: 1px solid var(--black);
  box-sizing: border-box;
  color: var(--black);
  line-height: 25.2px;
  margin: ${({ $margin }) => $margin || "0px 0px"};
`;

export default StyledInput;
