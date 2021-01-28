import React from 'react';
import { Container, GlobalStyle, Header } from './appStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <div className="header-area">
          <h1> {'{'} Andrei  <b> Amaral {'}'} </b> </h1>

          <FontAwesomeIcon icon={faMoon} />


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
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
  );
}

export default App;
