import React, { useEffect, useContext, useState } from "react";
import ROS3D from "ros3d/src/Ros3D"
import { Viewer, Grid, UrdfClient, OccupancyGridClient, OccupancyGrid} from "ros3d";
import { RosContext } from "./ROS";
import "../components/css/urdf-viewer.css"

const UrdfVisualizer = (props) => {
    const [isViewer, setViewer] = useState(false)
    const [urdfViewer, setUrdfViewer] = useState(null)
    const [urdfClient, setUrdfClient] = useState(null)
    const [grid, setGrid] = useState(null)
    const {ros, tfClient} = useContext(RosContext)

    const init = () => {
        let viewer = new Viewer({
            divID: 'map',
            width: 800,
            height: 600,
            antialias: true
        })

        viewer.addObject(new Grid())

        // let urdfClient = new UrdfClient({
        //     ros:ros,
        //     tfClient:tfClient,
        //     path: '/',
        //     rootObject: viewer.scene,
        //     loader: ROS3D.COLLADA_LOADER
        // })

        let gridClient = new OccupancyGridClient({
            ros:ros,
            rootObject: viewer.scene
        })
        
        setUrdfViewer(viewer)
        setGrid(gridClient)
        // setUrdfClient(urdfClient)

    }

    useEffect(() => {
        if (!isViewer && !urdfViewer) {
            init()
        }
        setViewer(true)
    }, [isViewer, urdfViewer])


    return (
        <div className="urdf-container">
            <div id="map"></div>
        </div>

    )
}

export default UrdfVisualizer