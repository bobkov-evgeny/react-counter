import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
	const inititalState = [
		{ value: 0, id: 1, name: "Ложка" },
		{ value: 4, id: 2, name: "Вилка" },
		{ value: 0, id: 3, name: "Нож" },
		{ value: 0, id: 4, name: "Тарелка" },
		{ value: 0, id: 5, name: "Чашка" },
		{ value: 0, id: 6, name: "Коктейль" },
	];
	const [counters, setCounters] = useState(inititalState);

	const handleDelete = (counterId) => {
		const newCounters = counters.filter((counter) => counter.id !== counterId);
		setCounters(newCounters);
	};

	const handleDecrement = (counterId) => {
		const newCounters = counters.map((counter) => {
			if (counter.id !== counterId || counter.value === 0) return counter;
			counter.value -= 1;
			return counter;
		});
		setCounters(newCounters);
	};
	const handleIncrement = (counterId) => {
		const newCounters = counters.map((counter) => {
			if (counter.id !== counterId) return counter;
			counter.value += 1;
			return counter;
		});
		setCounters(newCounters);
	};

	const handleReset = () => setCounters(inititalState);

	return (
		<div className="col-lg-8 mx-auto p-3 py-md-5">
			<main>
				<NavBar
					totalItems={counters.reduce((acc, counter) => acc + counter.value, 0)}
				/>
				<Counters
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					onReset={handleReset}
					onDelete={handleDelete}
					counters={counters}
				/>
			</main>
		</div>
	);
}

export default App;
