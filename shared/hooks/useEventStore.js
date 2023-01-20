import { useSyncExternalStore } from "react";
import { EventStore } from "../events";

const useEventStore = () => {
	const state = useSyncExternalStore(
		EventStore.subscribe,
		EventStore.getState
	);

	const { increment, setCounterValue } = EventStore;

	return {
		state,
		increment,
		setCounterValue,
	};
};

export default useEventStore;
