import { useContext, useSyncExternalStore } from "react";
import { EventStore } from "../events";

const useEventStore = () => {
	const state = useSyncExternalStore(
		EventStore.subscribe,
		EventStore.getState
	);

	const { increment } = EventStore;

	return {
		state,
		increment,
	};
};

export default useEventStore;
