import React, { Suspense } from "react";
import { LoggingProvider } from "../context/loggingProvider";
import { importRemote } from "@module-federation/utilities";
import { Link } from "react-router-dom";
import { store } from "./store";
import Counter from "../../shared/components/counter";
import EventCounter from "../../shared/components/eventCounter";
import QueryCounter from "../../shared/components/queryCounter";
import RemoteData from "../../shared/components/remoteData";

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

//The query lazy route should not re-fetch.
const App = () => {
	return (
		<LoggingProvider>
			<Link to="query">Query Lazy Route</Link>
			<Counter appName="Host" />
			<EventCounter appName="Host" />
			<QueryCounter />
			<RemoteData />
			<div style={{ margin: "2rem" }}></div>
			<Suspense>
				<RemoteApp store={store} />
			</Suspense>
		</LoggingProvider>
	);
};

export default App;
