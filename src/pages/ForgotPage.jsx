import { Link } from "react-router-dom";
import WithHelper from "../components/common/WithHelper"
import ForgotSection from "../components/forgotPage/styles/ForgotSection"
import useValidateInput from "../hooks/useValidateInput"
import ChangeOnHoverButton from "../components/common/styles/ChangeOnHoverButton";
import StyledInput from "../components/common/styles/StyledInput";
import { useMutation } from "react-query";
import { findPassword } from "../api/user";

function ForgotPage() {
  const [email, handleEmailOnChange, valid, validate] = useValidateInput('email', false);
  const mutation = useMutation(findPassword, {
    onSuccess: (response) => {
      if(response.data.success)
        alert("이메일로 링크를 보내드렸어요!");
      else
        alert("등록되지 않은 이메일이에요!")
    }
  })

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      mutation.mutate({email});
    }
  }
  return (
    <ForgotSection>
      <header>
        <h1>비밀번호 찾기</h1>
        <p>비밀번호를 재설정할 수 있는 링크를 보내드려요.</p>
      </header>
      <form>
        <WithHelper $margin='1rem 0' msg='이메일 형식을 지켜주세요.' valid={valid}>
          <label htmlFor="find-email">이메일 주소</label>
          <StyledInput id="find-email" type="email" placeholder="newneeker@newneek.co" value={email} onChange={handleEmailOnChange}/>
        </WithHelper>
        <footer>
          <ChangeOnHoverButton $width="200px" onClick={handleOnSubmit}>
            링크발송
          </ChangeOnHoverButton>
          <span>
            이메일 주소가 떠오르지 않으시나요?
            <Link to="/signup">가입하기</Link>
          </span>
        </footer>
      </form>
    </ForgotSection>
  )
}

export default ForgotPage