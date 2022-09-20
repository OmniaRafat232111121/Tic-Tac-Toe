import React from 'react';
import './App.css';
import Header from './components/Header';
import light from'./styles/themes/light'
import {ThemeProvider} from's'

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
