import React, { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useEventStore from "./useEventStore";

const useQueryCounter = () => {
	const { state, setCounterValue } = useEventStore();
	const queryClient = useQueryClient();

	const { isLoading, error, data } = useQuery({
		queryKey: ["counterData"],
		queryFn: () => {
			console.log("get query data");
			return Promise.resolve(1);
		},
		onSuccess: (newValue) => {
			setCounterValue(newValue);
		},
	});

	const { mutate } = useMutation({
		mutationFn: (newValue) => {
			return newValue;
		},
		onSuccess: (newValue) => {
			queryClient.setQueryData(["counterData"], newValue);
			setCounterValue(newValue);
		},
	});

	useEffect(() => {
		queryClient.setQueryData(["counterData"], (_) => state.counter.count);
	}, [state.counter.count]);

	return {
		isLoading,
		error,
		data,
		increment: mutate,
	};
};

export default useQueryCounter;
