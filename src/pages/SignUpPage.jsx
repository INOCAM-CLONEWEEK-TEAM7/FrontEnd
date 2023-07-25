import Logo from "../components/common/Logo";
import SignUp from "../components/signUpPage/SignUp";
import SignUpSection from "../components/signUpPage/styles/SignUpSection";

function SignUpPage() {
  return (
    <SignUpSection>
      <Logo $margin="0 auto 3rem" $width="60%" />
      <SignUp />
    </SignUpSection>
  );
}

export default SignUpPage;
