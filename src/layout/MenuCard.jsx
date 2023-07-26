import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { logout } from '../api/user';

const MenuContainer = styled.div`
  width: 280px;
  box-sizing: border-box;
  background: var(--white);
  border: 1px solid var(--black);
  position: relative;
  top: 72px;
  left: 98px;

  &>*{
    display: block;
    padding: .75rem 1.5rem;
    border-bottom: 1px solid #051619;
    color: #051619;
    cursor: pointer;
    color: var(--orange);
  }
`

function MenuCard() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    logout();
    navigate(0);
  }
  return (
    <MenuContainer>
      <div onClick={handleOnClick}>로그아웃</div>
    </MenuContainer>
  )
}



export default MenuCard