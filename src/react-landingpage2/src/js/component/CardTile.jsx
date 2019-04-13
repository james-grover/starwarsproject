import React from "react";

import PropTypes from "prop-types";

function CardTile(props) {
	return (
		<div className="card h-100">
			<img className="card-img-top" src={props.cardinfo.photo} alt="" />
			<div className="card-body">
				<h4 className="card-title">{props.cardinfo.title}</h4>
				<p className="card-text">{props.cardinfo.text}</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
CardTile.propTypes = {
	cardinfo: PropTypes.string
};

export default CardTile;
