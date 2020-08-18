import React from "react";

import {
	MenuWrapper,
	StyledLink,
	StyledTitle,
	NavMenu,
} from "./Navigation.styled";
import { Title, Button } from "../../components";
import * as ROUTES from "../../constants/routes";
import COLORS from "../../constants/colors";

import { compose } from "recompose";
import { withAmplify } from "../../contexts/Amplify";
import { Authenticator } from "aws-amplify-react";
import Paragraph from "../Paragraph";

const Navigation = ({ amplify }) => {
	return (
		<Authenticator hideDefault={true}>
			<Nav amplify={amplify} />
		</Authenticator>
	);
};

const Nav = (props) => {
	const { authState, amplify } = props;
	return (
		<MenuWrapper>
			{authState === "signedIn" ? (
				<>
					<NavMenu>
						<StyledLink to={ROUTES.DASHBOARD}>
							<StyledTitle type="h1">Bambank</StyledTitle>
						</StyledLink>
						<StyledLink to={ROUTES.CHECK_BALANCE}>
							<Paragraph color={COLORS.backgroundColor}>Balance</Paragraph>
						</StyledLink>
						<StyledLink to={ROUTES.MAKE_TRANSACTION}>
							<Paragraph color={COLORS.backgroundColor}>Send Money</Paragraph>
						</StyledLink>
					</NavMenu>
					<StyledLink>
						<Button
							primary
							rounded
							onClick={() => {
								amplify.doSignOut();
							}}
						>
							Sign Out
						</Button>
					</StyledLink>
				</>
			) : (
				<>
					<StyledLink to={ROUTES.LANDING}>
						<Title type="h1" color={COLORS.white} margin="0" padding="0">
							Bambank
						</Title>
					</StyledLink>
					<StyledLink to={ROUTES.SIGN_IN}>
						<Button primary rounded>
							Sign In
						</Button>
					</StyledLink>
				</>
			)}
		</MenuWrapper>
	);
};

export default compose(withAmplify)(Navigation);
