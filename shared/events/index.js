let listeners = [];
let state = {
	counter: {
		count: 0,
	},
};

const saveState = (state) => {
	window.EVENT_STORE = structuredClone(state);
	disptach();
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
		saveState(state);
	},
	setCounterValue(value) {
		const { counter } = state;
		counter.count = value;
		state = { ...state, counter: { ...counter } };
		saveState(state);
	},
	subscribe(listener) {
		console.log("sub: ", listener);
		//Sync listeners across remotes, share a singleton object
		if (window.EVENT_LISTENERS) {
			listeners = [...window.EVENT_LISTENERS];
		}

		listeners = [...listeners, listener];
		window.EVENT_LISTENERS = listeners;
		return () => {
			listeners = listeners.filter((l) => l !== listener);
		};
	},
};

const disptach = () => {
	for (let listener of window.EVENT_LISTENERS) {
		listener();
	}
};
