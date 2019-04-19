import React from "react";
import CardTile from "./CardTile.jsx";
import { Context } from "../store/appContext.jsx";
//create your first component
function CardRow() {
	return (
		<div className="row text-center">
			<Context.Consumer>
				{({ store, actions }) => {
					return store.people.map((people, index) => {
						console.log(people.name);

						return (
							<div
								className="col-lg-3 col-md-6 mb-4"
								key={people.index}>
								<CardTile
									cardinfo={{
										photo:
											"https://starwars-visualguide.com/assets/img/characters/4.jpg",
										title: people.name,
										text: people.gender
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
