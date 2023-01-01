import React, { Suspense } from "react";
import { LoggingProvider } from "../context/loggingProvider";
import { importRemote } from "@module-federation/utilities";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../shared/counter";
import { store } from "./store";

//Load module from configuration service
const GetStuff = async (input) => {
	return Promise.resolve("http://localhost:3001");
};

const RemoteApp = React.lazy(() =>
	importRemote({
		url: () => GetStuff("test"),
		scope: "app1",
		module: "./App",
		remoteEntryFileName: "remote.js",
		bustRemoteEntryCache: false,
	})
);

const App = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<LoggingProvider>
			<div>{count}</div>
			<button type="button" onClick={() => dispatch(increment())}>
				Host Increment
			</button>
			<Suspense>
				<RemoteApp store={store} />
			</Suspense>
		</LoggingProvider>
	);
};

export default App;
