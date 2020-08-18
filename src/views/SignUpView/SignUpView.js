import React from "react";

import { ReactComponent as AuthImage } from "../../assets/graphics/auth.svg";
import { SignUpForm } from ".";
import { SignUpWrapper, FuncWrapper } from "./SignUpView.styled";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";

import * as ROUTES from "../../constants/routes";

const SignUpView = (props) => {
	const { history, authState } = props;

	//authenticated users sent to dash
	if (authState === "signedIn") {
		history.push(ROUTES.DASHBOARD);
	}

	return (
		<SignUpWrapper>
			<AuthImage />
			<FuncWrapper>
				<SignUpForm />
			</FuncWrapper>
		</SignUpWrapper>
	);
};

export default compose(withRouter, withAuthentication)(SignUpView);
