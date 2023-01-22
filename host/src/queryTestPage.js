import React from "react";
import { Link } from "react-router-dom";
import QueryCounter from "../../shared/components/queryCounter";

const QueryTestPage = () => {
	return (
		<>
			<QueryCounter />
			<div>
				<Link to="/">Go home.</Link>
			</div>
		</>
	);
};

export default QueryTestPage;
