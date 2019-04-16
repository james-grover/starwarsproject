import React from "react";
import CardTile from "./CardTile.jsx";
//create your first component
function CardRow2() {
	return (
		<div className="row text-center">
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/characters/4.jpg",
						title: "Random",
						text: "Random Picture of 400 x 200 pixels"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/characters/1.jpg",
						title: "Greyscale",
						text: "Random Grey Picture of 400 x 200 pixels"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/characters/2.jpg",
						title: "Sports",
						text: "Random Picture in the Sports Category"
					}}
				/>
			</div>
			<div className="col-lg-3 col-md-6 mb-4">
				<CardTile
					cardinfo={{
						photo:
							"https://starwars-visualguide.com/assets/img/characters/8.jpg",
						title: "Sports",
						text: "First Sports Picture in the Sports Category"
					}}
				/>
			</div>
		</div>
	);
}

export default CardRow2;
