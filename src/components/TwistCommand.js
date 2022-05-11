import React, { useState } from "react";
import Message from "roslib/src/core/Message";
import KeyGrid from "./KeyGrid";
import TopicPublisher from "./TopicPublisher";

const TwistCommand = (props) => {
    const [twistMessage, setTwistMessage] = useState(null)
    const topic = "cmd_vel"
    const {teleop} = props

    const createTwistMessage = (linear, angular) => {
        const message = new Message({
            linear: {
                x:linear.x,
                y:linear.y,
                z:linear.z,
            },
            angular: {
                x:angular.x,
                y:angular.y,
                z:angular.z
            }
        })
        setTwistMessage(message)
    }

    return (
        <div className="twist-command">
            <TopicPublisher topic={topic} message={twistMessage}></TopicPublisher>
            <h3>Teleop-Twist-Keyboard</h3>
            {teleop?<KeyGrid createTwistMessage={createTwistMessage}></KeyGrid>:null}
        </div>
    )

}

export default TwistCommand