import React, { useState } from "react";
import Message from "roslib/src/core/Message";
import KeyGrid from "./KeyGrid";
import TopicPublisher from "./TopicPublisher";
import './css/Twist.css'

const TwistCommand = (props) => {
    const [twistMessage, setTwistMessage] = useState(null)
    const [linearVelocity, setLinearVelocity] = useState(0.2)
    const [angularVelocity, setAngularVelocity] = useState(0.5)
    const topic = "/cmd_vel"
    const topicType = "geometry_msgs/Twist"
    const { teleop } = props

    const createTwistMessage = (linear, angular) => {
        const message = new Message({
            linear: {
                x: linear.x * linearVelocity,
                y: linear.y * linearVelocity,
                z: linear.z * linearVelocity,
            },
            angular: {
                x: angular.x * angularVelocity,
                y: angular.y * angularVelocity,
                z: angular.z * angularVelocity
            }
        })
        setTwistMessage(message)
    }

    return (
        <div className="twist-command">
            {twistMessage ? <TopicPublisher topic={topic} message={twistMessage} topicType={topicType}></TopicPublisher> : null}
            <h3>Teleop-Twist-Keyboard</h3>
            <div className="linear-btns">
                <button onClick={() => setLinearVelocity(linearVelocity + 0.05)}>Increase Linear</button>
                <button onClick={() => setLinearVelocity(linearVelocity - 0.05)}>Decrease Linear</button>
            </div>
            <div className="angular-btns">
                <button onClick={() => setAngularVelocity(angularVelocity + 0.05)}>Increase Angular</button>
                <button onClick={() => setAngularVelocity(angularVelocity - 0.05)}>Decrease Angular</button>
            </div>
            {teleop ? <KeyGrid createTwistMessage={createTwistMessage}></KeyGrid> : null}
        </div>
    )

}

export default TwistCommand