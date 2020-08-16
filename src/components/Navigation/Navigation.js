import React from "react";
import styled from "styled-components";
import { AuthUserContext } from "../../contexts/Session";
import COLORS from "../../constants/colors";
import { Link } from "react-router-dom";
import Button from "../Button";

import { Title } from "../../components";
import * as ROUTES from "../../constants/routes";

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 20px;
	color: ${COLORS.darkPurple};
	margin: 0 12px;
	font-weight: 700;
`;

const MenuWrapper = styled.div`
	width: 100%;
	height: 70px;
	text-align: right;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${COLORS.primary};

	-webkit-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	-moz-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
`;

const Navigation = () => {
	return (
		<div>
			<AuthUserContext.Consumer>
				{(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
			</AuthUserContext.Consumer>
		</div>
	);
};

const NavigationNonAuth = () => (
	<MenuWrapper>
		<StyledLink to="/">
			<Title type="h1" color={COLORS.white} margin="0" padding="0">
				Bambank
			</Title>
		</StyledLink>
		<StyledLink to={ROUTES.SIGN_IN}>
			<Button primary rounded>
				Sign In
			</Button>
		</StyledLink>
	</MenuWrapper>
);

const NavigationAuth = () => (
	<MenuWrapper>
		<StyledLink to="/">
			<Title type="h1" color={COLORS.white} margin="0" padding="0">
				Bambank
			</Title>
		</StyledLink>
		<StyledLink to={ROUTES.SIGN_IN}>
			<Button primary rounded>
				Sign Out
			</Button>
		</StyledLink>
	</MenuWrapper>
);

export default Navigation;
