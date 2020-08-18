import React from "react";

import { Paragraph } from "../../components";
import { CardWrapper, DateAndWho } from "./TransactionCard.styled";
import COLORS from "../../constants/colors";

const TransactionCard = ({ transaction }) => {
	const { date, who, amount } = transaction;

	return (
		<CardWrapper>
			<DateAndWho>
				<Paragraph
					color={COLORS.backgroundColor}
					fontWeight="700"
					fontSize="20px"
				>
					{who}
				</Paragraph>
				<Paragraph
					color={COLORS.backgroundColor}
					fontWeight="300"
					fontSize="20px"
				>
					{date}
				</Paragraph>
			</DateAndWho>
			<Paragraph
				color={COLORS.backgroundColor}
				fontWeight="500"
				fontSize="20px"
			>
				{amount}
			</Paragraph>
		</CardWrapper>
	);
};

export default TransactionCard;
