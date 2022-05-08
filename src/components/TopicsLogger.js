import React, { useState } from "react";
import TopicData from "./TopicData";
import TopicList from "./TopicList";
import './css/TopicsLogger.css'

const TopicsLogger = () => {
    const [topics, setTopics] = useState([])

    const cancelTopic = (t) => {
        console.log(t)
        const subbedTopics = [...topics]
        const filteredTopics = subbedTopics.filter(top => top.topic !== t)
        setTopics(filteredTopics)
    }

    const newTopic = (top, typ) => {
        const topicsUpdate = [...topics]
        const addTopic = { topic: top, type: typ }
        const currentTopics = topicsUpdate.map(t => {
            return t.topic
        })
        if (!currentTopics.includes(addTopic.topic)) {
            topicsUpdate.push(addTopic)
            setTopics(topicsUpdate)
        }
    }

    const showTopics = () => {
        const visibleTopics = topics.map((topic, index) => <TopicData
            key={index}
            topic={topic.topic}
            topicType={topic.type}
        ></TopicData>)
        return visibleTopics
    }
    return (
        <div className="topics-logger-container">
            <TopicList newTopic={newTopic}
                subbed={topics}
                cancelTopic={cancelTopic}>
            </TopicList>
            <div className="topics-grid">
                {showTopics()}
            </div>
        </div>
    )
}

export default TopicsLogger