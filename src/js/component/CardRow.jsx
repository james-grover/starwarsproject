import React from "react";
import CardTile from "./CardTile.jsx";
//create your first component
function CardRow() {
	return (
		<div className="row text-center">
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/planets/4.jpg",
						title: "Random",
						text: "Random Picture of 400 x 200 pixels"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/planets/11.jpg",
						title: "Greyscale",
						text:
							"https://starwars-visualguide.com/assets/img/planets/11.jpg"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/planets/13.jpg",
						title: "Sports",
						text: "Random Picture in the Sports Category"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/planets/18.jpg",
						title: "Sports",
						text: "First Sports Picture in the Sports Category"
					}}
				/>
			</div>
		</div>
	);
}

export default CardRow;
