import React from 'react';
import { styled } from 'styled-components';

const ContentsSection = () => {
    return (
        <Section>
            <ItemBox>박스1</ItemBox>
            <ItemBox>박스2</ItemBox>
            <ItemBox>박스3</ItemBox>
            <ItemBox>박스1</ItemBox>
            <ItemBox>박스2</ItemBox>
            <ItemBox>박스3</ItemBox>
            <ItemBox>박스1</ItemBox>
            <ItemBox>박스2</ItemBox>
            <ItemBox>박스3</ItemBox>
        </Section>
    );
};

export default ContentsSection;
const Section = styled.section`
    display:flex;
    flex-wrap:wrap;

`;

const ItemBox = styled.div`
    max-width:100%;
    width: 300px;
    border:1px solid black;
    @media only screen and (min-width: 720px) {
    width:100%;
  }
 
  @media only screen and (min-width: 900px) {
    width:50%;
}
`;