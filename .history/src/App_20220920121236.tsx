import React from 'react';
import './App.css';
import Header from './components/Header';
import {ThemeProvider} from'./styles/themes/light'
function App() {
  return (
    <ThemeProvider t>
    <div className="App">
    
    <Header/>
   </div>
    </ThemeProvider>
    
  );
}

export default App;
