import React from "react";
import "./QuoteContainer.css";

const QuoteContainer = ({ quote, author }) => {
	return (
		<div className="container">
			<div id="quote-box">
				<div id="text" className="quote-text">
					{quote}
				</div>
				<div id="author" className="quote-author">
					{author}
				</div>
			</div>
		</div>
	);
};

export default QuoteContainer;
