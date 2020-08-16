import React from "react";

import SignInForm from "./SignInForm";
import { SignInWrapper, FuncWrapper } from "./SignInView.styled";

import { PasswordForgetLink } from "../PasswordForgetView";
import { SignUpLink } from "../SignUpView";

import { ReactComponent as Auth } from "../../assets/graphics/auth.svg";
import { Title } from "../../components";

const SignInView = () => {
	return (
		<SignInWrapper>
			<Auth />
			<FuncWrapper>
				<Title type="h1">Sign in</Title>
				<SignInForm />
				<PasswordForgetLink />
				<SignUpLink />
			</FuncWrapper>
		</SignInWrapper>
	);
};

export default SignInView;
