import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import QuoteContainer from "./components/QuoteContainer/QuoteContainer";
import SocialButton from "./components/SocialButton/SocialButton";
import quoteData from "./QuotesData";
import { gsap } from "gsap";

const randomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
	const queryParams = new URLSearchParams(window.location.search);
	const currentID = queryParams.get("id");

	const [activeQuote, setActiveQuote] = useState();

	const buttonHandler = () => {
		const random = randomNumber(0, 21);

		setActiveQuote(quoteData[random]);

		var newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?id=${random}`;
		window.history.pushState({ path: newurl }, "", newurl);
	};

	useEffect(() => {
		if (currentID) {
			setActiveQuote(quoteData[currentID]);
		} else {
			buttonHandler();
		}
	}, [currentID]);

	return (
		<Layout>
			<header>
				<h1>Random quote machine</h1>
			</header>
			{activeQuote && (
				<QuoteContainer
					quote={activeQuote.quote}
					author={activeQuote.author}
					buttonHandler={buttonHandler}
				/>
			)}
			<SocialButton text="Share" />
		</Layout>
	);
}

export default App;
