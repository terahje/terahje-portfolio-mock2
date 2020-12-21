import React from "react";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require("../../assets/images/profile-pic.jpg").default}
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
            Growing up in Harrisburg, Pa, my life was more sports than academics.  While I love sports and long for
            the competition, I've also had a deep love for technology and its various uses.  When I found coding it was
            an immediate attraction, as I love the peeling back the layers of things, we use day to day but fail to understand
            how they work.  I decided to start down this path because I think the future is heavily reliant on people to write 
			and maintin the AI and robotic network that could be the next industrial boom.
                </p>
                <p>
            I love that coding gives me the chance to come across obstacles and overcome them to reach your goal.  I love that it 
            allows you to work with a team to achieve a common goal.  I'm excited to see where this path leads too and feel the future
            is as bright as our Tucson Sun.
				</p>
			</div>
		</section>
	);
}

export default About;
