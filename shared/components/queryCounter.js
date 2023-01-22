import React from "react";
import useQueryCounter from "../hooks/useQueryCounter";

const QueryCounter = () => {
	const { data, increment } = useQueryCounter();

	const incrementCounter = () => {
		increment(Number(data ?? 0) + 1);
	};

	return (
		<>
			<div>Query value: {data}</div>
			<button type="button" onClick={incrementCounter}>
				Increment query
			</button>
		</>
	);
};

export default QueryCounter;
