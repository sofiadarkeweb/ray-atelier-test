import React from "react";

function Project(props) {
	return (
		<div className="project-container">
			<a href={props.url}>
				<img className="project-image" src={props.img} alt={props.imgalt} />
			</a>
			<p className="project-title">{props.name}</p>
			<p className="project-title">{props.subtitle}</p>
		</div>
	);
}

export default Project;
