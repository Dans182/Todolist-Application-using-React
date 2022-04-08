import React, { useState } from "react";

const AddTask = () => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	let totalDeTareas = taskList.length;

	const nuevaTarea = () => {
		if (task !== "") {
			setTaskList([...taskList, task]);
		}
	};

	const eliminarTarea = (id) => {
		const listaTareaFiltrada = taskList.filter((e, index) => index !== id);
		setTaskList(listaTareaFiltrada);
	};

	return (
		<div>
			<form>
				<input
					className="form-control"
					placeholder="Write a task"
					value={task}
					onChange={(e) => {
						setTask(e.currentTarget.value);
						console.log(e.currentTarget.value);
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
			</form>
			<div className="text-center">
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
			</div>
			<div>
				{/* MOSTRAR TAREA ANOTADA */}
				<div>
					{taskList.map((tareaAlmacenada, index) => {
						return (
							<div
								key={index}
								className="almacenDeTareas d-flex justify-content-between rounded"
								style={{ width: "235px", height: "35px" }}>
								<div className="tareaX">{tareaAlmacenada} </div>
								<div className="tareaX">
									<i
										className="fas fa-times-circle mr-5"
										type="button"
										onClick={() => {
											eliminarTarea(index);
										}}></i>
								</div>
							</div>
						);
					})}
				</div>
				<div className="text-center">
					{totalDeTareas === 0
						? "You have a lot of free time"
						: taskList.length + " " + "tasks left"}
				</div>
			</div>
		</div>
	);
};

export default AddTask;
