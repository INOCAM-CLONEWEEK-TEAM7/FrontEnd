import { styled } from "styled-components";

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

  p {
    margin-top: 20px;
    font-size: 12px;
  }
`;

/*
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

export const S = {
  FooterLayout,
  RealTimeState,
  FooterContainer,
  FooterNav,
  FooterNavItem,
  FooterAddressInfo,
};
