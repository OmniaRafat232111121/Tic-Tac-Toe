import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import light from'./styles/themes/light'
import dark from'./styles/themes/dark'
import {ThemeProvider} from'styled-components'

function App() {
  const [theme,setTheme]=useState(light);
  const toggleTheme=()=>{
    setTheme(heme.title==='light'?dark:light)
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Header toggleTheme={toggleTheme}/>
   </div>
    </ThemeProvider>
    
  );
}

export default App;
