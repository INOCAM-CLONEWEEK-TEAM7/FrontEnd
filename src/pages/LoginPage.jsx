import { useEffect } from "react";
import Logo from "../components/common/Logo";
import EmailLogin from "../components/loginPage/EmailLogin";
import SnsLogin from "../components/loginPage/SnsLogin";
import { LoginDivider } from "../components/loginPage/styles/LoginDivider";
import LoginSection from "../components/loginPage/styles/LoginSection";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('accessToken')){
      navigate("/");
    }
  })
  

  return (
    <LoginSection>
      <Logo $margin="0 auto 3rem" $width="60%" />
      <SnsLogin />
      <LoginDivider />
      <EmailLogin />
    </LoginSection>
  );
}

export default LoginPage;
