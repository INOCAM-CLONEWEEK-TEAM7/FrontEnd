import { useMutation } from "react-query";
import useValidateInput from "../../hooks/useValidateInput";
import WithHelper from "../common/WithHelper";
import ChangeOnHoverButton from "../common/styles/ChangeOnHoverButton";
import StyledInput from "../common/styles/StyledInput";
import EmailLoginForm from "./styles/EmailLoginForm";
import UnderlinedLink from "./styles/UnderlinedLink";
import { login } from "../../api/user";
import { useNavigate } from "react-router-dom";

function EmailLogin() {
  const navigate = useNavigate();
  const [email, handleEmailOnChange, emailValid, setEmailValid] = useValidateInput("email");
  const [password, handlePwOnChange, passwordValid, setPwValid] = useValidateInput("password");

  const mutation = useMutation(login, {
    onSuccess: (response) =>{
      if(response.data.success){
        navigate('/');
      }
    },
    onError: (error) => {
      if(error.response.data.msg ==="자격 증명에 실패하였습니다.")
        alert('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
    }
  })


  const HandleOnSubmit = e => {
    e.preventDefault();
    if (!email && !password) {
      setEmailValid(false);
      setPwValid(false);
    } else if (emailValid && passwordValid) {
      mutation.mutate({ email, password });
    }
  };

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
      <ChangeOnHoverButton onClick={HandleOnSubmit} $margin="2rem 0" $width="100%">
        로그인
      </ChangeOnHoverButton>
      <div className="centered">
        <UnderlinedLink to="/signup">회원가입하기</UnderlinedLink>
      </div>
    </EmailLoginForm>
  );
}

export default EmailLogin;
