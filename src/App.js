import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import QuoteContainer from "./components/QuoteContainer/QuoteContainer";
import bgColors from "./BackgroundColors";

import quoteData from "./QuotesData";

const randomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
	const queryParams = new URLSearchParams(window.location.search);
	const currentID = queryParams.get("id");

	const [activeQuote, setActiveQuote] = useState();
	const [activeBG, setActiveBG] = useState(bgColors[0]);

	const buttonHandler = () => {
		const randomQ = randomNumber(0, 21);
		const randomBG = randomNumber(0, 9);

		setActiveQuote(quoteData[randomQ]);
		setActiveBG(bgColors[randomBG]);

		var newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?id=${randomQ}`;
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
		<Layout style={{ ...activeBG }}>
			<header>
				<h1>Random quote machine</h1>
			</header>
			{activeQuote && (
				<QuoteContainer
					quote={activeQuote.quote}
					author={activeQuote.author}
					buttonHandler={buttonHandler}
					url={window.location}
				/>
			)}
			<footer className="footer">
				by{" "}
				<a
					href="https://codepen.io/adrimihailescu"
					target="_blank"
					rel="noreferrer"
				>
					Adriana
				</a>
			</footer>
		</Layout>
	);
}

export default App;
