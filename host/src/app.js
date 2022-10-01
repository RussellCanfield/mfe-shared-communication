import React from "react";

import { LoggingProvider } from "../context/loggingProvider";

import { importRemote } from "../utilities/loadRemote";

const RemoteApp = React.lazy(() =>
	importRemote({
		url: "http://localhost:3001",
		scope: "app1",
		module: "./App",
	})
);

const App = () => {
	return (
		<LoggingProvider>
			<div>I am host.</div>
			<React.Suspense fallback="Loading Remote">
				<RemoteApp />
			</React.Suspense>
		</LoggingProvider>
	);
};

export default App;
