import React from "react";
import projectData from "./projectdata";
import Project from "./Project";
// import NavBar from "./NavBar";

function createProject(props) {
	return (
		<Project
			key={props.id}
			name={props.title}
			img={props.img}
			subtitle={props.subtitle}
			// info={props.info}
			// info2={props.info2}
			// imgalt={props.imgalt}
			// url={props.url}
			// repo={props.repo}
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
