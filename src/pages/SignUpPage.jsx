import Logo from "../components/common/Logo";
import SignUp from "../components/signUpPage/SignUp";
import SimpleSignUp from "../components/signUpPage/SimpleSignUp";
import SignUpSection from "../components/signUpPage/styles/SignUpSection";

function SignUpPage({email}) {
  return (
    <SignUpSection>
      <Logo $margin="0 auto 3rem" $width="60%" />
      {
        email?
        <SimpleSignUp email={email}/>
        :
        <SignUp />
      }
    </SignUpSection>
  );
}

export default SignUpPage;
