import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './routes';
import { Container, ContentContainer, GlobalStyle, Header, MobileOptionsArea } from './appStyle';
import { FaMoon } from "react-icons/fa"
import Asidebar from "./components/Asidebar";
import dataContent from "./data/pages";


function App() {
  const [currentPageObject, setCurrentPageObject] = useState<number>(0);
  const [isPageTitleVisible, setIsPageTitleVisible] = useState<boolean>(false);
  

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isHomeActive, setIsHomeActive] = useState<boolean>(true);
  const [isPortifolioActive, setIsPortifolioActive] = useState<boolean>(false);
  const [isContactActive, setIsContactActive] = useState<boolean>(false);


  useEffect(() => {
    setIsPageTitleVisible(true);
  }, [])

  

  function handleOnChangePage(homeActive: boolean, PortifolioActive: boolean, contactActive: boolean) {
    setIsPageTitleVisible(false);
    if (homeActive) setCurrentPageObject(0);
    if (PortifolioActive) setCurrentPageObject(1)
    if (contactActive) setCurrentPageObject(2)

    setIsHomeActive(homeActive);
    setIsPortifolioActive(PortifolioActive);
    setIsContactActive(contactActive);

    setTimeout(() => {
      setIsPageTitleVisible(true);
    }, 300)
  }


  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter>

        <Header>
          <div className="header-area">
            <h1> {'{'} Andrei  <b> Amaral {'}'} </b> </h1>

            <FaMoon />


            <div className={`menu-area ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </div>

            <div className="header-options">

              <Link to="/" className={isHomeActive ? 'active' : ''} onClick={(e: any) => handleOnChangePage(true, false, false)}> Home </Link>
              <Link to="/Projects" className={isPortifolioActive ? 'active' : ''} onClick={(e: any) => handleOnChangePage(false, true, false)}> Portifólio </Link>
              <Link to="/Contact" className={isContactActive ? 'active' : ''} onClick={(e: any) => handleOnChangePage(false, false, true)}> Contato </Link>

            </div>

          </div>

          <MobileOptionsArea className={isMenuOpen ? 'open' : ''}>
            <Link to="/" className={isHomeActive ? 'active' : ''} onClick={(e: any) => handleOnChangePage(true, false, false)}> Home </Link>
            <Link to="/Projects" className={isPortifolioActive ? 'active' : ''} onClick={(e: any) => handleOnChangePage(false, true, false)}> Portifólio </Link>
            <Link to="/Contact" className={isContactActive ? 'active' : ''} onClick={(e: any) => handleOnChangePage(false, false, true)}> Contato </Link>
          </MobileOptionsArea>




          <div className={`page-title-container ${isPageTitleVisible ? 'visible' : ''}`} >
            <h3> {dataContent.pages[currentPageObject].pageName}</h3>
            <h1> {dataContent.pages[currentPageObject].pageTitle} </h1>
          </div>
        </Header>
        <ContentContainer>

          <Asidebar />

          <Routes />

        </ContentContainer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
