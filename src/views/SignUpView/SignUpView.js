import React from "react";
import styled from "styled-components";
import { SignUpForm } from ".";
import { Paragraph, Title } from "../../components";
import { ReactComponent as AuthImage } from "../../assets/graphics/auth.svg";
import COLORS from "../../constants/colors";
import mediaQueries from "../../constants/mediaQueries";

const StyledImg = styled.img`
	width: 100%;
	height: auto;
	margin: 25px 0px;

	@media ${mediaQueries.tabletPortraitUp} {
		width: 400px;
	}

	@media ${mediaQueries.tabletLandscapeUp} {
		width: 550px;
	}
`;

const SignUpWrapper = styled.div`
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
	@media ${mediaQueries.tabletPortraitUp} {
		display: flex;
		flex-direction: column;
	}
`;

const SignUpPage = () => (
	<SignUpWrapper>
		<AuthImage />
		<FuncWrapper>
			<Title type="h1">Create an account</Title>
			<Paragraph fontSize="16px">It's quick and easy.</Paragraph>
			<SignUpForm />
		</FuncWrapper>
	</SignUpWrapper>
);

export default SignUpPage;