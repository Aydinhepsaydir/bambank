import React from "react";
import styled from "styled-components";
import { PasswordForgetForm } from "./";
import { Title, Paragraph } from "../../components";
import mediaQueries from "../../constants/mediaQueries";
import { ReactComponent as AuthImage } from "../../assets/graphics/auth.svg";

const SignInWrapper = styled.div`
	width: 100%;
	height: 100%;

	@media ${mediaQueries.tabletPortraitUp} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media ${mediaQueries.tabletLandscapeUp} {
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const FuncWrapper = styled.div`
	max-width: 500px;
	@media ${mediaQueries.tabletPortraitUp} {
		display: flex;
		flex-direction: column;
	}
`;

const PasswordForgetView = () => (
	<SignInWrapper>
		<AuthImage />
		<FuncWrapper>
			<Title type="h1">Forgotten your password?</Title>
			<Paragraph fontSize="16px">
				No worries, just enter your email below and we will send you a password
				reset link.
			</Paragraph>
			<PasswordForgetForm />
		</FuncWrapper>
	</SignInWrapper>
);

export default PasswordForgetView;
