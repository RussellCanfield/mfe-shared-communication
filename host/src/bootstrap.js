import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryTestPage from "./queryTestPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "query",
		element: <QueryTestPage />,
	},
]);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		},
	},
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</Provider>
	</QueryClientProvider>
);
