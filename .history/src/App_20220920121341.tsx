import React from 'react';
import './App.css';
import Header from './components/Header';
import light from'./styles/themes/light'
import {themeProv}

function App() {
  return (
    <ThemeProvider theme={light}>
    <div className="App">
    
    <Header/>
   </div>
    </ThemeProvider>
    
  );
}

export default App;
