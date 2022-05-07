import './styles/App.css';
import './styles/global.css'

import NavBar  from './components/NavBar';
import MainContent from './components/MainContent';
import React from "react"

function App() {

  const [isDarkMode, setIsDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
      setIsDarkMode(prevMode => !prevMode)
        console.log(isDarkMode)
    }

  return (
    <div className="container">
      <NavBar 
      isDarkMode={isDarkMode}
      handleToggle={toggleDarkMode}
      />
      <MainContent isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
