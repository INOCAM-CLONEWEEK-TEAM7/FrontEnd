import React, { useState } from "react";
import { styled } from "styled-components";
import PicMiniBenner from "../../images/minibenner.png";
import AfterMinibenner from "../../images/afterMinibenner.png";
import arrow from "../../images/right-arrow.png";

const MiniBenner = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <BennerATag
      href="https://app.newneek.co/"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <BennerFigure>
        <MiniBeenrImg src={isHover ? AfterMinibenner : PicMiniBenner}></MiniBeenrImg>
      </BennerFigure>
      <BennerLine />
      <BennerText>
        더 편하게 보고싶다면? 뉴닉 앱에서 만나요!
        <img src={arrow} alt="right-arrow"></img>
      </BennerText>
    </BennerATag>
  );
};

export default MiniBenner;

const MiniBeenrImg = styled.img`
  width: 300px;
  height: 188px;
  position: absolute;
  transform: translate(-50%, -50.8%);
  background-size: contain;
  background-repeat: no-repeat;
`;

const BennerATag = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const BennerLine = styled.div`
  margin-top: 5.5rem;
  width: 100%;
  height: 90px;
  background-color: var(--orange);
  border-top: 2px solid black;
  border-bottom: 1px solid var(--black);
`;

const BennerFigure = styled.div`
  text-align: center;
  width: 100%;
`;

const BennerText = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 57px;
  font-size: 1.125rem;
  font-weight: 600;
  gap: 1rem;
  border-bottom: 1px solid var(--black);
`;
