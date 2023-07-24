import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import arrow from '../right-arrow.png';
import logo from '../newneek-logo.png';

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterLayout>
      <RealTimeState
        onClick={() => {
          navigate('/main');
        }}
      >
        <p>
          오늘까지 {}회 뉴스레터를 발행했고 {}명이 구독했어요!
        </p>
        <img src={arrow} alt='right-arrow'></img>
      </RealTimeState>
      <FooterContainer>
        <FooterLogo>
          <img src={logo} alt='footer-logo'></img>
        </FooterLogo>
        <FooterNav>
          <FooterNavItem>
            <a href='https://newneek.co/about'>뉴닉탄생기</a>
            <a href='https://newneek-app.channel.io/lounge'>고객센터</a>
            <a href='https://newneek.co/partnership'>제휴 문의</a>
            <a href='https://www.instagram.com/newneek.official/'>인스타그램</a>
          </FooterNavItem>
          <FooterNavItem>
            <a href='https://withall.newneek.co/'>모두와 함께, 뉴닉</a>
            <a href='https://mmgh.newneek.co/'>물물교환</a>
            <a href='https://webuildup.newneek.co/'>여성의 날</a>
            <a href='https://napp.newneek.co/2020election/'>2020 총선</a>
          </FooterNavItem>
          <FooterNavItem>
            <a href='https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769'>서비스이용약관</a>
            <a href='https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19' style={{ fontWeight: 'bold' }}>
              개인정보처리방침
            </a>
          </FooterNavItem>
        </FooterNav>
      </FooterContainer>
      <FooterContainer>
        <FooterAddressInfo>
          ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호:
          2020-서울마포-2938 / 개인정보보호책임자: 김소연 / 담당자메일주소: whatsup@newneek.co
          <br />
          서울특별시 마포구 어울마당로 35, 5층 (04048)
          <br />
          근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
          <p>ⓒ NEWNEEK Co., Ltd. 2018-2020.</p>
        </FooterAddressInfo>
      </FooterContainer>
    </FooterLayout>
  );
}

export default Footer;

const FooterLayout = styled.footer`
  border-top: 1px solid var(--black);
  width: 100%;
`;

const RealTimeState = styled.div`
  border-bottom: 1px solid var(--black);
  line-height: 1;
  padding: 0.5rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  cursor: pointer;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 180px;
  max-width: 90%;
  padding: 4rem 5% 0;
  display: flex;
  justify-content: space-between;
`;

const FooterLogo = styled.div`
  width: 50%;

  img {
    height: 28px;
  }
`;

const FooterNav = styled.div`
  width: 50%;
  display: flex;
`;

const FooterNavItem = styled.div`
  width: inherit;
  margin-bottom: 1rem;
  flex-direction: column;
  text-align: right;

  a {
    display: block;
    color: var(--black);
    text-decoration: none;
    padding: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: var(--orange);
    }
  }
`;

const FooterAddressInfo = styled.div`
  font-size: 14px;

  p {
    margin-top: 20px;
    font-size: 12px;
  }
`;

/*
@-webkit-keyframes marquee {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    to {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%)
    }
}

@keyframes marquee {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    to {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%)
    }
}

@-webkit-keyframes marquee-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    to {
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@keyframes marquee-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    to {
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }
}
*/
