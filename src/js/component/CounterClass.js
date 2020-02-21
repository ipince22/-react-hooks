import React, { useState } from "react";

export function CounterClass() {
	const [count, setCount] = useState(0);
	const increament = () => setCount(count + 1);
	return (
		<>
			<h1>
				This is count:
				{count}
			</h1>
			<button onClick={increament} type="button">
				Add
			</button>
		</>
	);
}
