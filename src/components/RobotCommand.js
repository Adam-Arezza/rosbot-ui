import React, { useState } from "react";
import TwistCommand from "./TwistCommand";

const RobotCommand = () => {
    const [teleop, setTeleop] = useState(false)
    return(
        <div className="robot-command-container">
            <TwistCommand teleop={teleop}></TwistCommand>
            <button onClick={() => setTeleop(!teleop)}>{teleop? "Disable Teleop":"Enable Teleop"}</button>
        </div>
    )
}

export default RobotCommand