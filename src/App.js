import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import QuoteContainer from "./components/QuoteContainer/QuoteContainer";
import Button from "./components/Button/Button";
import SocialButton from "./components/SocialButton/SocialButton";
import quoteData from "./QuotesData";

const randomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
	const [activeQuote, setActiveQuote] = useState();
	const buttonHandler = () => setActiveQuote(quoteData[randomNumber(0, 21)]);

	useEffect(() => {
		buttonHandler();
	}, []);

	return (
		<Layout>
			<header>
				<h1>Random quote machine</h1>
			</header>
			{activeQuote && (
				<QuoteContainer quote={activeQuote.quote} author={activeQuote.author} />
			)}
			<Button text="New quote" buttonHandler={buttonHandler} />
			<SocialButton text="Share" />
		</Layout>
	);
}

export default App;
