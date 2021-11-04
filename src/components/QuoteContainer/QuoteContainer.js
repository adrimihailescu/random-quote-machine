import "./QuoteContainer.css";
import Button from "../Button/Button";

const QuoteContainer = ({ quote, author, buttonHandler }) => {
	return (
		<div className="container">
			<div id="quote-box" className="quote-box">
				<div id="text" className="quote-text">
					{quote}
				</div>
				<div id="author" className="quote-author">
					{author}
				</div>
			</div>
			<div className="toolbar">
				<Button text="New quote" buttonHandler={buttonHandler} />
			</div>
		</div>
	);
};

export default QuoteContainer;
