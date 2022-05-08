import React, { useContext, useEffect, useState } from "react";
import { RosContext } from "./ROS";
import { Topic } from "roslib/src/RosLib";
import './css/TopicData.css'

const TopicData = (props) => {
    const [topicData, setData] = useState(null)
    const [rosTopic, setTopic] = useState(null)
    const { ros } = useContext(RosContext)
    const { topic, topicType } = props

    const displayData = () => {
        if (!topicData) {
            return null
        }
        if (typeof topicData === "object") {
            const data = topicData.map((d, i) => {
                return <p key={i}>{d.toFixed(8)}</p>
            })
            return data
        }
        else {
            return <p>{topicData}</p>
        }

    }

    useEffect(() => {
        const subscriber = new Topic({
            ros: ros,
            name: topic,
            messageType: topicType
        })

        setTopic(subscriber)
    }, [ros, topic, topicType])

    useEffect(() => {
        if (rosTopic !== null) {
            rosTopic.subscribe((data) => {
                setData(data.data)
            })
        }
    }, [rosTopic])

    return (
        <div className="topic-data-container">
            <h4>{props.topic}</h4>
            {displayData()}
        </div>
    )
}

export default TopicData