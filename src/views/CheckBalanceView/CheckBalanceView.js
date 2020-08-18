import React from "react";

import { compose } from "recompose";
import { withAuthentication } from "../../contexts/Session";
import { withUser } from "../../contexts/User";

import { Title, Paragraph, TransactionList } from "../../components";
import {
	PageWrapper,
	BalanceWrapper,
	MyTransactionsWrapper,
} from "./CheckBalanceView.styled";

import COLORS from "../../constants/colors";
import * as ROUTES from "../../constants/routes";

import my_transaction from "../../assets/graphics/my_transactions.png";

const CheckBalanceView = ({ user, authState, history }) => {
	if (authState === "signIn") {
		history.push(ROUTES.SIGN_IN);
	}

	return (
		<>
			<Title type="h1">Current Balance</Title>
			{!user && <Paragraph>Loading...</Paragraph>}
			{user && (
				<>
					<PageWrapper>
						<BalanceWrapper>
							<Paragraph fontSize="100px" color={COLORS.secondary}>
								{user.balance} Bameuros
							</Paragraph>
						</BalanceWrapper>
					</PageWrapper>
					<Title type="h1">Recent Transactions</Title>
					<MyTransactionsWrapper>
						<TransactionList transactions={user.transactions} />
						<img src={my_transaction} />
					</MyTransactionsWrapper>
				</>
			)}
		</>
	);
};

export default compose(withUser, withAuthentication)(CheckBalanceView);
