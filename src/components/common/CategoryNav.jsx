import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const params = useParams();
  console.log(params);
  const [tag, setTag] = useState([
    {
      tagName: "전체",
      url: "/",
    },
    {
      tagName: "⚖️정치",
      url: "/tag/politics",
    },
    {
      tagName: "💰경제",
      url: "/tag/economic",
    },
    {
      tagName: "🌐해외",
      url: "/tag/foreign",
    },
    {
      tagName: "🤖테크",
      url: "/tag/digital",
    },
    {
      tagName: "💪스포츠",
      url: "/tag/sports",
    },
    {
      tagName: "🤝연예",
      url: "/tag/entertain",
    },
    {
      tagName: "👥사회",
      url: "/tag/society",
    },
    {
      tagName: "🎫문화",
      url: "/tag/culture",
    },
  ]);

  return (
    <NavSection>
      {tag.map(item => {
        let check = false;
        item.url.includes(params.category) ? (check = true) : (check = false);
        console.log(check, item.tagName);
        return (
          <StyledLink href={item.url} border={check}>
            {item.tagName}
          </StyledLink>
        );
      })}
    </NavSection>
  );
};

export default Nav;

const NavSection = styled.section`
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  background: var(--white);
  box-sizing: border-box;
  overflow: hidden;
  position: sticky;
  top: 0;
  margin-bottom: -1px;
  z-index: 1;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  padding: 1.25rem 0;
  box-sizing: border-box;
  font-size: 1.125rem;
  text-decoration: none;
  color: var(--black);
  cursor: pointer;
  border-bottom: ${props => (props.border ? "3px solid var(--black)" : "none")};

  &:hover {
    color: var(--orange);
  }
`;
