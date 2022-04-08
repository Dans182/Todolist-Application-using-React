import React, { useState } from "react";

const ListaTarea = () => {
	const [taskList, setTaskList] = useState([]);
	let totalDeTareas = taskList.length;

	const eliminarTarea = (id) => {
		const listaTareaFiltrada = taskList.filter((e, index) => index !== id);
		setTaskList(listaTareaFiltrada);
	};

	return (
		<div>
			{/* MOSTRAR TAREA ANOTADA */}
			<div>
				{taskList.map((tareaAlmacenada, index) => {
					return (
						<div
							key={index}
							className="almacenDeTareas d-flex justify-content-between"
							style={{ width: "225px", height: "30px" }}>
							<input type="checkbox" />
							{tareaAlmacenada}{" "}
							<div>
								<i
									className="fas fa-times-circle"
									type="button"
									onClick={() => {
										eliminarTarea(index);
									}}></i>
							</div>
						</div>
					);
				})}
			</div>
			<div>
				{totalDeTareas === 0
					? "No tasks, you have a lot of free time"
					: taskList.length + " " + "tasks left"}
			</div>
		</div>
	);
};

export default ListaTarea;
