import "./App.css";
import Layout from "./components/Layout/Layout";
import QuoteContainer from "./components/QuoteContainer/QuoteContainer";
import Button from "./components/Button/Button";
import SocialButton from "./components/SocialButton/SocialButton";
import quoteData from "./QuotesData";

function App() {
	console.log(quoteData);
	return (
		<Layout>
			<header>
				<h2>Random quote machine</h2>
			</header>
			<QuoteContainer quote={quoteData[0].quote} author={quoteData[0].author} />
			<Button text="new quote" />
			<SocialButton />
		</Layout>
	);
}

export default App;
