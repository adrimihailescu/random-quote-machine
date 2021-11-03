import React from "react";
import "./SocialButton.css";

const SocialButton = () => {
	return (
		<a
			id="share-quote"
			className="share-button"
			href="https://github.com/adrimihailescu"
			target="_blank"
			rel="noreferrer"
		>{`Share`}</a>
	);
};

export default SocialButton;
