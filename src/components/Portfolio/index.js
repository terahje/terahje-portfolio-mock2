import React from "react";
import Project from "../Project";

function Portfolio() {
	const projects = [
		{
			name: "The Cutting Edge - Final Cut",
			description:
				"An App that a user can go through hairstyles provided, then contact a hairstylist to provide service.",
			image: "cuttingEdgeFinalCut.gif",
			technologies: [
				"JavaScript",
				"Node.js",
				"React & React Bootstrap",
				"MongoDb",
				"Express",
				"Nodemon",
				"GraphQl",
				"Concurrently",
				"GraphQl",
				"Heroku",
			],
			github: "https://github.com/terahje/the-cutting-edge-final-cut",
			deployed: "https://the-cutting-edge-final-cut800.herokuapp.com",
			},
			{
			name: "Cutting Edge",
			description:
				"An appointment scheduler for a hair salon using node js, SQL and material design. Second Group Project.",
			image: "cutting-edge-image.jpg",
			technologies: [
				"JavaScript",
				"Node.js",
				"Handlebars.js",
				"Express & Sequelize",
				"Nodemon",
				"Sweet Alert",
				"Heroku",
			],
			github: "https://github.com/terahje/cutting-edge",
			deployed: "https://the-cutting-edge-20.herokuapp.com",
		},
        {
			name: "Wizier",
			description:
				"A flash card game that can help with multiple subjects. First Group Project",
			image: "wizier-image.jpg",
			technologies: [
				"HTML",
				"CSS",
				"JQuery",
				"Sweet Alert",
			],
			github: "https://github.com/terahje/group-assignment",
			deployed: "https://terahje.github.io/group-assignment",
        },
        {
			name: "Tech Blog",
			description:
				"A Tech Blog where you can create a username and make post to the community.",
			image: "tech-blog-image.jpg",
			technologies: [
				"compression",
				"mongoose",
				"morgan",
				"Express",
				"Heroku",
			],
			github: "https://github.com/terahje/tech-blog-week14",
			deployed: "https://the-tech-blog-80087.herokuapp.com/",
        },
        {
			name: "Budget Tracker",
			description:
				"This budget tracker can be depended on to keep track of your expenses whether your on or offline.",
			image: "budget-tracker-image.jpg",
			technologies: [
				"JavaScript",
				"Node.js",
				"Handlebars.js",
				"Express & Sequelize",
				"Heroku",
			],
			github: "https://github.com/terahje/budget-tracker-pwa",
			deployed: "https://budget-tracker800.herokuapp.com",
        },
        {
			name: "Weather Dashboard",
			description:
				"This site provides the current weather and a 5 day forcast when you search with a city's name.",
			image: "weather-dash-image.jpg",
			technologies: [
				"HTML",
				"CSS",
				"JavaScript",
				"jQuery",
				"Bootstrap",
			],
			github: "https://github.com/terahje/week-6-challenge/",
			deployed: "https://terahje.github.io/week-6-challenge/",
        }

	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;