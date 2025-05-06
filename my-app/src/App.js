import React from "react";
import Logo from "./assets/logo.svg";
import "./App.css";

function getCurrentData() {
	const date = new Date();
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
}

function App() {
	const Data = getCurrentData();

	return React.createElement(
		"div",
		{ className: "App" },
		React.createElement(
			"header",
			{ className: "App-header" },
			React.createElement("img", {
				src: Logo,
				className: "App-logo",
				alt: "Logo",
			}),
			React.createElement(
				"p",
				null,
				"Edit ",
				React.createElement("code", null, "src/App.js"),
				" and save to test HMR"
			),
			React.createElement(
				"a",
				{
					className: "App-link",
					href: "https://react.dev",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			React.createElement("p", null, "Current date: ", Data)
		)
	);
}

export default App;
