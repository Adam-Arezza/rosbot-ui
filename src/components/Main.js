import React from "react";
import './css/Main.css'

const Main = (props) => {
    
    return (
        <div className="main-container">
            {props.children}
        </div>
    )
}

export default Main