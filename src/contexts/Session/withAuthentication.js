import React from "react";
import AuthUserContext from "./context";
import { Authenticator } from "aws-amplify-react";

import { Hub } from "aws-amplify";

const withAuthentication = (Component) => {
	class WithAuthentication extends React.Component {
		render() {
			return (
				<AuthUserContext.Provider>
					<Authenticator hideDefault={true}>
						<Component {...this.props} />
					</Authenticator>
				</AuthUserContext.Provider>
			);
		}
	}

	return WithAuthentication;
};

export default withAuthentication;
