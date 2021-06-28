// import project1 from "../public/media/project1.png";
import borg from "../media/borg.jpg";

// PROJECTS DATA
const projectData = [
	{
		id: "1",
		img: borg,
		imgalt: "björn borg",
		title: "Björn Borg",
		subtitle: "NK",
		info: `Client brief at Hyper Island. Developing a showcase site for film makers Martin Sandin and Viktor Annerståhl new venture openshop. In collaboration with Neha Hirve, Emma Scott-Allen and Saeid Fattahi`,
		info2: "React | Gatsby | SCSS | Figma | MarkUp",
		url: "https://openshopfilm.com/",
		repo: "https://github.com/sofiadarkeweb/open-shop-x-fun-crew.github.io", // if no repo, the button will not show up
	},
	{
		id: "2",
		img: borg,
		imgalt: "Pomodoro website",
		title: "Tiger of Sweden",
		subtitle: "FW 19",
		info: `A pomodoro work planning app using create-react-app`,
		info2: "React | NPM-packages ",
		url: "https://sofiadarkeweb.github.io/pompom/",
		repo: "https://github.com/sofiadarkeweb/pompom", // if no repo, the button will not show up
	},
	{
		id: "3",
		img: borg,
		imgalt: "Plantfeed website",
		title: "Totême",
		subtitle: "Christmas 2020",
		info: `An Hyper Island student project. An habit tracker app that helps your plants thrive! Never forget to 
	  water your plant again, we will help you with that. Fill in everything about your beloved plants and leave the rest to us. In collaboration with Adam Webb and Cecilia Lobo`,
		info2: "HTML | CSS | JavaScript | Figma",
		url: "https://sofiadarkeweb.github.io/habit-tracker/",
		repo: "https://github.com/sofiadarkeweb/habit-tracker", // if no repo, the button will not show up
	},
	{
		id: "4",
		img: borg,
		imgalt: "Sunshine detector website",
		title: "Sunshine Detector",
		subtitle: "Location location",
		info: "An Hyper Island student project using APIs and JavaScript. An app telling you how much time is left before sunset and sunrise in your location. CSS animations and colours-modes depending on time of the day. In collaboration with Cecilia Hallerby, Emma Scott-Allen and Alexandra Rzepecka",
		info2: "HTML | CSS | JavaScript | APIs | Figma",
		url: "https://emmy-codes.github.io/SunshineDetector/mainpage.html",
		repo: "https://github.com/sofiadarkeweb/SunshineDetector", // if no repo, the button will not show up
	},
];

export default projectData;
