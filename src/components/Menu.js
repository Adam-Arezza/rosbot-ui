import React, { useState } from "react";
import './css/Menu.css'

const Menu = (props) => {
    const [tab, setTab] = useState("Topics Logger")
    const options = ["Topics Logger","Teleop", "Viewer"]

    const tabSelection = (o) => {
        setTab(o)
        props.select(o)
    }
    const showOptions = options.map((o,i) => {
        return (
        <div className="menu-item" 
            key={i} 
            onClick={() => tabSelection(o)}
            style={tab === o? {textDecoration: "underline lime"}: null}>{o}</div>)
    })
    return (
        <div className="menu">
            {showOptions}
        </div>
    )
}

export default Menu