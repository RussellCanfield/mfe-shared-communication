import React, { useEffect } from "react";
import EventEmitter from "eventemitter3";

const LoggingContext = React.createContext({});

const LoggingProvider = ({ children }) => {
	useEffect(() => {
		const loggingEmitter = new EventEmitter();

		loggingEmitter.on("logInfo", (message) => {
			console.log(message);
		});

		window.loggingEmitter = loggingEmitter;

		return () => {
			loggingEmitter.removeAllListeners();
		};
	}, []);

	return (
		<LoggingContext.Provider value={{}}>{children}</LoggingContext.Provider>
	);
};

export { LoggingContext, LoggingProvider };
