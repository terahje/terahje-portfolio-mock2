import React from "react";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require("../../assets/images/pro-pic.jpg")}
					alt="Terahje Gratkowski"
					className="photo"
				/>
			</div>
			<div>
				<p>
			Welcome and thank you for your time.  My name is Terahje Gratkowski and this webpage 
			will be the embodiment of all the skills earned through the trials and successes that are a 
			coding bootcamp.  
				</p>
				<p>
			Growing up in Harrisburg, Pa, my life was more sports than acdemics.  While I love sports and long for
			the compitiion, I've also had a deep love for technology and its various uses.  When I found coding it was
			an immediate attraction, as I love the peeling back the layers of things we use day to day but fail to understand
			how they work.  I was inspired by recent news clips as well and would love to continue to build on my knowledge base
			with software development for robots.
				</p>
				<p>
			{/* put here */}
				</p>
			</div>
		</section>
	);
}

export default About;
