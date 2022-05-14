import React from "react";
import './css/GridMap.css'

const GridMap = (props) => {

    const generateCells = () => {
        const cells = []
        for(let i = 0; i < (31*31); i++){
            if(i === ((30*30) / 2) + 30 ) {
                const cell = <div key={i} className="grid-cell robot"></div>
                cells.push(cell)
            }
            else {
                const cell = <div key={i} className="grid-cell"></div>
                cells.push(cell)
            }
            
        }
        return cells
    }

    return (
        <div className="grid-map">
            {generateCells()}
        </div>
    )
}

export default GridMap