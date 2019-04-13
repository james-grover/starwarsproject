import React from "react";

import NavBar from "./NavBar.jsx";
import JumboTron from "./JumboTron.jsx";
import CardRow from "./CardRow.jsx";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<JumboTron />
					<CardRow />
				</div>
			</div>
		);
	}
}
