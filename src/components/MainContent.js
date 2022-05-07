import React from 'react'
import '../styles/MainContentStyles.css'

export default function MainContent(props){
    return(
        <main className={props.isDarkMode ? "" : "light"}>
            <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile Apps</li>
                </ul>
         </main>
    );
}