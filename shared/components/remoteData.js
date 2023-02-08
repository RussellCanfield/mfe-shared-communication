import { useEffect } from "react";
import React from "react";
import useEventStore from "../hooks/useEventStore";

const remoteData = () => {
	const { getRemoteData, state } = useEventStore();

	useEffect(() => {
		getRemoteData();
	}, []);

	return <div>Remote Data: {state.remote.data ?? "pending"}</div>;
};

export default remoteData;
