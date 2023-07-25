import { styled } from "styled-components";
import { useState, useEffect } from "react";
import ContentsSection from "../components/common/ContentsSection"
import Nav from "../components/common/Nav";
import MiniBenner from "../components/common/MiniBenner";

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

  return (
    <div>
      <BannerTitle>우리가 시간이 없지, 세상이 안 궁금하냐!</BannerTitle>
      <BannerBody>
        <BannerDescription>
          <p style={{ margin: 0 }}>🚀 지금 구독하면 {`내일 아침`}에 읽을 수 있어요.</p>
          <p style={{ margin: 0 }}>✨지금 {subscribeuser}명이 뉴닉을 읽고 있어요.</p>
          <p>
            세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!
            <br />
            월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
          </p>
          <SubscribeForm>
            <StyledInput $margin="20px 0px 8px" placeholder="이메일 주소"></StyledInput>
            <StyledInput placeholder="닉네임"></StyledInput>
          </SubscribeForm>
        </BannerDescription>
      </BannerBody>

      <Nav></Nav>
      <ContentsSection />
      <MiniBenner />
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

const SubscribeForm = styled.form`
  max-width: 452px;
  margin: 1.5rem 0 0;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 40px 11px 1.5rem;
  border: 1px solid var(--black);
  box-sizing: border-box;
  color: var(--black);
  line-height: 25.2px;
  margin: ${({ $margin }) => $margin || "0px 0px"};
`;
