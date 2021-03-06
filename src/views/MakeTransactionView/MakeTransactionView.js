import React from "react";

import SendMoneyForm from "./SendMoneyForm";
import {
  SendMoneyWrapper,
  FuncWrapper,
  StyledImage,
} from "./MakeTransactionView.styled";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "../../contexts/Session";
import * as ROUTES from "../../constants";

import send_money from "../../assets/graphics/send_money.png";

const MakeTransactionView = ({ authState, history }) => {
  if (authState === "signIn") {
    history.push(ROUTES.SIGN_IN);
  }

  return (
    <SendMoneyWrapper>
      <StyledImage src={send_money} />
      <FuncWrapper>
        <SendMoneyForm />
      </FuncWrapper>
    </SendMoneyWrapper>
  );
};

export default compose(withRouter, withAuthentication)(MakeTransactionView);
