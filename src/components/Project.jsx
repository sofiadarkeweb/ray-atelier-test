// import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

function Project(props) {
	return (
		<div className="project-container">
			<a href={props.url}>
				<img className="project-image" src={props.img} alt={props.imgalt} />
			</a>
			<p className="project-title">{props.name}</p>
			<p className="project-title">{props.subtitle}</p>
			{/* <BrowserRouter>
					<div className="App">
						<Route path="/project" + {props.id} component={Project} />
					

						<div className="nav-bar">
							<Link
								to="/projects"
								className="nav-bar-item"
								onClick={() => setIsClicked(false)}
							>
								Projects
							</Link>
						

						
						</div>
					</div>
				</BrowserRouter> */}
		</div>
	);
}

export default Project;

/*<a className="cta-buttons-project" href={props.url}>
					Website
				</a>*/
