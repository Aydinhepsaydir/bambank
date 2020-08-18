import React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";
import * as ROUTES from "../../constants/routes";

import { Title, Paragraph, TransactionList } from "../../components";
import {
	Box,
	FuncWrapper,
	TransactionListContainer,
	StyledImage,
} from "./DashView.styled";

import check_balance from "../../assets/graphics/check_balance.png";
import make_transaction from "../../assets/graphics/make_transaction.png";
import { withUser } from "../../contexts/User";

const DashView = (props) => {
	const { authState, authData, history, user } = props;

	if (authState === "signIn") {
		history.push(ROUTES.SIGN_IN);
	}
	return (
		<>
			{authState === "loading" && <Paragraph>Loading</Paragraph>}
			{authState === "signedIn" && authData && (
				<>
					<Title type="h1" margin="32px 25px">
						Welcome, {authData.attributes.name}
					</Title>
					<FuncWrapper>
						<Box
							onClick={() => {
								history.push(ROUTES.CHECK_BALANCE);
							}}
						>
							<Title type="h2" margin="12px">
								Check Balance
							</Title>
							<br />
							<StyledImage src={check_balance} />
						</Box>
						<Box
							onClick={() => {
								history.push(ROUTES.MAKE_TRANSACTION);
							}}
						>
							<Title type="h2" margin="12px">
								Make Transaction
							</Title>
							<br />
							<StyledImage src={make_transaction} />
						</Box>
					</FuncWrapper>
					{user !== null && (
						<TransactionListContainer>
							<TransactionList transactions={user.transactions} />
						</TransactionListContainer>
					)}
				</>
			)}
		</>
	);
};

export default compose(withRouter, withUser, withAuthentication)(DashView);
