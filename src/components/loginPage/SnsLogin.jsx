import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import ChangeOnHoverButton from "../common/styles/ChangeOnHoverButton";
import base64 from "base-64"
import { useMutation } from "react-query";
import { login } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { SnsLoginButtonBox, GoogleLogoSpan } from "./styles/SnsLoginButtonBox";
import { ReactComponent as GoogleLogo } from "../../assets/googleLogo.svg"

function SnsLogin({ setEmail, setFirstCome }) {
  const clientId = '794171665895-9ftmoiltr9l101l6h2u06gnr3dtdmonj.apps.googleusercontent.com'
  const navigate = useNavigate();
  const mutation = useMutation(login, {
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {
      setFirstCome(true);
    }
  })
  const handleOnSuccess = (response) => {
    const jwtPayload = response.credential.split(".")[1];
    const decodedPayload = JSON.parse(base64.decode(jwtPayload));
    const email = decodedPayload.email;

    setEmail(email);
    mutation.mutate({ email, social: true });

  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <ChangeOnHoverButton
        $bgColor="var(--white)"
        $bgOnHover="var(--orange)"
        $color="var(--black)"
        $colorOnHover="var(--black)"
        $width="100%"
      >
        <GoogleLogoSpan>
          <GoogleLogo />
        </GoogleLogoSpan>
        구글로 시작하기
        <SnsLoginButtonBox>
          <GoogleLogin onSuccess={handleOnSuccess} width="100%" />
        </SnsLoginButtonBox>
      </ChangeOnHoverButton>


    </GoogleOAuthProvider >
  );
}

export default SnsLogin;
