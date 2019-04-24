import React from "react";
import CardTile from "./CardTile.jsx";
import { Context } from "../store/appContext.jsx";
//create your first component
function CardRow() {
	return (
		<div className="row text-center">
			<Context.Consumer>
				{({ store, actions }) => {
					const ppic = store.photo;
					//console.log(pic);
					let i = 0;

					return store.people.map((people, index) => {
						//i++;
						console.log(ppic[i]);
						//const ppl = store.photo.pic;

						//console.log(store.photo.pic);

						return (
							<div
								className="col-lg-3 col-md-6 mb-4"
								key={people.index}>
								<CardTile
									cardinfo={{
										photo: ppic[i].pic,
										title: people.name,
										text: people.gender
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
