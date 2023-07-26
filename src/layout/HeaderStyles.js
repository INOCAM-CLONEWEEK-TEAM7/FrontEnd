import { styled } from "styled-components";
import logo from "../images/newneek-logo.png";

const HeaderLayout = styled.header`
  border-bottom: 1px solid var(--black);
  position: relative;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  padding: 45px 35px;
  max-width: 1360px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderLogo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  width: 226px;
  height: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const SearshButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid var(--black);
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid var(--black);
  border-left: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NightModeContainer = styled.div`
  margin-left: auto;
  margin-right: 3.2rem;
  &>div{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &>.icon{
      display: block;
      width: 24px;
      height: 24px;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &>.toggle{
      position: relative;
      display: block;
      margin-left: 16px;
      width: 51px;
      padding: 0;
      height: auto;
      cursor: pointer;
    }
  }
`



// const UserButton = styled.div`
//   width: 48px;
//   height: 48px;
//   border: 1px solid var(--black);
//   border-left: none;
//   font-size: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

export const S = {
  HeaderLayout,
  HeaderWrapper,
  HeaderLogo,
  SearshButton,
  LoginButton,
  NightModeContainer
  //   UserButton,
};
