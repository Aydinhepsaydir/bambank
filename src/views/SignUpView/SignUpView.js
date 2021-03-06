import React from "react";

import auth from "../../assets/graphics/auth.png";

import { SignUpForm } from ".";
import { SignUpWrapper, FuncWrapper, StyledImage } from "./SignUpView.styled";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";

import * as ROUTES from "../../constants";

const SignUpView = (props) => {
  const { history, authState } = props;

  //authenticated users sent to dash
  if (authState === "signedIn") {
    history.push(ROUTES.DASHBOARD);
  }

  return (
    <SignUpWrapper>
      <StyledImage src={auth} />
      <FuncWrapper>
        <SignUpForm />
      </FuncWrapper>
    </SignUpWrapper>
  );
};

export default compose(withRouter, withAuthentication)(SignUpView);
