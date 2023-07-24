import ChangeOnHoverButton from "../common/styles/ChangeOnHoverButton"
import StyledInput from "../common/styles/StyledInput"
import EmailLoginForm from "./styles/EmailLoginForm"
import UnderlinedLink from "./styles/UnderlinedLink"

function EmailLogin() {
  return (
    <EmailLoginForm>
      <StyledInput placeholder="이메일" $margin='1rem 0'/>
      <StyledInput placeholder="비밀번호" $margin='1rem 0'/>
      <div>
        <UnderlinedLink to='/forgot'>비밀번호를 잊으셨나요?</UnderlinedLink>
      </div>
      <ChangeOnHoverButton $margin='2rem 0' $width='100%'>
        로그인
      </ChangeOnHoverButton>
      <div className='centered'>
        <UnderlinedLink to='/signup'>회원가입하기</UnderlinedLink>
      </div>

    </EmailLoginForm>
  )
}

export default EmailLogin