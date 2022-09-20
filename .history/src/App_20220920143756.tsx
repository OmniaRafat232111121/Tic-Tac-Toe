import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import light from'./styles/themes/light'
import {ThemeProvider} from'styled-components'

function App() {
  const [Theme,setTh]
  return (
    <ThemeProvider theme={light}>
    <div className="App">
    <Header/>
   </div>
    </ThemeProvider>
    
  );
}

export default App;
