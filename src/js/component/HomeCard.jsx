import React, { useState } from "react";

const HomeCard = () => {
	const [task, setTask] = useState("");
	const [lista, setLista] = useState([]);

	return (
		<form>
			<div
				className="bg-light mx-auto rounded"
				style={{ width: "450px" }}>
				<div className="mb-3 w-50 pb-2 mx-auto mt-4">
					<label
						htmlFor="exampleInputEmail1"
						className="form-label mt-3">
						<h3>To Do List</h3>
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
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								e.stopPropagation();
								setLista([...lista, task]);
								setTask("");
							}
						}}
					/>
					<button
						type="button"
						className="btn btn-warning mt-3 mb-3"
						onClick={() => {
							setLista([...lista, task]);
							setTask("");
						}}>
						Warning
					</button>

					{lista.map((ingres, index) => {
						return (
							<div
								key={index}
								className="bg-light"
								style={{ width: "225px" }}>
								<h4>
									<input type="checkbox" /> {ingres}{" "}
									<i
										className="fas fa-times-circle"
										type="button"
										onClick={() => {
											tb.splice(index);
										}}></i>
								</h4>
							</div>
						);
					})}
				</div>
			</div>
		</form>
	);
};

export default HomeCard;
