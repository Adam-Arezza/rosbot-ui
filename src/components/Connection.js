import React, { useContext } from "react";
import { RosContext } from "./ROS";
import './css/Connection.css'


const Connection = () => {
    const { status } = useContext(RosContext)

    return (
        <div className="connection-status"
        >Connection status: {status}
            <div className="connection-indicator" style={status === "Connected" ? { background: "lime" } : { background: "grey" }}></div>
        </div>
    )
}

export default Connection
