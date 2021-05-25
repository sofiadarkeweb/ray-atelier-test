import React from "react";

import borg from "../media/borg.jpg";
// import { BrowserRouter, Route, Link } from "react-router-dom";

const Hero = () => {
	return (
		<header className="hero" id="hero-section">
			<img
				className="hero-img"
				// id="rotate"
				src={borg} //loop through array
				alt="borg_img"
				width="100"
			/>
			<div className="hero-text">
				<h1 className="intro-text">Ray Atelier</h1>
			</div>
		</header>
	);
};

export default Hero;
