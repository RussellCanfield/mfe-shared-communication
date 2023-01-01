import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./app";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
