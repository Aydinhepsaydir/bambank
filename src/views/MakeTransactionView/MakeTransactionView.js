import React from "react";

import SendMoneyForm from "./SendMoneyForm";
import {
	SendMoneyWrapper,
	FuncWrapper,
	StyledSvg,
} from "./MakeTransactionView.styled";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";
import * as ROUTES from "../../constants/routes";

const MakeTransactionView = ({ authState, history }) => {
	if (authState === "signIn") {
		history.push(ROUTES.SIGN_IN);
	}

	return (
		<SendMoneyWrapper>
			<FuncWrapper>
				<SendMoneyForm />
			</FuncWrapper>
			<StyledSvg />
		</SendMoneyWrapper>
	);
};

export default compose(withRouter, withAuthentication)(MakeTransactionView);
