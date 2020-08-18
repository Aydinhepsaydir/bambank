import React from "react";

import TransactionCard from "../TransactionCard";
import { Box } from "./TransactionList.styled";

const TransactionList = ({ transactions }) => {
	return (
		<Box>
			{transactions.map((transaction, i) => {
				return <TransactionCard key={i} transaction={transaction} />;
			})}
		</Box>
	);
};

export default TransactionList;
