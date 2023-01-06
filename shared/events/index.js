let listeners = [];
let state = {
	counter: {
		count: 0,
	},
};

export const EventStore = {
	getState() {
		//Sync store across remotes
		if (window.EVENT_STORE) {
			state = window.EVENT_STORE;
		}
		return state;
	},
	increment() {
		const { counter } = state;
		counter.count++;
		state = { ...state, counter: { ...counter } };
		window.EVENT_STORE = state;
		disptach();
	},
	subscribe(listener) {
		//Sync listeners across remotes, share a singleton object
		if (listeners.length === 0 && window.EVENT_LISTENERS) {
			listeners = window.EVENT_LISTENERS;
		} else {
			listeners = [...listeners, listener];
		}
		window.EVENT_LISTENERS = listeners;
		return () => {
			listeners = listeners.filter((l) => l !== listener);
		};
	},
};

const disptach = () => {
	for (let listener of listeners) {
		listener();
	}
};
