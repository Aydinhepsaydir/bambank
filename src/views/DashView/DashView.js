import React, { useState } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";
import * as ROUTES from "../../constants/routes";

import { Title, Paragraph } from "../../components";
import { Box, FuncWrapper } from "./DashView.styled";

import { ReactComponent as BalanceSvg } from "../../assets/graphics/check_balance.svg";
import { ReactComponent as TransactionSvg } from "../../assets/graphics/make_transaction.svg";

const DashView = (props) => {
	const { authState, authData, history } = props;

	if (authState === "signIn") {
		history.push(ROUTES.SIGN_IN);
	}
	return (
		<>
			{authState === "loading" && <Paragraph>Loading</Paragraph>}
			{authState === "signedIn" && authData && (
				<>
					<Title type="h1">Welcome, {authData.attributes.name}</Title>
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
							<BalanceSvg />
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
							<TransactionSvg />
						</Box>
					</FuncWrapper>
				</>
			)}
		</>
	);
};

export default compose(withRouter, withAuthentication)(DashView);
