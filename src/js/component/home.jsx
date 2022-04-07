import React from "react";
import Header from "./Header.jsx";
import AddTask from "./AddTask.jsx";

//create your first component

const Home = () => {
	return (
		<div className="container">
			<div
				className="bg-light mx-auto rounded"
				style={{ width: "450px" }}>
				<div className="mb-3 w-50 pb-2 mx-auto mt-4">
					<Header />
					<AddTask />
				</div>
			</div>
		</div>
	);
};

export default Home;
