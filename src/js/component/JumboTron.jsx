import React from "react";

const imgHeader = {
	backgroundImage:
		"url(https://cdn.sdccblog.com/wp-content/uploads/2015/02/11010424/star-wars-slider.png)"
};

export default class JumboTron extends React.Component {
	render() {
		return (
			<div>
				<header className="jumbotron my-4" style={imgHeader}>
					<h1 className="display-3" />
					<p className="lead">--</p>
					<a href="#" className="btn btn-primary btn-lg">
						Call to action!
					</a>
				</header>
			</div>
		);
	}
}
