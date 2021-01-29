import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { Container, ContentContainer, GlobalStyle, Header } from './appStyle';
import { FaMoon } from "react-icons/fa"
import Asidebar from "./components/Asidebar";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <div className="header-area">
          <h1> {'{'} Andrei  <b> Amaral {'}'} </b> </h1>

          <FaMoon />


          <div className="menu-area">
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </div>
        </div>

        <div className="page-title-container">
          <h3> Home</h3>
          <h1> Programador não por formação mas por vocação. </h1>
        </div>
      </Header>
      <ContentContainer>

      <Asidebar/>

        <BrowserRouter>
          <Routes />
        </BrowserRouter>

      </ContentContainer>
    </Container>
  );
}

export default App;
