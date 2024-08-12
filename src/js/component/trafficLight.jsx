import React, {useState} from "react";
import trafficLight from "../../styles/trafficLights.css"

let TrafficLight = () => {
    let [activeLight,setActiveLight] = useState(null);
    let handleLightClick = (color) => {
        setActiveLight(color)
    } 
    return (
        <div className="traffic-light">
            <div
                className={`light red ${activeLight === 'red' ? 'active' : ''}`}
                onClick={() => handleLightClick('red')}
            />
            <div
                className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
                onClick={() => handleLightClick('yellow')}
            />
            <div
                className={`light green ${activeLight === 'green' ? 'active' : ''}`}
                onClick={() => handleLightClick('green')}
            />
        </div>
    );
}

export default TrafficLight;