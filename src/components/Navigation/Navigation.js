import React from "react";

import { MenuWrapper, StyledLink } from "./Navigation.styled";
import { Title, Button } from "../../components";
import * as ROUTES from "../../constants/routes";
import COLORS from "../../constants/colors";

import { compose } from "recompose";
import { withAmplify } from "../../contexts/Amplify";
import { Authenticator } from "aws-amplify-react";

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
			{authState == "signedIn" ? (
				<>
					<StyledLink to={ROUTES.DASHBOARD}>
						<Title type="h1" color={COLORS.white} margin="0" padding="0">
							Bambank
						</Title>
					</StyledLink>
					<Button
						primary
						rounded
						onClick={() => {
							amplify.doSignOut();
						}}
					>
						Sign Out
					</Button>
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
