import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Counter from "../../shared/components/counter";
import EventCounter from "../../shared/components/eventCounter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryCounter from "../../shared/components/queryCounter";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		},
	},
});

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
				<QueryClientProvider client={queryClient}>
					<Provider store={store}>
						<Counter appName="Remote" />
						<EventCounter appName="Remote" />
						<QueryCounter />
					</Provider>
				</QueryClientProvider>
			)}
		</div>
	);
};

export default App;
