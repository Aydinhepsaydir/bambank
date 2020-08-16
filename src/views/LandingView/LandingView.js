import React from "react";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import { withRouter } from "react-router-dom";
import COLORS from "../../constants/colors";

import { Title, Paragraph, Button } from "../../components";
import { Section, TextWrapper } from "./LandingViews.styled";

import { ReactComponent as LandingOne } from "../../assets/graphics/landingOne.svg";
import { ReactComponent as LandingTwo } from "../../assets/graphics/landingTwo.svg";

const LandingView = (props) => {
	const { history } = props;

	return (
		<>
			<Section>
				<LandingOne />
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
				<LandingTwo />
			</Section>
		</>
	);
};

export default withRouter(LandingView);