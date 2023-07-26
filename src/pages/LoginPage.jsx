import { useEffect, useState } from "react";
import Logo from "../components/common/Logo";
import EmailLogin from "../components/loginPage/EmailLogin";
import SnsLogin from "../components/loginPage/SnsLogin";
import { LoginDivider } from "../components/loginPage/styles/LoginDivider";
import LoginSection from "../components/loginPage/styles/LoginSection";
import { useNavigate } from "react-router-dom";
import SignUpPage from "./SignUpPage";

function LoginPage() {
  const [firstCome, setFirstCome] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate("/");
    }
  })



  return (
    firstCome ?
    <SignUpPage email={email} />
    :
    <LoginSection>
      <Logo $margin="0 auto 3rem" $width="60%" />
      <SnsLogin setEmail={setEmail} setFirstCome={setFirstCome}/>
      <LoginDivider />
      <EmailLogin />
    </LoginSection>
  );
}

export default LoginPage;
