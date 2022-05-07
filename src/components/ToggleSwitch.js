import React from 'react'
import '../styles/ToggleSwitchStyle.css'

export default function ToggleSwitch(props) {

    const [isToggled, setIsToggled] = React.useState(props.isDarkMode)

    function handleChange(){
        setIsToggled(prevState => !prevState)
    }

  return (
      <div>
        <label className="switch">
        <input 
        type="checkbox"
        onChange={handleChange}
        checked={isToggled}
        onClick={props.handleToggle}
        />
        <span className={props.isDarkMode ? "slider round" : "slider round light"}></span>
        </label>
      </div>
    
  )
}
