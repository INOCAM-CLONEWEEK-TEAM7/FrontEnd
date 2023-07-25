import StyledInput from "../common/styles/StyledInput";

function SignUp() {
  return (
    <form>
      <StyledInput type="email" placeholder="이메일" $margin="1rem 0" />
      <StyledInput type="password" placeholder="비밀번호(8자 이상)" $margin="1rem 0" />
      <StyledInput type="password" placeholder="비밀번호 확인(8자 이상)" $margin="1rem 0" />
      <StyledInput type="text" placeholder="닉네임" $margin="1rem 0" />
    </form>
  );
}

export default SignUp;
