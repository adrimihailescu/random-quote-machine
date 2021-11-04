import "./SocialButton.css";

const SocialButton = () => {
	return (
		<a
			id="tweet-quote"
			className="share-button"
			href="twitter.com/intent/tweet"
			target="_blank"
			rel="noreferrer"
		>{`Tweet`}</a>
	);
};

export default SocialButton;
