import React from "react";
import "./Button.css";

const Button = ({ text }) => {
	return (
		<button id="new-quote" className="quote-button">
			{text}
		</button>
	);
};

export default Button;
