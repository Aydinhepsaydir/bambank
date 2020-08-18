import React from "react";

import { PasswordForgetForm } from "./";
import { Title, Paragraph } from "../../components";
import { SignInWrapper, FuncWrapper } from "./PasswordForgetView.styled";

import auth from "../../assets/graphics/auth.png";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";

import * as ROUTES from "../../constants/routes";

const PasswordForgetView = (props) => {
	const { history, authState } = props;

	//authenticated users sent to dash
	if (authState === "signedIn") {
		history.push(ROUTES.DASHBOARD);
	}
	return (
		<SignInWrapper>
			<img src={auth} />
			<FuncWrapper>
				<Title type="h1">Forgotten your password?</Title>
				<Paragraph fontSize="16px">
					No worries, just enter your email below and we will send you a
					password reset link.
				</Paragraph>
				<PasswordForgetForm />
			</FuncWrapper>
		</SignInWrapper>
	);
};

export default compose(withRouter, withAuthentication)(PasswordForgetView);
