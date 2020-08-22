import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants";
import styled from "styled-components";
import { COLORS } from "../../constants";

const StyledLink = styled(Link)`
  color: ${COLORS.purple};
`;

const SignUpLink = () => (
  <p>
    Don't have an account? <StyledLink to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
  </p>
);

export default SignUpLink;
