import useValidateInput from "../../hooks/useValidateInput";
import WithHelper from "../common/WithHelper";
import ChangeOnHoverButton from "../common/styles/ChangeOnHoverButton";
import StyledInput from "../common/styles/StyledInput";
import EmailLoginForm from "./styles/EmailLoginForm";
import UnderlinedLink from "./styles/UnderlinedLink";

function EmailLogin() {
  const [email, handleEmailOnChange, emailValid, setEmailValid] = useValidateInput("email");
  const [password, handlePwOnChange, passwordValid, setPwValid] = useValidateInput("password");

  return (
    <EmailLoginForm>
      <WithHelper msg="올바른 이메일 주소를 입력해주세요." valid={emailValid} $margin="1rem 0">
        <StyledInput type="email" placeholder="이메일" value={email} onChange={handleEmailOnChange} />
      </WithHelper>
      <WithHelper msg="비밀번호는 8자리 이상 가능해요." valid={passwordValid} $margin="1rem 0">
        <StyledInput type="password" placeholder="비밀번호" value={password} onChange={handlePwOnChange} />
      </WithHelper>
      <div>
        <UnderlinedLink to="/forgot">비밀번호를 잊으셨나요?</UnderlinedLink>
      </div>
      <ChangeOnHoverButton
        onClick={e => {
          e.preventDefault();
        }}
        $margin="2rem 0"
        $width="100%"
      >
        로그인
      </ChangeOnHoverButton>
      <div className="centered">
        <UnderlinedLink to="/signup">회원가입하기</UnderlinedLink>
      </div>
    </EmailLoginForm>
  );
}

export default EmailLogin;
