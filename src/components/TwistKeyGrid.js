import React, { useCallback, useEffect, useState } from "react";
import './css/KeyGrid.css'

const TwistKeyGrid = (props) => {
    const [currentKey, setCurrentKey] = useState("")
    const keys = ["u", "i", "o", "j", "k", "l", "m", ",", "."]
    const { createTwistMessage } = props

    const setTwistVels = useCallback((linearArray, angularArray) => {
        const linearVels = {}
        const angularVels = {}
        linearVels.x = linearArray[0]
        linearVels.y = linearArray[1]
        linearVels.z = linearArray[2]
        angularVels.x = angularArray[0]
        angularVels.y = angularArray[1]
        angularVels.z = angularArray[2]
        createTwistMessage(linearVels, angularVels)
    }, [createTwistMessage])

    const keyPress = useCallback((e) => {
        setCurrentKey(e.key)
        switch (e.key) {
            case "u":
                setTwistVels([1.0, 0.0, 0.0], [0.0, 0.0, -1.0])
                break
            case "i":
                setTwistVels([1.0, 0.0, 0.0], [0.0, 0.0, 0.0])
                break
            case "o":
                setTwistVels([1.0, 0.0, 0.0], [0.0, 0.0, 1.0])
                break
            case "j":
                setTwistVels([0.0, 0.0, 0.0], [0.0, 0.0, -1.0])
                break
            case "k":
                setTwistVels([0.0, 0.0, 0.0], [0.0, 0.0, 0.0])
                break
            case "l":
                setTwistVels([0.0, 0.0, 0.0], [0.0, 0.0, 1.0])
                break
            case "m":
                setTwistVels([-1.0, 0.0, 0.0], [0.0, 0.0, -1.0])
                break
            case ",":
                setTwistVels([-1.0, 0.0, 0.0], [0.0, 0.0, 0.0])
                break
            case ".":
                setTwistVels([-1.0, 0.0, 0.0], [0.0, 0.0, 1.0])
                break
            default:
                return
        }
    }, [setTwistVels])

    const keyUp = useCallback((e) => {
        if (currentKey !== e.key) {
            setCurrentKey("")
        }

    }, [currentKey])

    useEffect(() => {
        window.addEventListener("keydown", keyPress)
        return () => {
            window.removeEventListener("keydown", keyPress)
        }
    }, [keyPress])

    useEffect(() => {
        window.addEventListener("keyup", keyUp)
        return () => {
            window.removeEventListener("keyup", keyUp)
        }
    }, [keyUp])

    return (
        <div className="key-grid">
            {keys.map((k, i) => <div className="keyboard-key" style={currentKey === k ? { background: "lime", color: "black" } : null} key={i}>{k}</div>)}
        </div>
    )
}

export default TwistKeyGrid