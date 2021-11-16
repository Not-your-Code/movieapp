import React from 'react';
//GlobalStyles for elements
import {GlobalStyle} from './GlobalStyle';
//Header for the page
import Header from './components/Header';
//Home for the page 
import Home from './components/Home'
function App() {
  return (
    <div className="App">
    <Header />
    <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
