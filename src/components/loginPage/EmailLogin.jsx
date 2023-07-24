import useValidateInput from '../../hooks/useValidateInput';
import ChangeOnHoverButton from '../common/styles/ChangeOnHoverButton';
import StyledInput from '../common/styles/StyledInput';
import EmailLoginForm from './styles/EmailLoginForm';
import UnderlinedLink from './styles/UnderlinedLink';

function EmailLogin() {
  const [email, handleEmailOnChange, emailValid, setEmailValid] = useValidateInput('email');
  const [password, handlePwOnChange, passwordValid, setPwValid] = useValidateInput('password');

  return (
    <EmailLoginForm>
      <StyledInput type='email' placeholder='이메일' $margin='1rem 0' value={email} />
      <StyledInput type='password' placeholder='비밀번호' $margin='1rem 0' value={password} />
      <div>
        <UnderlinedLink to='/forgot'>비밀번호를 잊으셨나요?</UnderlinedLink>
      </div>
      <ChangeOnHoverButton
        onClick={e => {
          e.preventDefault();
        }}
        onSubmit={e => {
          console.log(1111);
        }}
        $margin='2rem 0'
        $width='100%'
      >
        로그인
      </ChangeOnHoverButton>
      <div className='centered'>
        <UnderlinedLink to='/signup'>회원가입하기</UnderlinedLink>
      </div>
    </EmailLoginForm>
  );
}

export default EmailLogin;
