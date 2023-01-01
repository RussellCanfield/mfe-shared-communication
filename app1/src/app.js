import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Counter from "./counter";

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
					<span>I am remote - my counter value: </span>
					<span>
						<Counter />
					</span>
				</Provider>
			)}
		</div>
	);
};

export default App;
