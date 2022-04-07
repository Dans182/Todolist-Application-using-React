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
			<div>
				{taskList.map((tareaAlmacenada, index) => {
					return (
						<div
							key={index}
							className="bg-light"
							style={{ width: "225px" }}>
							<h4>
								<input type="checkbox" /> {tareaAlmacenada}{" "}
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
			</div>
		</div>
	);
	{
		/* ELIMINAR TAREA ANOTADA */
	}
};

export default AddTask;
