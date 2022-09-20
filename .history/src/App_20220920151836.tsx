import React,{us from 'react';
import './App.css';
import Header from './components/Header';
import light from'./styles/themes/light'
import dark from'./styles/themes/dark'
import usePersistedState from './utils/usePersistedState';
import {ThemeProvider} from'styled-components'

function App() {
  const [theme,setTheme]=usePersistedState('theme',light);
  const toggleTheme=()=>{
    setTheme(theme.title==='light'?dark:light)
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
