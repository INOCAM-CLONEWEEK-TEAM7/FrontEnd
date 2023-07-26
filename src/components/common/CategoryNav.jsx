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
      url: "/tag/economy",
    },
    {
      tagName: "🌐세계",
      url: "/tag/world",
    },
    {
      tagName: "🤖테크",
      url: "/tag/tech",
    },
    {
      tagName: "💪노동",
      url: "/tag/labor",
    },
    {
      tagName: "🌱환경",
      url: "/tag/environment",
    },
    {
      tagName: "🤝인권",
      url: "/tag/social-rights",
    },
    {
      tagName: "👥사회",
      url: "/tag/domestic-issue",
    },
    {
      tagName: "🎫문화",
      url: "/tag/culture",
    },
    {
      tagName: "🧘라이프",
      url: "/tag/life",
    },
  ]);
  return (
    <NavSection>
      {tag.map(item => {
        let check = false;
        item.url.includes(params.category) ? (check = true) : (check = false);
        console.log(check, item.tagName);
        return (
          <StyledLink to={item.url} border={check}>
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

const StyledLink = styled(Link)`
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
