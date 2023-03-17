import React, { useContext, useState, useEffect, useCallback } from "react";
import './css/GridMap.css'
import { RosContext } from "./ROS";
import { Topic } from "roslib/src/RosLib";

const GridMap = (props) => {
    const [topic, setTopic] = useState(null)
    const [data, setData] = useState(null)
    const { ros } = useContext(RosContext)

    const generateGrid = () => {
        //# of columns
        const width = data.info.width

        //# of rows
        const height = data.info.height

        let cells = data.data.map((pixel, idx) => {
            return <div key={idx} 
                        className={`grid-cell ${pixel>0? "black":"white"}`}></div>
        })
        return cells
    }

    useEffect(() => {
        const subscriber = new Topic({
            ros: ros,
            name: "/map",
            messageType: "nav_msgs/msg/OccupancyGrid"
        })

        setTopic(subscriber)
    }, [ros])

    useEffect(() => {
        if (topic !== null) {
            topic.subscribe((data) => {
                setData(data)
            })
        }
    }, [topic])


    return (
        <div className="grid-map">
            {data ? generateGrid() : null}
        </div>
    )
}

export default GridMap