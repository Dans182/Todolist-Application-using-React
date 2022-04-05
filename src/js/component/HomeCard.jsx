import React from "react";
import PropTypes from "prop-types";

const HomeCard = (props) => {
	return (
		<form>
			<div className="mb-3 mt-5 w-25 mx-auto ">
				<label form="exampleInputEmail1" className="form-label mx-auto">
					Todo List
				</label>
				<input
					type="Task"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Agrega una tarea"
				/>
				<div id="emailHelp" className="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
		</form>
	);
};

export default HomeCard;
