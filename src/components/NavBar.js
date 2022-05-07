import React from "react"
import DarkLogo from '../images/dark-mode-logo.svg'
import LightLogo from '../images/light-mode-logo.svg'
import '../styles/NavBarStyles.css'
import ToggleSwitch from "./ToggleSwitch";

export default function NavBar(props){
    return(
        <nav className={props.isDarkMode ? "": "light"}>
            <img src={props.isDarkMode ? DarkLogo : LightLogo}/>
            <h2>ReactFacts</h2>
            {/* {props.isDarkMode ? <h3>React Course - Project 1</h3> : ""} */}
            <h3 className="switch-label">Light</h3>
            <ToggleSwitch
            isDarkMode={props.isDarkMode}
            handleToggle={props.handleToggle}/>
            <h3 className="switch-label">Dark</h3>
        </nav>
    );
}