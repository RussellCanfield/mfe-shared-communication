import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Counter from "../../shared/components/counter";
import EventCounter from "../../shared/components/eventCounter";

const App = ({ store }) => {
	useEffect(() => {
		if (!window.loggingEmitter) return;

		const loggingEmitter = window.loggingEmitter;

		loggingEmitter.emit("logInfo", "hello from remote");
	}, []);

	//Only necessary since the remote doesn't have a local store
	return (
		<div>
			{!store && <></>}
			{store && (
				<Provider store={store}>
					<Counter appName="Remote" />
					<EventCounter appName="Remote" />
				</Provider>
			)}
		</div>
	);
};

export default App;
