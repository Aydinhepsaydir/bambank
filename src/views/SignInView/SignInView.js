import React from "react";

import SignInFormBase from "./SignInFormBase";
import { SignInWrapper, FuncWrapper } from "./SignInView.styled";

import { ReactComponent as Auth } from "../../assets/graphics/auth.svg";
import { Title } from "../../components";

const SignInView = () => {
	return (
		<SignInWrapper>
			<Auth />
			<FuncWrapper>
				<SignInFormBase />
			</FuncWrapper>
		</SignInWrapper>
	);
};

export default SignInView;
