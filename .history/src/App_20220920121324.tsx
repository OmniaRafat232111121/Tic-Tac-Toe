import React from 'react';
import './App.css';
import Header from './components/Header';
import light'./styles/themes/light'

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
