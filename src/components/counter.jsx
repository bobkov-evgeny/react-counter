import React from "react";

const Counter = ({
	id,
	name,
	value,
	onIncrement,
	onDecrement,
	onDelete,
	onReset,
}) => {
	const formCount = () => {
		return value === 0 ? "Ноль" : value;
	};

	const getBageClasses = () => {
		let classes = "badge m-2 bg-";
		classes += value === 0 ? "danger" : "primary";
		return classes;
	};

	return (
		<>
			<div>
				<h4>{name}</h4>
				<span className={getBageClasses()}>{formCount()}</span>
				<button
					onClick={() => onDecrement(id)}
					className="btn btn-secondary btn-sm m-1"
				>
					Decrement
				</button>
				<button
					onClick={() => onIncrement(id)}
					className="btn btn-secondary btn-sm m-1"
				>
					Increment
				</button>
				<button
					className="btn btn-danger btn-sm m-2"
					onClick={() => onDelete(id)}
				>
					Delete
				</button>
			</div>
		</>
	);
};

export default Counter;
