import React from "react";
import TrafficLight from "./trafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<TrafficLight/>
		</div>
	);
};

export default Home;
