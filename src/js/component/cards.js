import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	return (
		<div className="col-md-3 my-3">
			<div className="card shadow-sm">
				<img src={props.img} className="img-fluid card-img" />
				<div className="card-body">
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<h4>{props.title}</h4>

					<div className="d-flex justify-content-between align-items-center">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary">
								View
							</button>
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary">
								Edit
							</button>
						</div>
						<small className="text-muted">9 mins</small>
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string
};
