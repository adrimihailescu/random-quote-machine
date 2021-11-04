import "./QuoteContainer.css";
import Button from "../Button/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { split } from "../../helpers";

const QuoteContainer = ({ quote, author, buttonHandler }) => {
	const quoteTextRef = useRef(null);
	const authorTextRef = useRef(null);

	useEffect(() => {
		if (!quoteTextRef.current || !authorTextRef.current) return;
		const quoteChars = split({ element: quoteTextRef.current, append: true });
		const authorChars = split({ element: authorTextRef.current, append: true });

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
				ease: "inOut",
				stagger: 0.045,
			},
			"+=0"
		);

		// gsap.from(
		// 	authorChars,
		// 	{
		// 		duration: 0.1,
		// 		opacity: 0,
		// 		scale: 1,
		// 		delay: 0.4,
		// 		y: -40,
		// 		rotationX: -90,
		// 		transformOrigin: "0% 50% -50",
		// 		ease: "inOut",
		// 		stagger: 0.045,
		// 	},
		// 	"+=0"
		// );
	}, [quote]);

	return (
		<div className="container">
			<div id="quote-box" className="quote-box">
				<div id="text" className="quote-text">
					<p ref={quoteTextRef}>{quote}</p>
				</div>
				<div id="author" className="quote-author">
					<span ref={authorTextRef}>{`Author:${author}`}</span>
				</div>
			</div>
			<div className="toolbar">
				<Button text="New quote" buttonHandler={buttonHandler} />
			</div>
		</div>
	);
};

export default QuoteContainer;
