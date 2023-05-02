import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Logo from "/public/Logo.webp"

const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &>a{
    text-decoration: none;
    color: black;
  }
`

const LogoBlock = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  column-gap: 10px;
`

const Title = styled.div`
  font-size: 28px;
`

const LogoImg = styled.img`
  height: 64px;
  width: 64px;
`


const NavBar = styled.div`
  display: flex;
  column-gap: 15px;
  font-size: 18px;

  & a {
    text-decoration: none;
    color: black;
  }

  & .active {
    font-weight: 600;
  }
`

const Header = () => {
  return (
    <header>
      <div className={'container'}>
        <HeaderContent>
          <NavLink to={'/'}>
            <LogoBlock>
              <Title>Civ Discount</Title>
              <LogoImg src={Logo}/>
            </LogoBlock>
          </NavLink>
          <NavBar>
            <NavLink to={'/'}>Главная</NavLink>
            <NavLink to={'/faq'}>Инструкция</NavLink>
            <NavLink to={'/patch-notes'}>История обновлений</NavLink>
          </NavBar>
        </HeaderContent>
      </div>
    </header>
  );
};

export default Header;