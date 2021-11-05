import React from "react";
import "./Layout.css";

const Layout = (props) => {
	return (
		<main className="main-css" {...props}>
			{props.children}
		</main>
	);
};

export default Layout;
