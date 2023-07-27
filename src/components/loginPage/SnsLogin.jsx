import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import ChangeOnHoverButton from "../common/styles/ChangeOnHoverButton";
import base64 from "base-64"
import { useMutation } from "react-query";
import { socialLogin } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { SnsLoginButtonBox, GoogleLogoSpan } from "./styles/SnsLoginButtonBox";
import { ReactComponent as GoogleLogo } from "../../assets/googleLogo.svg"

function SnsLogin({ setEmail, setFirstCome }) {
  const clientId = '794171665895-9ftmoiltr9l101l6h2u06gnr3dtdmonj.apps.googleusercontent.com'
  const navigate = useNavigate();
  const mutation = useMutation(socialLogin, {
    onSuccess: (response) => {
      if(response.data.success){
        navigate('/');
      }
      else{
        setFirstCome(true);
      }
    },
  })

  //구글 로그인이 성공했을 때 실행될 함수. 
  const handleOnSuccess = (response) => {
    // response 중 JWT 토큰이 담겨있는 credential부분을 가져온다.
    // JWT 토큰은 header, payload, footer? 맞는지 모르겠네. 어쨌든 . 을 구분자로 세 부분으로 나뉘어져 있고 중간의 payload 부분에 정보가 암호화되어 있다.
    const jwtPayload = response.credential.split(".")[1];
    // payload 부분을 복호화한다.JWT는 base64방식으로 암호화 되어 있으므로 base64.decode로 복호화한 뒤
    // 복호화된 JSON 문자열을 쓸 수 있게 객체로 변환한다.
    const decodedPayload = JSON.parse(base64.decode(jwtPayload));
    // 객체 형태로 변환된 데이터에서 email 정보를 꺼내온다.
    const email = decodedPayload.email;

    setEmail(email);
    mutation.mutate({ email });

  }

  return (
    //google 로그인을 위해 react-oauth 패키지를 사용하였다.
    <GoogleOAuthProvider clientId={clientId}>
      {/*위 clientId에 구글 클라우드 플랫폼 OAuth API에서 발급받은 client id를 넣어준다 */}
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
          {/* 아래 GoogleLogin 컴포넌트를 달면 구글 로그인 버튼이 생긴다. onSuccess props로 구글로그인이 성공했을 때 실행할 함수를 넘겨주면 된다. */}
          <GoogleLogin onSuccess={handleOnSuccess} width="100%" />
        </SnsLoginButtonBox>
      </ChangeOnHoverButton>


    </GoogleOAuthProvider >
  );
}

export default SnsLogin;
