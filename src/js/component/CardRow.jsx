import React from "react";
import CardTile from "./CardTile.jsx";
import { Context } from "../store/appContext.jsx";
//create your first component
function CardRow() {
	return (
		<div className="row text-center">
			<Context.Consumer>
				{({ store, actions }) => {
					const pplanetpic = store.planetpics;
					//console.log(pic);
					let i = 0;

					return store.planets.map((planets, index) => {
						//i++;
						//console.log(ppic[i]);
						//const ppl = store.photo.pic;

						//console.log(store.photo.pic);

						return (
							<div
								className="col-lg-3 col-md-6 mb-4"
								key={planets.index}>
								<CardTile
									cardinfo={{
										photo: pplanetpic[i].pic,
										title: planets.name,
										text: planets.climate
									}}
								/>
								{i++}
							</div>
						);
					});
				}}
			</Context.Consumer>
		</div>
	);
}

export default CardRow;
