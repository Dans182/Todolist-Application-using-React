import React, { useState } from "react";

const AddTask = () => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	const nuevaTarea = (tarea) => {
		setTaskList([...taskList, task]);
	};

	const eliminarTarea = (id) => {
		const listaTareaFiltrada = taskList.filter((e, index) => index !== id);
		setTaskList(listaTareaFiltrada);
	};

	return (
		<form>
			<div
				className="bg-light mx-auto rounded"
				style={{ width: "450px" }}>
				<div className="mb-3 w-50 pb-2 mx-auto mt-4">
					<label className="form-label mt-3">
						<h3>To Do List</h3>
					</label>
					<input
						className="form-control"
						placeholder="Write a task"
						value={task}
						onChange={(e) => {
							setTask(e.target.value);
							console.log(e.target.value);
						}}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								e.stopPropagation();
								// setTaskList([...taskList, task]);
								nuevaTarea();
								setTask("");
							}
						}}
					/>
					<button
						type="button"
						className="btn btn-warning mt-3 mb-3"
						onClick={() => {
							// setTaskList([...taskList, task]);
							nuevaTarea();
							setTask("");
						}}>
						Add a task
					</button>

					{/* MOSTRAR TAREA ANOTADA */}

					{taskList.map((tareaAlmacenada, index) => {
						return (
							<div
								key={index}
								className="bg-light"
								style={{ width: "225px" }}>
								<h4>
									<input
										type="checkbox"
										className={
											"checkbox" == true ? "strike" : ""
										}
									/>{" "}
									{tareaAlmacenada}{" "}
									<i
										className="fas fa-times-circle"
										type="button"
										onClick={() => {
											eliminarTarea(index);
										}}></i>
								</h4>
							</div>
						);
					})}

					{/* ELIMINAR TAREA ANOTADA */}
				</div>
			</div>
		</form>
	);
};

export default AddTask;
