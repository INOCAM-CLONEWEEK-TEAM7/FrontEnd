import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from "styled-components";

const Nav = () => {
    const params=useParams();
    console.log(params);
    const [tag,setTag] = useState([
        {
            tagName:'전체',
            url:'/'
        },
        {
            tagName:'정치',
            url:'/tag/politics'
        },
        {
            tagName:'경제',
            url:'/tag/economy'
        },
        {
            tagName:'세계',
            url:'/tag/world'
        },
        {
            tagName:'테크',
            url:'/tag/tech'
        },
        {
            tagName:'노동',
            url:'/tag/labor'
        },
        {
            tagName:'환경',
            url:'/tag/environment'
        },
        {
            tagName:'인권',
            url:'/tag/social-rights'
        },
        {
            tagName:'사회',
            url:'/tag/domestic-issue'
        },
        {
            tagName:'문화',
            url:'/tag/culture'
        },
        {
            tagName:'라이프',
            url:'/tag/life'
        }
    ])
    return (
        <NavSection>
            {
                tag.map((item)=>{
                    let check=false;
                    item.url.includes(params.category) ? check=true : check=false ;
                    console.log(check, item.tagName);
                    return <StyledLink to={item.url} border={check}>{item.tagName}</StyledLink>
                })
            }

        </NavSection>
    );
};

export default Nav;

const NavSection = styled.section`

    display:flex;
    justify-content:center;
    white-space: nowrap;

   overflow: overlay;
    gap:20px;

    height:50px;
    background-color:white;

    border-bottom: 1px solid black;

`;

const StyledLink = styled(Link)`


    padding-top : 10px;
    padding-bottom : 10px;

    width:40px;
  

    text-align:center;
    text-decoration:none;
    &:hover{
        color :#ff6b00;

    }
    border-bottom:${props => props.border ? "3px solid black":"none"};

`;


