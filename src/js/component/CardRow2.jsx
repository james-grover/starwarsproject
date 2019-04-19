import React from "react";
import CardTile from "./CardTile.jsx";
import { Context } from "../store/appContext.jsx";
//create your first component
function CardRow() {
	return (
		<div className="row text-center">
			<Context.Consumer>
				{({ store, actions }) => {
					return store.people.map((item, index) => {
						console.log(item.name);

						return (
							<div
								className="col-lg-3 col-md-6 mb-4"
								key={item.index}>
								<CardTile
									cardinfo={{
										photo:
											"https://starwars-visualguide.com/assets/img/characters/4.jpg",
										title: item.name,
										text:
											"Random Picture of 400 x 200 pixels"
									}}
								/>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</div>
	);
}

export default CardRow;
