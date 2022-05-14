import React, { useState } from "react";
import './css/CameraView.css'

const CameraView = () => {
    const [frame, setFrame] = useState(null)

    const getFrame = (frame) => {
        setFrame(frame)
    }

    return (
        frame ? <img height={400} width={600} alt="robot-camera-view"></img> : <div className="empty-frame"></div>
    )
}

export default CameraView