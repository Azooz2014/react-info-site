import React from "react"
import logo from '../images/logo.svg'
import '../styles/NavBarStyles.css'

export default function NavBar(){
    return(
        <nav className="nav">
            <img src={logo}/>
            <h2>ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </nav>
    );
}