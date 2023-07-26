import React from 'react';
import { styled } from 'styled-components';
import GetListBtn from './GetListBtn';
import { Link } from 'react-router-dom';

const ContentsSection = ({data, pageNum,setPageNum, total}) => {
  
    const Card = ({item}) => {
        return (
            <ItemBoxLink to={`/detail/${item.newsId}`}>
                <Img src={item.imageUrl}></Img>
                <ItemBody>
                    <h3>{item.title}</h3>
                    <span>{item.date} {item.category}</span>
                </ItemBody>
            </ItemBoxLink>
        )
    }

    return (
        <Section>
            <Wrap>
                {
                  data.map((item)=>{
                        return <Card item={item}></Card>
                    })
                }
            </Wrap>
         <GetListBtn pageNum={pageNum} setPageNum={setPageNum} total={total}></GetListBtn>
        </Section>
    );
};

export default ContentsSection;

const Section = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    width:100%;
    gap:30px;

    padding-bottom: 30px;
    margin-bottom : 200px;
 
`;


const Wrap = styled.section`
    display:flex;
    flex-wrap:wrap;
    width:80%;
    border-left:1px solid black;
`;

const ItemBoxLink = styled(Link)`
    text-decoration:none;
    border-right:1px solid black;
    border-top:1px solid black;

    width:24.8%;
    filter:grayscale(1);
    
    &:hover{
        filter:grayscale(0);
    }

    @media only screen and (max-width: 1360px) {
        width:33.0333%;
    }
    @media only screen and (max-width: 900px) {
        width:48%;
    }
    @media only screen and (max-width: 720px) {
        width:100%;
    }
 
`;

const Img = styled.img`
    width:100%;
    height: 200px;
`
const ItemBody = styled.div`
    display:flex;
    flex-direction:column;
    padding : 5%;
    border-top:1px solid black;
    border-bottom:1px solid black;
    height:150px;
`

