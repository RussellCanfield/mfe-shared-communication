import { useSyncExternalStore } from "react";
import { EventStore } from "../events";

const useEventStore = () => {
	const state = useSyncExternalStore(
		EventStore.subscribe,
		EventStore.getState
	);

	const { increment, setCounterValue, getRemoteData } = EventStore;

	return {
		state,
		increment,
		setCounterValue,
		getRemoteData,
	};
};

export default useEventStore;
