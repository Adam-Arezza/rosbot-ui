import React, { useEffect, useState } from "react";
import Message from "roslib/src/core/Message";
import KeyGrid from "./TwistKeyGrid";
import TopicPublisher from "./TopicPublisher";
import './css/Twist.css'

const TwistCommand = () => {
    const [twistMessage, setTwistMessage] = useState(null)
    const [linearVelocity, setLinearVelocity] = useState(0.2)
    const [angularVelocity, setAngularVelocity] = useState(0.5)
    const topic = "/cmd_vel"
    const topicType = "geometry_msgs/Twist"

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

    const displayTwistMessage = () => {
        const linearVals = twistMessage.linear
        const angularVals = twistMessage.angular
        const linear = Object.keys(linearVals).map((linVal, i) => <p className="twist-value" key={i}>{linVal}: {twistMessage.linear[linVal]}</p>)
        const angular = Object.keys(angularVals).map((angVal, i) => <p className="twist-value" key={i}>{angVal}: {twistMessage.angular[angVal]}</p>)
        const display = <div style={{display:"flex", flexDirection:"row"}}>
            <div className="twist-items-col">
                <span>Linear</span>
                {linear}
            </div>
            <div className="twist-items-col">
                <span>Angular</span>
                {angular}
            </div>
        </div>
        return display
    }

    useEffect(() => {
        if(!twistMessage) {
            const linear = {x:0.0,y:0.0,z:0.0}
            const angular = {x:0.0, y:0.0, z:0.0}
            createTwistMessage(linear,angular)
        }
    })
    return (
        <div className="twist-command">
            {twistMessage ? <TopicPublisher topic={topic} message={twistMessage} topicType={topicType}></TopicPublisher> : null}
            <h3 style={{margin:5}}>Teleop-Twist-Keyboard</h3>
            <div className="linear-btns">
                <button onClick={() => setLinearVelocity(linearVelocity + 0.05)}>Increase Linear</button>
                <button onClick={() => setLinearVelocity(linearVelocity - 0.05)}>Decrease Linear</button>
            </div>
            <div className="angular-btns">
                <button onClick={() => setAngularVelocity(angularVelocity + 0.05)}>Increase Angular</button>
                <button onClick={() => setAngularVelocity(angularVelocity - 0.05)}>Decrease Angular</button>
            </div>
            {twistMessage? displayTwistMessage():null}
            <KeyGrid createTwistMessage={createTwistMessage}></KeyGrid>
        </div>
    )
}

export default TwistCommand