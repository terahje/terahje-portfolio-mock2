import React from "react";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require("../../assets/images/profilePic.jpg")}
					alt="picture of Terahje Gratkowski"
					className="photo"
				/>
			</div>
			<div>
				<p>
			{/* put here */}
				</p>
				<p>
		{/* put here */}
				</p>
				<p>
			{/* put here */}
				</p>
			</div>
		</section>
	);
}

export default About;
