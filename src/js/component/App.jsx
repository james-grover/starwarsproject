import React from "react";

import NavBar from "./NavBar.jsx";
import JumboTron from "./JumboTron.jsx";
import CardRow from "./CardRow.jsx";
import CardRow2 from "./CardRow2.jsx";

// new code for logic api

// below was preexisting code
export default class App extends React.Component {
	// new code -- if breaks delete this shit --

	// keep code same below
	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<JumboTron fluid />
					<h1> Planets </h1>
					<CardRow />
					<h1> Characters </h1>
					<CardRow2 />
				</div>
			</div>
		);
	}
}
