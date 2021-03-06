import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants";
import styled from "styled-components";
import { COLORS } from "../../constants";

const StyledLink = styled(Link)`
  color: ${COLORS.purple};
`;

const PasswordForgetLink = () => (
  <StyledLink to={ROUTES.PASSWORD_FORGET}>Forgot Password?</StyledLink>
);

export default PasswordForgetLink;
