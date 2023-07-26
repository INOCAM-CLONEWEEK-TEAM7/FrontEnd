import { styled } from "styled-components";

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

export const S = {
  MainBanner,
  MainBannerImage,
  BannerTitle,
  BannerDescription,
  BannerInner,
  SubText,
  SubscribeForm,
  ButtonGroup,
  AsideGuide,
};
