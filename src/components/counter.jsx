import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const tags = ["tag1", "tag2", `tag3`];

	const formCount = () => {
		return count === 0 ? "Ноль" : count;
	};

	const getBageClasses = () => {
		let classes = "badge m-2 bg-";
		classes += count === 0 ? "danger" : "primary";
		return classes;
	};

	const renderTags = () => {
		if (tags.length === 0) return "Тегов не найдено";
		return tags.map((tag) => <li>{tag}</li>);
	};

	const handleIncrement = (productId) => {
		setCount(count + 1);
	};

	const handleDecrement = (productId) => {
		setCount(count === 0 ? count : count - 1);
	};

	return (
		<>
			{tags.length === 0 && "Теги не найдены"}
			{renderTags()}
			<span className={getBageClasses()}>{formCount()}</span>
			<button
				onClick={() => handleDecrement({ id: 1 })}
				className="btn btn-secondary btn-sm m-1"
			>
				Decrement
			</button>
			<button
				onClick={() => handleIncrement({ id: 1 })}
				className="btn btn-secondary btn-sm m-1"
			>
				Increment
			</button>
		</>
	);
};

export default Counter;
