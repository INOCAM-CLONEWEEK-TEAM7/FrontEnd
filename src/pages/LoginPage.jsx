import Logo from "../components/common/Logo";
import EmailLogin from "../components/loginPage/EmailLogin";
import SnsLogin from "../components/loginPage/SnsLogin";
import { LoginDivider } from "../components/loginPage/styles/LoginDivider";
import LoginSection from "../components/loginPage/styles/LoginSection";

function LoginPage() {
  return (
    <LoginSection>
      <Logo $margin='0 auto 3rem' $width='60%'/>
      <SnsLogin />
      <LoginDivider />
      <EmailLogin />
    </LoginSection>
  )
}

export default LoginPage