import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as CiIcons from 'react-icons/ci';
import logo from '../newneek-logo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <HeaderWrapper>
        <HeaderLogo
          onClick={() => {
            navigate('/');
          }}
        />
        <SearshButton
          onClick={() => {
            navigate('/search');
          }}
        >
          <CiIcons.CiSearch />
        </SearshButton>
        <LoginButton
          onClick={() => {
            navigate('/login');
          }}
        >
          <CiIcons.CiUser />
        </LoginButton>
      </HeaderWrapper>
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.header`
  border-bottom: 1px solid var(--black);
  position: relative;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  padding: 45px 35px;
  max-width: 1360px;
  display: flex;
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
