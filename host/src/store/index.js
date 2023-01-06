import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../../shared/store/counter";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
