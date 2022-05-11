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
        // get the object keys
        const dataKeys = Object.keys(topicData)
        console.log(dataKeys)

        // check if more than 1 key
        if (dataKeys.length > 1) {
            let dataAsString = JSON.stringify(topicData)
            console.log(dataAsString)
            const items = dataKeys.map((k,i) => {
                return <p key={i}>{k}: {JSON.stringify(topicData[k]).replace("{","").replace("}","")}</p>
            })
            return items
        }

        else {
            const items = dataKeys.map((k, i) => {
                return <p key={i}>{k}: {topicData[k]}</p>
            })
            return items
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
                // console.log(data)
                setData(data)
            })
        }
    }, [rosTopic])

    return (
        <div className="topic-data-container">
            <h4>{props.topic}</h4>
            {topicData ? displayData() : null}
        </div>
    )
}

export default TopicData