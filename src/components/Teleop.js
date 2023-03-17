import React from "react";
import GridMap from "./GridMap";
import TwistCommand from "./TwistCommand";
import "./css/RobotCommand.css"
import CameraView from "./CameraView";

const Teleop = () => {
    return(
        <div className="robot-command-container">
            <TwistCommand></TwistCommand>
            <CameraView></CameraView>
            <GridMap></GridMap>
            
        </div>
    )
}

export default Teleop