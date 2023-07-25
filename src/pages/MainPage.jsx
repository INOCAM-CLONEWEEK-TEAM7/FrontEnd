import { styled } from "styled-components";
import { useState, useEffect } from "react";
import WithHelper from "../components/common/WithHelper";
import useValidateInput from "../hooks/useValidateInput";
import useCheckBox from "../hooks/useCheckBox";
import ChangeOnHoverButton from "../components/common/styles/ChangeOnHoverButton";
import mainlogo from "../images/gosum-home.png";
import StyledInput from "../components/common/styles/StyledInput";
import ContentsSection from "../components/common/ContentsSection";
import CategoryNav from "../components/common/CategoryNav";
import MiniBenner from "../components/common/MiniBenner";
import arrow from "../images/right-arrow.png";

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
    "개인정보 수집·이용에 동의합니다",
    "https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19",
  );
  const [CheckMarketingBox, checkedMarketing] = useCheckBox(
    "광고성 정보 수신에 동의합니다",
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
    <>
      <MainBanner>
        <MainBannerImage>
          <img src={mainlogo} alt="main-logo"></img>
        </MainBannerImage>
        <BannerTitle>
          <BannerInner>우리가 시간이 없지, 세상이 안 궁금하냐!</BannerInner>
        </BannerTitle>
        <BannerDescription>
          <BannerInner>
            <SubText>
              🚀 지금 구독하면 <strong style={{ fontWeight: "bold" }}>내일 아침</strong>에 읽을 수 있어요.
            </SubText>
            <SubText>
              ✨ 지금 <strong style={{ fontWeight: "bold" }}>{subscribeuser}명</strong>이 뉴닉을 읽고 있어요.
            </SubText>
            <SubText style={{ marginTop: "1rem" }}>
              세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!
              <br />
              월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
            </SubText>
            <SubscribeForm>
              <WithHelper msg="이메일 주소를 입력해주세요." valid={emailValid} $margin="0">
                <StyledInput
                  type="email"
                  $margin="0"
                  placeholder="이메일 주소"
                  value={email}
                  onChange={handleEmailOnChange}
                />
              </WithHelper>
              <WithHelper msg="이름을 입력해주세요." valid={nicknameValid} $margin="0.5rem 0 1rem">
                <StyledInput
                  type="text"
                  $margin="0"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={handleNicknameOnChange}
                />
              </WithHelper>
              <WithHelper msg="약관에 동의해주세요." valid={emailValid}>
                <CheckPersonalBox
                  checked={checkedPersonal}
                  style={{ display: "block", padding: "0.5rem 0", position: "relative" }}
                />
              </WithHelper>
              <WithHelper msg="약관에 동의해주세요." valid={emailValid}>
                <CheckMarketingBox
                  checked={checkedMarketing}
                  style={{ display: "block", padding: "0.5rem 0", position: "relative" }}
                />
              </WithHelper>
              <ButtonGroup>
                <ChangeOnHoverButton
                  onClick={handleOnSubmit}
                  $margin="32px 0"
                  $bgColor="var(--white)"
                  $color="var(--black)"
                  $bgOnHover="var(--black)"
                  $colorOnHover="var(--white)"
                  style={{ fontSize: "1rem", outline: "1px solid var(--black)" }}
                >
                  뉴스레터 무료로 구독하기
                </ChangeOnHoverButton>
                <ChangeOnHoverButton $margin="32px 0" style={{ fontSize: "1rem", outline: "1px solid var(--black)" }}>
                  앱 다운로드하기
                </ChangeOnHoverButton>
              </ButtonGroup>
            </SubscribeForm>
          </BannerInner>
        </BannerDescription>
      </MainBanner>
      <CategoryNav />
      <ContentsSection />
      <MiniBenner />
      <div style={{ height: "120px", borderTop: "1px solid var(--black)" }}></div>
      <AsideGuide>
        <a href="https://www.notion.so/11e07b3b430a42a9ac8ed26893029e56">
          퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드 🏳️‍🌈
        </a>
        <img src={arrow} alt="right-arrow"></img>
      </AsideGuide>
      <AsideGuide>
        <a href="https://newneek.notion.site/90eb61e64b18407196422b3405a3bab6">
          3월 8일에 업데이트된 뉴닉의 여성용어 가이드 🍞🌹
        </a>
        <img src={arrow} alt="right-arrow"></img>
      </AsideGuide>
    </>
  );
}

export default MainPage;

const MainBanner = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const MainBannerImage = styled.image`
  position: absolute;
  top: 6.5rem;
  left: 50%;
  width: 100%;
  max-width: 530px;
  margin-left: 60px;
`;

const BannerTitle = styled.h1`
  margin: 0;
  padding: 1rem 0;
  font-size: 3rem;
  letter-spacing: -0.025rem;
  font-weight: 700;
  color: var(--black);
  line-height: 1.5;
  word-break: keep-all;
`;

const BannerDescription = styled.div`
  padding: 2rem 0 1rem;
  background: var(--orange);
  box-sizing: border-box;
  border-top: 1px solid var(--black);
  font-size: 14px;
`;

const BannerInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  box-sizing: border-box;
`;

const SubText = styled.p`
  max-width: 560px;
  font-size: 1.125rem;
  margin: 0;
`;

const SubscribeForm = styled.form`
  max-width: 452px;
  margin: 1.5rem 0 0;
  box-sizing: border-box;
  position: relative;
  z-index: 5;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  column-gap: 8px;
`;

const AsideGuide = styled.div`
  border-top: 1px solid var(--black);
  line-height: 1;
  padding: 0.5rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: var(--white);
  }

  a {
    margin: 1.4rem 0;
    text-decoration: none;
  }

  img {
    width: 69px;
    height: 37px;
  }
`;
