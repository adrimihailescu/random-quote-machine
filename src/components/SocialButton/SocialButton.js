import "./SocialButton.css";

const SocialButton = ({ url }) => {
	const customText = `Check out my cool Quote Generator: ${url}`;
	return (
		<a
			id="tweet-quote"
			className="share-button"
			href={`https://twitter.com/intent/tweet?text=${customText}`}
			target="_blank"
			rel="noreferrer"
		>
			Tweet
		</a>
	);
};

export default SocialButton;
