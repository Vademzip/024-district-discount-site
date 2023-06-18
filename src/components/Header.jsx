import React, {useEffect} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Logo from "/public/Logo.webp"
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    row-gap: 5px;
  }
`

const LogoBlock = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  column-gap: 10px;
  @media (max-width: 600px) {
    display: none;
  }
`

const Title = styled.div`
  font-size: 28px;
  color: ${props => props.theme === 'dark' ? 'white' : 'black'}
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
    color: ${props => props.theme === 'dark' ? 'white' : 'black'}

  }

  & .active {
    font-weight: 600;
  }
`

const Header = ({theme}) => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    useEffect(() => {
        const language = localStorage.getItem('language')
        if (language)
            i18n.changeLanguage(language)
    }, [])

    return (
        <header data-theme={theme}>
            <div className={'container'}>
                <HeaderContent>
                    <NavLink to={'/'}>
                        <LogoBlock>
                            <Title theme={theme}>Civ Discount</Title>
                            <LogoImg src={Logo}/>
                        </LogoBlock>
                    </NavLink>
                    <NavBar theme={theme}>
                        <NavLink to={'/'}>{t('header.Home')}</NavLink>
                        <NavLink to={'/faq'}>{t('header.Guide')}</NavLink>
                        <NavLink to={'/patch-notes'}>{t('header.Patch notes')}</NavLink>

                    </NavBar>
                    <Box sx={{display: 'flex', columnGap: "10px"}}>
                        <Typography
                            onClick={() => {
                                changeLanguage('ru')
                            }}
                            sx={{
                                fontWeight: `${currentLanguage === 'ru' ? 600 : ''}`,
                                textDecoration: `${currentLanguage === 'ru' ? 'underline' : ''}`,
                                cursor: 'pointer'
                            }}>RU</Typography>
                        <Typography
                            onClick={() => {
                                changeLanguage('en')
                            }}
                            sx={{
                                fontWeight: `${currentLanguage === 'en' ? 600 : ''}`,
                                textDecoration: `${currentLanguage === 'en' ? 'underline' : ''}`,
                                cursor: 'pointer'
                            }}>EN</Typography>
                    </Box>
                </HeaderContent>
            </div>
        </header>
    );
};

export default Header;