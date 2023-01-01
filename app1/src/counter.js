import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../shared/counter";

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div>{count}</div>
			<button type="button" onClick={() => dispatch(increment())}>
				Remote Increment
			</button>
		</>
	);
};

export default Counter;
