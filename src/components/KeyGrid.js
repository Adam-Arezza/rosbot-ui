import React, { useEffect, useState } from "react";
import './css/KeyGrid.css'

const KeyGrid = (props) => {
    const [linear, setLinear] = useState({})
    const [angular, setAngular] = useState({})
    const keys = ["u","i","o","j","k","l","m",",","."]

    const keyPress = (e) => {
        console.log(e.key)
    }

    useEffect(() => {
        window.addEventListener("keydown", keyPress)
        return () => {
            window.removeEventListener("keydown", keyPress)
        }
    },[])

    return (
        <div className="key-grid">
            {keys.map((k,i) => <div className="keyboard-key" key={i}>{k}</div>)}
        </div>
    )
}

export default KeyGrid