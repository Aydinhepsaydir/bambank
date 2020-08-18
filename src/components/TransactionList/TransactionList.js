import React from "react";

import TransactionCard from "../TransactionCard";
import { Box } from "./TransactionList.styled";

const TransactionList = ({ transactions }) => {
	return (
		<Box>
			{transactions.map((transaction) => {
				return <TransactionCard transaction={transaction} />;
			})}
		</Box>
	);
};

export default TransactionList;
