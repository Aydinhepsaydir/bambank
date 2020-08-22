import React from "react";
import * as ROUTES from "../../constants";

import { Title, Paragraph, Button } from "../../components";
import { Section, TextWrapper, StyledImage } from "./LandingViews.styled";

import { compose } from "recompose";
import { withAuthentication } from "../../contexts/Session";
import { withRouter } from "react-router-dom";

import landing_top from "../../assets/graphics/landing_top.png";
import landing_bottom from "../../assets/graphics/landing_bottom.png";

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
        <TextWrapper>
          <Title type="h1">Join Us Today</Title>
          <Paragraph>
            Sign up to create an account and start sending your friends
            Bameuros.
          </Paragraph>
          <Paragraph>
            Your first <b>100</b> Bambeuros are on us.
          </Paragraph>
          <Button
            primary
            rounded
            onClick={() => history.push(ROUTES.SIGN_UP)}
            margin="8px 0 8px 12px"
          >
            Sign Up
          </Button>
        </TextWrapper>
        <StyledImage src={landing_top} />
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
        <StyledImage src={landing_bottom} />
      </Section>
    </>
  );
};

export default compose(withAuthentication, withRouter)(LandingView);
