import React, { useState } from "react";
import { styled } from "styled-components";
import minibenner from "../../images/minibenner.png";

const ContentsSection = () => {
  // 12개씩 받아온 정보를 추가 저장해주면 될 것 같다

  // 만약 서버에서 전체를 준다면
  const [pageNum, setPageNum] = useState(3);

  // a는 전체 데이터
  const a = [{ 1: 1 }, { 2: 1 }, { 3: 1 }, { 4: 1 }, { 5: 1 }, { 6: 1 }, { 7: 1 }, { 8: 1 }];

  // b는 자른 데이터
  const b = a.slice(0, pageNum);

  const Card = ({ item }) => {
    return (
      <ItemBox>
        <Img src={minibenner}></Img>
        <ItemBody>
          <h3>{`제목이 들어갑니다`}</h3>
          <span>
            {`날짜`} {`태그`}
          </span>
        </ItemBody>
      </ItemBox>
    );
  };

  return (
    <Section>
      <Wrap>
        {b.map(item => {
          return <Card item={item}></Card>;
        })}
      </Wrap>

      <Button onClick={() => setPageNum(pageNum + 3)}>더보기 </Button>
    </Section>
  );
};

export default ContentsSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding-bottom: 30px;
  margin-bottom: 200px;
  z-index: 100;
`;

const Wrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  border-left: 1px solid black;
`;

const ItemBox = styled.div`
  border-right: 1px solid black;
  border-top: 1px solid black;
  width: 25%;

  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }

  @media only screen and (max-width: 1360px) {
    width: 33.0333%;
  }
  @media only screen and (max-width: 900px) {
    width: 48%;
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  background: var(--beige);
`;

const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 90%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Button = styled.button`
  width: 200px;
  border-radius: 10px;
  padding: 10px;
`;
