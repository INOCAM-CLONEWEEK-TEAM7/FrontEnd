import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "../images/right-arrow.png";
import Logo from "../components/common/Logo";
import { S } from "./FooterStyles";

function Footer() {
  const navigate = useNavigate();
  const [newcount, setNewCount] = useState(0);
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
        setNewCount(data.newcount);
        setSubscribeUser(data.subscribeuser);
      } catch (error) {
        // 오류 처리
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 데이터 요청 함수 실행
  }, []); // 빈 배열을 전달하여 한 번만 데이터를 가져오도록 설정

  return (
    <S.FooterLayout>
      <S.RealTimeState
        onClick={() => {
          navigate("/");
        }}
      >
        <p>
          오늘까지 {newcount}회 뉴스레터를 발행했고 {subscribeuser}명이 구독했어요!
        </p>
        <img src={arrow} alt="right-arrow"></img>
      </S.RealTimeState>
      <S.FooterContainer>
        <Logo $width="12%" />
        <S.FooterNav>
          <S.FooterNavItem>
            <a href="https://newneek.co/about">뉴닉탄생기</a>
            <a href="https://newneek-app.channel.io/lounge">고객센터</a>
            <a href="https://newneek.co/partnership">제휴 문의</a>
            <a href="https://www.instagram.com/newneek.official/">인스타그램</a>
          </S.FooterNavItem>
          <S.FooterNavItem>
            <a href="https://withall.newneek.co/">모두와 함께, 뉴닉</a>
            <a href="https://mmgh.newneek.co/">물물교환</a>
            <a href="https://webuildup.newneek.co/">여성의 날</a>
            <a href="https://napp.newneek.co/2020election/">2020 총선</a>
          </S.FooterNavItem>
          <S.FooterNavItem>
            <a href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769">서비스이용약관</a>
            <a href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19" style={{ fontWeight: "bold" }}>
              개인정보처리방침
            </a>
          </S.FooterNavItem>
        </S.FooterNav>
      </S.FooterContainer>
      <S.FooterContainer>
        <S.FooterAddressInfo>
          ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호:
          2020-서울마포-2938 / 개인정보보호책임자: 김소연 / 담당자메일주소: whatsup@newneek.co
          <br />
          서울특별시 마포구 어울마당로 35, 5층 (04048)
          <br />
          근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
          <p>ⓒ NEWNEEK Co., Ltd. 2018-2020.</p>
        </S.FooterAddressInfo>
      </S.FooterContainer>
    </S.FooterLayout>
  );
}

export default Footer;
