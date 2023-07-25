import { styled } from "styled-components";
import { useState, useEffect } from "react";
import WithHelper from "../components/common/WithHelper";
import useValidateInput from "../hooks/useValidateInput";
import useCheckBox from "../hooks/useCheckBox";
import ChangeOnHoverButton from "../components/common/styles/ChangeOnHoverButton";
import mainlogo from "../images/gosum-home.png";
import StyledInput from "../components/common/styles/StyledInput";

function MainPage() {
  const [subscribeuser, setSubscribeUser] = useState(0);

  useEffect(() => {
    // 서버로 데이터를 요청하는 비동기 함수
    const fetchData = async () => {
      try {
        // 서버에서 뉴스 크롤링 개수와 구독자 수를 가져오는 API 엔드포인트 주소
        const apiEndpoint = "https://example.com/api/news";

        const response = await fetch(apiEndpoint);
        const data = await response.json();

        // 가져온 데이터를 변수에 할당
        setSubscribeUser(data.subscribeuser);
      } catch (error) {
        // 오류 처리
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 데이터 요청 함수 실행
  }, []); // 빈 배열을 전달하여 한 번만 데이터를 가져오도록 설정

  const [email, handleEmailOnChange, emailValid, setEmailValid] = useValidateInput("email");
  const [nickname, handleNicknameOnChange, nicknameValid, setNicknameValid] = useValidateInput("");

  const [CheckPersonalBox, checkedPersonal] = useCheckBox(
    "개인정보 수집/이용 동의 (필수)",
    "https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19",
  );
  const [CheckMarketingBox, checkedMarketing] = useCheckBox(
    "뉴스레터 및 마케팅 정보 수신 동의 (선택)",
    "https://newneek.notion.site/97c0f3756cc54e3f9b201f8c3abd0dba",
  );

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!email && !nickname) {
      setEmailValid(false);
      setNicknameValid(false);
    } else if (emailValid && nicknameValid) {
      //회원가입 진행
    }
  };

  return (
    <div>
      <BannerTitle>우리가 시간이 없지, 세상이 안 궁금하냐!</BannerTitle>
      <BannerBody>
        <BannerDescription>
          <DescriptionText>
            <p style={{ margin: 0 }}>
              🚀 지금 구독하면 <strong style={{ fontWeight: "bold" }}>내일 아침</strong>에 읽을 수 있어요.
            </p>
            <p style={{ margin: 0 }}>
              ✨ 지금 <strong style={{ fontWeight: "bold" }}>{subscribeuser}명</strong>이 뉴닉을 읽고 있어요.
            </p>
            <p>
              세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!
              <br />
              월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
            </p>
          </DescriptionText>
          <SubscribeForm>
            <WithHelper msg="이메일 주소를 입력해주세요." valid={emailValid} $margin="1rem 0">
              <StyledInput
                type="email"
                $margin="20px 0px 0px"
                placeholder="이메일 주소"
                value={email}
                onChange={handleEmailOnChange}
              />
            </WithHelper>
            <WithHelper msg="이름을 입력해주세요." valid={nicknameValid} $margin="1rem 0">
              <StyledInput type="text" placeholder="닉네임" value={nickname} onChange={handleNicknameOnChange} />
            </WithHelper>

            <WithHelper msg="약관에 동의해주세요." valid={emailValid} $margin="1rem 0">
              <CheckPersonalBox checked={checkedPersonal} />
            </WithHelper>
            <WithHelper msg="약관에 동의해주세요." valid={emailValid} $margin="1rem 0">
              <CheckMarketingBox checked={checkedMarketing} />
            </WithHelper>

            <div style={{ display: "flex" }}>
              <ChangeOnHoverButton onClick={handleOnSubmit} $margin="32px 0" $width="100%">
                뉴스레터 무료로 구독하기
              </ChangeOnHoverButton>
              <ChangeOnHoverButton onClick="https://app.newneek.co/" $margin="32px 0" $width="100%">
                앱 다운로드하기
              </ChangeOnHoverButton>
            </div>
          </SubscribeForm>
        </BannerDescription>
        <MainBannerImage>
          <img src={mainlogo} alt="main-logo"></img>
        </MainBannerImage>
      </BannerBody>
    </div>
  );
}

export default MainPage;

const BannerTitle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  box-sizing: border-box;
  font-size: 3rem;
  font-weight: 600;
  line-height: 2;
  letter-spacing: -0.035rem;
`;

const BannerBody = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0 3rem;
  background: var(--orange);
  box-sizing: border-box;
  border-top: 1px solid var(--black);
`;

const BannerDescription = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  box-sizing: border-box;
  font-size: 1.125rem;
`;

const DescriptionText = styled.p`
  max-width: 560px;
  margin: 0;
`;

const SubscribeForm = styled.form`
  max-width: 452px;
  margin: 1.5rem 0 0;
  box-sizing: border-box;
`;

const MainBannerImage = styled.image``;
