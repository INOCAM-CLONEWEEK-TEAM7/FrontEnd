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
            url:'/tag/economic'
        },
        {
            tagName:'해외',
            url:'/tag/foreign'
        },
        {
            tagName:'테크',
            url:'/tag/digital'
        },
        {
            tagName:'스포츠',
            url:'/tag/sports'
        },
        {
            tagName:'사회',
            url:'/tag/society'
        },
        {
            tagName:'문화',
            url:'/tag/culture'
        },
        {
            tagName:'연예',
            url:'/tag/entertain'
        }
    ])
    return (
        <NavSection>
            {
                tag.map((item)=>{
                    let check=false;
                    item.url.includes(params.category) ? check=true : check=false ;
                    console.log(check, item.tagName);
                    return <StyledLink href={item.url} border={check}>{item.tagName}</StyledLink>
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

const StyledLink = styled.a`


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


