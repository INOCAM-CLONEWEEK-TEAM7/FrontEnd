import useCheckBox from "../../hooks/useCheckBox";
import useValidateInput from "../../hooks/useValidateInput";
import WithHelper from "../common/WithHelper";
import StyledInput from "../common/styles/StyledInput";
import useAllCheck from "../../hooks/useAllCheck";
import ChangeOnHoverButton from "../common/styles/ChangeOnHoverButton";
import { useMutation } from "react-query";
import { socialSignUp } from "../../api/user";
import { useNavigate } from "react-router-dom";

function SimpleSignUp({email}) {
  const [nickname, handleNicknameOnChange, nicknameValid, setNicknameValid] = useValidateInput("");

  const [CheckUpper14Box, checkedUpper14, setCheckedUpper14] = useCheckBox("만 14세 이상 가입 동의 (필수)");
  const [CheckUseTermBox, checkedUseTerm, setCheckedUseTerm] = useCheckBox(
    "이용약관 동의 (필수)",
    "https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769",
  );
  const [CheckPersonalBox, checkedPersonal, setCheckedPersonal] = useCheckBox(
    "개인정보 수집/이용 동의 (필수)",
    "https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19",
  );
  const [CheckMarketingBox, checkedMarketing, setCheckedMarketing] = useCheckBox(
    "뉴스레터 및 마케팅 정보 수신 동의 (선택)",
    "https://newneek.notion.site/97c0f3756cc54e3f9b201f8c3abd0dba",
  );

  const [CheckAllBox, checkedAll, allMustsChecked] = useAllCheck(
    [checkedUpper14, checkedUseTerm, checkedPersonal],
    [checkedMarketing],
    [setCheckedUpper14, setCheckedUseTerm, setCheckedPersonal],
    [setCheckedMarketing],
  );

  const navigate = useNavigate();

  const mutation = useMutation(socialSignUp, {
    onSuccess: (response) => {
      if(response.data.success){
        navigate('/');
      }
      else{
        alert(response.data.msg);
      }
    }
  });

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!nickname) {
      setNicknameValid(false);
    } else if (nicknameValid) {
      mutation.mutate({email,nickname,optionCheck:checkedMarketing});
    }
  };
  return (
    <form>
      <StyledInput type="email" placeholder="이메일" value={email} />
      <WithHelper msg="닉네임을 입력해주세요." valid={nicknameValid} $margin="1rem 0">
        <StyledInput type="text" placeholder="닉네임" value={nickname} onChange={handleNicknameOnChange} />
      </WithHelper>

      <CheckAllBox checked={checkedAll} />
      <CheckUpper14Box checked={checkedUpper14} />
      <CheckUseTermBox checked={checkedUseTerm} />
      <CheckPersonalBox checked={checkedPersonal} />
      <CheckMarketingBox checked={checkedMarketing} />

      <ChangeOnHoverButton onClick={handleOnSubmit} $margin="32px 0" $width="100%" disabled={!allMustsChecked}>
        회원가입
      </ChangeOnHoverButton>
    </form>
  );
}

export default SimpleSignUp