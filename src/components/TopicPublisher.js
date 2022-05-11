import React,{useContext, useEffect} from "react";
import Topic from "roslib/src/core/Topic";
import { RosContext } from "./ROS";

const TopicPublisher = (props) => {
    const {ros} = useContext(RosContext)
    const {topic, topicType, message} = props

    useEffect(() => {
        if(topic && message && topicType) {
            const publisher = new Topic({
                ros: ros,
                name: topic,
                messageType: topicType
            })
            publisher.publish(message)
        }
        
    }, [ros, topic, topicType, message])
    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default TopicPublisher