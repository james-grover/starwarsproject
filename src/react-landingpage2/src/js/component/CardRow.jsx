import React from "react";
import CardTile from "./CardTile.jsx";
//create your first component
function CardRow() {
	return (
		<div className="row text-center">
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo: "http://lorempixel.com/400/200",
						title: "Random",
						text: "Random Picture of 400 x 200 pixels"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo: "http://lorempixel.com/g/400/200",
						title: "Greyscale",
						text: "Random Grey Picture of 400 x 200 pixels"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo: "http://lorempixel.com/400/200/sports",
						title: "Sports",
						text: "Random Picture in the Sports Category"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo: "http://lorempixel.com/400/200/sports/1",
						title: "Sports",
						text: "First Sports Picture in the Sports Category"
					}}
				/>
			</div>
		</div>
	);
}

export default CardRow;
