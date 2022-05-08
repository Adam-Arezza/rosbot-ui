import React, { createContext, useState } from "react";
import ROSLIB from "roslib/src/RosLib";

export const RosContext = createContext()
export const RosProvider = (props) => {
    const [status, setStatus] = useState("Not Connected")
    const ros = new ROSLIB.Ros({
        url: 'ws://localhost:9090'
    })
    ros.on('connection', () => {
        setStatus("Connected")
    })
    ros.on('close', () => {
        setStatus("Not Connected")
    })
    ros.on('error', (err) => {
        console.log(err)
    })


    return (
        <RosContext.Provider
            value={{
                ros: ros,
                status: status
            }}>
            {props.children}
        </RosContext.Provider>
    )
}


