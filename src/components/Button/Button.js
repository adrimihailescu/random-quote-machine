import "./Button.css";

const Button = ({ text, buttonHandler }) => {
	return (
		<button id="new-quote" className="quote-button" onClick={buttonHandler}>
			{text}
		</button>
	);
};

export default Button;
