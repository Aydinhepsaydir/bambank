import React from "react";
import { Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants";

import {
  LandingView,
  DashView,
  SignInView,
  PasswordForgetView,
  SignUpView,
  ConfirmAccountView,
  MakeTransactionView,
  CheckBalanceView,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingView} />
      <Route exact path={ROUTES.DASHBOARD} component={DashView} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInView} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpView} />
      <Route exact path={ROUTES.CHECK_BALANCE} component={CheckBalanceView} />
      <Route
        exact
        path={ROUTES.MAKE_TRANSACTION}
        component={MakeTransactionView}
      />
      <Route
        exact
        path={ROUTES.CONFIRM_ACCOUNT}
        component={ConfirmAccountView}
      />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetView}
      />
    </Switch>
  );
};

export default Routes;
