import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/terahje"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require(`../../assets/logos/github-logo.png`).default}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/terahje-gratkowski/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
                        src={require(`../../assets/logos/linkedin-logo.png`).default}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>

		</footer>
	);
}

export default Footer;
