import React from "react";
import * as ROUTES from "../../constants/routes";
import { withRouter } from "react-router-dom";

import { Title, Paragraph, Button } from "../../components";
import { Section, TextWrapper } from "./LandingViews.styled";

import { ReactComponent as LandingOneSvg } from "../../assets/graphics/landing_top.svg";
import { ReactComponent as LandingTwoSvg } from "../../assets/graphics/landing_bottom.svg";

import { compose } from "recompose";
import { withAuthentication } from "../../contexts/Session";

const LandingView = (props) => {
	const { history, authState } = props;

	//authenticated users sent to dash
	if (authState === "signedIn") {
		history.push(ROUTES.DASHBOARD);
	}

	return (
		<>
			{authState === "loading" && <Paragraph>Loading</Paragraph>}
			<Section>
				<LandingOneSvg />
				<TextWrapper>
					<Title type="h1">Join Us Today</Title>
					<Paragraph>
						Sign up to create an account and start sending your friends
						Bameuros.
					</Paragraph>
					<Paragraph>
						Your first <b>100</b> Bambeuros are on us.
					</Paragraph>
					<Button primary rounded onClick={() => history.push(ROUTES.SIGN_UP)}>
						Sign Up
					</Button>
				</TextWrapper>
			</Section>
			<Section backgroundColor="white">
				<TextWrapper>
					<Title type="h1">Who Are We?</Title>
					<Paragraph>
						Your favourite, most modern bank. We are here for you.
					</Paragraph>
					<Paragraph>
						Here at Bamboo, we thought banking needed a refresh.
					</Paragraph>
					<Paragraph>
						Introducing <b>Bambeuros</b>, our new currency.
					</Paragraph>
				</TextWrapper>
				<LandingTwoSvg />
			</Section>
		</>
	);
};

export default compose(withAuthentication, withRouter)(LandingView);
