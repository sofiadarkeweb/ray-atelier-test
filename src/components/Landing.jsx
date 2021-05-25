import React from "react";
import Projects from "./Projects";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Hero from "./Hero";
import { useState } from "react";
// import Hamburger from "hamburger-react";
// import { useState } from "react";
// import { Link } from "react-scroll";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Landing = () => {
	const [isClicked, setIsClicked] = useState(true);

	return (
		<div>
			<nav>
				<BrowserRouter>
					<div className="App">
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />
						<Route path="/clients" component={Clients} />
						<Route path="/contact" component={Contact} />

						<div className="nav-bar">
							<Link
								to="/projects"
								className="nav-bar-item"
								onClick={() => setIsClicked(false)}
							>
								Projects
							</Link>
							<Link
								to="/about"
								className="nav-bar-item"
								onClick={() => setIsClicked(false)}
							>
								About
							</Link>
							<Link
								to="/"
								className="nav-bar-item"
								onClick={() => setIsClicked(true)}
							>
								Ray Atelier
							</Link>

							<Link
								to="/clients"
								className="nav-bar-item"
								onClick={() => setIsClicked(false)}
							>
								Clients
							</Link>
							<Link
								to="/contact"
								className="nav-bar-item"
								onClick={() => setIsClicked(false)}
							>
								Contact
							</Link>
						</div>
					</div>
				</BrowserRouter>
			</nav>
			{isClicked ? <Hero /> : null}
		</div>
	);
	// const [isOpen, setOpen] = useState(false);
	// return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default Landing;
