import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../../shared/counter";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
