import { styled } from "styled-components";

const FooterLayout = styled.footer`
  border-top: 1px solid var(--black);
  width: 100%;

  & p {
    color: var(--black);
  }

  .slide {
    width: 100%;
    line-height: 1;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--black);
    overflow: hidden;
    cursor: pointer;
  }

  .slide-in {
    display: flex;
    width: 4800px;
  }

  .text-list {
    display: flex;
    width: 2400px;
  }

  .text {
    width: 190px;
    margin-right: 50px;
    font-size: 1.5rem;
  }

  .animation {
    animation: marquee-right 20s linear infinite;
  }

  @keyframes marquee-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

const RealTimeState = styled.div`
  border-bottom: 1px solid var(--black);
  line-height: 1;
  padding: 0.5rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    display: none;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 180px;
  max-width: 90%;
  padding: 4rem 5% 0;
  display: flex;
  justify-content: space-between;
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
  color: var(--black);
  p {
    margin-top: 20px;
    font-size: 12px;
    color: var(--black);
  }
`;

export const S = {
  FooterLayout,
  RealTimeState,
  FooterContainer,
  FooterNav,
  FooterNavItem,
  FooterAddressInfo,
};
