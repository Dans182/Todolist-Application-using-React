import React, { useState } from "react";

const HomeCard = () => {
	const [task, setTask] = useState("");
	const [lista, setLista] = useState([]);

	return (
		<form>
			<div
				className="back bg-light mx-auto rounded"
				style={{ width: "450px" }}>
				<div className="mb-3 w-50 mx-auto mt-4">
					<label htmlFor="exampleInputEmail1" className="form-label">
						To Do List
					</label>
					<input
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Agrega una tarea"
						value={task}
						onChange={(e) => {
							setTask(e.target.value);
							console.log(e.target.value);
						}}
					/>
				</div>
				<div>
					<button
						type="button"
						className="btn btn-warning justify-content-center"
						onClick={() => {
							setLista([...lista, task]);
							setTask("");
						}}>
						Warning
					</button>
					{lista.map((ingres) => {
						return (
							<div
								className="card"
								style={{ width: "225px", height: "225px" }}>
								<h4>{ingres}</h4>
							</div>
						);
					})}
				</div>
			</div>
		</form>
	);
};

export default HomeCard;
