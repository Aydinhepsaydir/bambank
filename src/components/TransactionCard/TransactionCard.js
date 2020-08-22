import React from "react";

import { Paragraph } from "../../components";
import { CardWrapper, DateAndWho } from "./TransactionCard.styled";
import { COLORS } from "../../constants";

const TransactionCard = ({ transaction }) => {
  const { date, who, amount, transactionType, message } = transaction;

  return (
    <CardWrapper>
      <DateAndWho>
        <Paragraph
          color={COLORS.backgroundColor}
          fontWeight="500"
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
        {message && (
          <Paragraph
            color={COLORS.backgroundColor}
            fontWeight="300"
            fontSize="20px"
          >
            {message}
          </Paragraph>
        )}
      </DateAndWho>
      <Paragraph
        color={COLORS.backgroundColor}
        fontWeight="500"
        fontSize="20px"
      >
        {transactionType === "S" ? -amount : amount}
      </Paragraph>
    </CardWrapper>
  );
};

export default TransactionCard;
