import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../shared/store/counter";

const Counter = ({ appName }) => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<span>
			I am {appName} - my counter value: {` ${count}`}
			<div>
				<button type="button" onClick={() => dispatch(increment())}>
					Redux-Increment
				</button>
			</div>
		</span>
	);
};

export default Counter;
