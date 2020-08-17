import React, { useEffect } from "react";
import { withAmplify } from "../../contexts/Amplify";

const CheckBalanceView = ({ amplify }) => {
	useEffect(() => {
		const users = amplify.getUsers();
	});

	return (
		<>
			<h1>CheckBalanceView</h1>
		</>
	);
};

export default withAmplify(CheckBalanceView);
