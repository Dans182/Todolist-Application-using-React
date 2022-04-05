import React, { useState } from "react";

const HomeCard = () => {
	const [task, setTask] = useState("");

	return (
		<form>
			<div className="back bg-light mx-auto w-75">
				<div className="mb-3 w-50 mx-auto mt-4">
					<label htmlFor="exampleInputEmail1" className="form-label">
						To Do List
					</label>
					<input
						type="Task"
						className="form-control"
						id="Input-Task"
						aria-describedby="emailHelp"
						placeholder="Agrega una tarea"
						defaultValue={task}
						// onChange
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								console.log(e.target.value);
							}
							setTask(e.target.value);
						}}
					/>
					<ul>
						<li>{task}</li>
					</ul>

					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
			</div>
		</form>
	);
};

export default HomeCard;
