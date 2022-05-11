import React, { useContext } from "react";
import { RosContext } from "./ROS";
import './css/Connection.css'


const Connection = () => {
    const {ros, status } = useContext(RosContext)

    const connectToWebsocket = () => {
        ros.connect('ws://localhost:9090')
    }

    return (
        <div className="connection-status"
        >
            {status === "Not Connected"?<button onClick={() => connectToWebsocket()}>Connect</button>:null}
            Connection status: {status}
            <div className="connection-indicator" style={status === "Connected" ? { background: "lime" } : { background: "grey" }}></div>
        </div>
    )
}

export default Connection
