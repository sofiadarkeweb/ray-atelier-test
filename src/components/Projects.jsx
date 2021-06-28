import React from "react";
import projectData from "./projectdata";
import Project from "./Project";

function createProject(props) {
	return (
		<Project
			key={props.id}
			name={props.title}
			img={props.img}
			subtitle={props.subtitle}
		/>
	);
}

const Projects = (props) => {
	return (
		<section id="project-list">
			<div className="projects-element">{projectData.map(createProject)}</div>
		</section>
	);
};

export default Projects;
