import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import QuoteContainer from "./components/QuoteContainer/QuoteContainer";

import quoteData from "./QuotesData";

const randomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
	const queryParams = new URLSearchParams(window.location.search);
	const currentID = queryParams.get("id");

	const bgColors = [
		{
			backgroundColor: "#fee2f8",
			backgroundImage: "linearGradient(315deg, #fee2f8 0%, #dcf8ef 74%)",
		},
		{
			backgroundColor: "#2884b8",
			backgroundImage: "linear-gradient(315deg, #2884b8 0%, #d1bad2 74%)",
		},
		{
			backgroundColor: " #70b2d9;",
			backgroundImage: "linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)",
		},
		{
			backgroundColor: "#fffffc",
			backgroundImage: "linear-gradient(315deg, #fffffc 0%, #beb7a4 74%)",
		},
		{
			backgroundColor: "#e7eff9",
			backgroundImage: "linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)",
		},
		{
			backgroundcolor: "#e3efe8",
			backgroundImage: "linear-gradient(315deg, #e3efe8 0%, #96a7cf 74%)",
		},
		{
			backgroundcolor: "#af8c9d",
			backgroundImage: "linear-gradient(315deg, #af8c9d 0%, #8cacac 74%)",
		},
		{
			backgroundColor: "#48dbfb",
			backgroundImage: "linear-gradient(315deg, #48dbfb 0%, #d3d3d3 74%)",
		},
	];

	const [activeQuote, setActiveQuote] = useState();
	const [activeBG, setActiveBG] = useState(bgColors[0]);

	const buttonHandler = () => {
		const randomQ = randomNumber(0, 21);
		const randomBG = randomNumber(0, 6);

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
				/>
			)}
		</Layout>
	);
}

export default App;
