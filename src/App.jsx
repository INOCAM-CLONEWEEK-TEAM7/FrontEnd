import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import * as CiIcons from 'react-icons/ci';
import logo from './newneek_logo.png';

function App() {
  // const navigate = useNavigate();

  return (
    <HeaderLayout>
      <HeaderWrapper>
        <HeaderLogo
        // onClick={() => {
        //   navigate('/main');
        // }}
        />

        <SearshButton>
          <CiIcons.CiSearch />
        </SearshButton>
        <LoginButton>
          <CiIcons.CiUser />
        </LoginButton>
      </HeaderWrapper>
    </HeaderLayout>
  );
}

export default App;

const HeaderLayout = styled.header`
  background: #eae7de;
  border-bottom: 1px solid #051619;
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
  border: 1px solid #051619;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 로그인 전에는 LoginButton, 로그인 후에는 UserButton으로 바뀌게 하고 싶다.
const LoginButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #051619;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
