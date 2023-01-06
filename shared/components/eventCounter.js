import React from "react";
import useEventStore from "../hooks/useEventStore";

const EventCounter = ({ appName }) => {
	const { state, increment } = useEventStore();
	const { counter } = state;

	return (
		<span>
			I am {appName} - my event-counter value: {` ${counter.count}`}
			<div>
				<button type="button" onClick={() => increment()}>
					Event-Increment
				</button>
			</div>
		</span>
	);
};

export default EventCounter;
