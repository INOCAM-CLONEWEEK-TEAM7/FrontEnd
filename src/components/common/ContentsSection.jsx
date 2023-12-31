import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";
import GetListBtn from "./GetListBtn";
import NullImage from "../../images/nullIamge.png";
import categoryToKo from "./categoryToKo";

const ContentsSection = ({ data = [], pageNum, setPageNum = () => {}, total }) => {
  const BtnRef = useRef();

  // useEffect(() => {
  //   if (pageNum !== 0)
  //     BtnRef.current?.scrollIntoView({ behavior: 'smooth' });

  // }, [])
  const Card = ({ item }) => {
    return (
      <ItemBoxLink href={`/detail/${item.newsId}`}>
        {item.imageUrl === null ? (
          <Img loading="lazy" src={NullImage}></Img>
        ) : (
          <Img loading="lazy" src={item.imageUrl}></Img>
        )}
        <ItemBody>
          <h3>{item.title}</h3>
          <MetaContainer>
            <div>{item.date.split("T")[0].replaceAll("-", "/")}</div>
            <div>{categoryToKo(item.category)}</div>
          </MetaContainer>
        </ItemBody>
      </ItemBoxLink>
    );
  };

  return (
    <Section>
      <Wrap>
        {
          data.map((item, index) => {
            return <Card item={item} key={index} ></Card>
          })
        }
      </Wrap>
      <div ref={BtnRef} />
      {
        //마지막에 도착하면 버튼 삭제
        total <= 12 || total - 12 <= pageNum * 12 ? (
          <></>
        ) : (
          <GetListBtn pageNum={pageNum} setPageNum={setPageNum} total={total}></GetListBtn>
        )
      }
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
`;

const Wrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  border-left: 1px solid black;
`;

const ItemBoxLink = styled.a`
  text-decoration: none;
  border-right: 1px solid black;
  border-top: 1px solid black;

  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
  width: 24.5%;
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
    width:100%;
    height: 200px;
    border-bottom:1px solid black;
`
const ItemBody = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    padding : 0 5% 5% 5%;
    border-bottom:1px solid black;
    height: 110px;
`

const MetaContainer = styled.div`
  display: flex;
  gap: 14px;
  & > div {
    color: var(--black);
  }
`;
