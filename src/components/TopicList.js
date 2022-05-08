import React, { useCallback, useContext, useEffect, useState } from "react";
import { RosContext } from './ROS'
import './css/TopicList.css'

const TopicList = (props) => {
    const [topicList, setTopics] = useState([])
    const [types, setTypes] = useState([])
    const { ros } = useContext(RosContext)

    const createNewTopic = (top, typ) => {
        props.newTopic(top, typ)
    }

    const cancelTopic = (top) => {
        props.cancelTopic(top)
    }

    const getRosTopics = useCallback(() => {
        ros.getTopics((topics) => {
            setTopics(topics.topics)
            setTypes(topics.types)
        })
    }, [ros])

    useEffect(() => {
        if (topicList.length === 0) {
            getRosTopics()
        }
    }, [topicList.length, getRosTopics])

    return (
        <div className="topics-list-container">
            <h3>Available Topics</h3>
            <button onClick={() => getRosTopics()}>Scan for Topics</button>
            {topicList.map((topic, index) =>
                <li className="topic-item" key={index}>
                    {topic}
                    {props.subbed.map(t => t.topic).includes(topic) ? 
                    <button className="sub-btn" onClick={() => cancelTopic(topic, types[index])}>
                        Cancel
                    </button> :
                        <button className="sub-btn" onClick={() => createNewTopic(topic, types[index])}>
                            Subscribe
                        </button>}
                </li>)}
        </div>
    )
}

export default TopicList