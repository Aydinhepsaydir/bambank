import React from "react";

import SignInFormBase from "./SignInFormBase";
import { SignInWrapper, FuncWrapper } from "./SignInView.styled";

import auth from "../../assets/graphics/auth.png";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";

import * as ROUTES from "../../constants/routes";

const SignInView = (props) => {
	const { history, authState } = props;

	//authenticated users sent to dash
	if (authState === "signedIn") {
		history.push(ROUTES.DASHBOARD);
	}

	return (
		<SignInWrapper>
			<img src={auth} />
			<FuncWrapper>
				<SignInFormBase />
			</FuncWrapper>
		</SignInWrapper>
	);
};

export default compose(withRouter, withAuthentication)(SignInView);
