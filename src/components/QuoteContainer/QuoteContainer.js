import "./QuoteContainer.css";
import Button from "../Button/Button";
import SocialButton from "../SocialButton/SocialButton";
import { useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import { split } from "../../helpers";

const QuoteContainer = (props) => {
	const { quote, author, buttonHandler, url } = props;
	const quoteTextRef = useRef(null);
	const authorTextRef = useRef(null);

	const animateText = useCallback(() => {
		if (!quoteTextRef.current || !authorTextRef.current) return;
		const quoteChars = split({ element: quoteTextRef.current, append: true });
		const authorChars = split({
			element: authorTextRef.current,
			append: true,
		});

		gsap.set(quoteTextRef.current, { perspective: 400 });

		gsap.from(
			quoteChars,
			{
				duration: 0.1,
				opacity: 0,
				scale: 1,
				delay: 0.4,
				y: -40,
				rotationX: -90,
				transformOrigin: "0% 50% -50",
				ease: "easeOut",
				stagger: 0.045,
			},
			"+=0"
		);

		gsap.from(
			authorChars,
			{
				duration: 0.5,
				opacity: 0,
				scale: 1,
				delay: 0.4,
				y: -100,
				transformOrigin: "0% 0%",
				ease: "easeOut",
			},
			"+=0"
		);
	}, [quote]);

	useEffect(() => {
		animateText();
	}, [animateText]);

	return (
		<div id="quote-box" className="container">
			<div className="quote-box">
				<div id="text" className="quote-text">
					<p ref={quoteTextRef}>{quote}</p>
				</div>
				<div id="author" className="quote-author">
					<p ref={authorTextRef}>{`Author:${author}`}</p>
				</div>
			</div>
			<div className="toolbar">
				<Button text="New quote" buttonHandler={buttonHandler} />
				<SocialButton text="Share" url={url} />
			</div>
		</div>
	);
};

export default QuoteContainer;
