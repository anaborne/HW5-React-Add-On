import { useState } from 'react'
import './App.css'
import HomeScreen from './pages/HomeScreen.jsx'
import ForecastScreen from './pages/ForecastScreen.jsx'

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const handleScreenToggle = () => {
    setCurrentScreen((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="App">
      <div onClick={handleScreenToggle}>
        {currentScreen === 0 ? <HomeScreen /> : <ForecastScreen />}
        <div className="screen-indicator">
          <div className={`dot ${currentScreen === 0 ? 'active' : ''}`}></div>
          <div className={`dot ${currentScreen === 1 ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  )
}

export default App
