import React from "react";
import AuthUserContext from "./context";
import { Authenticator } from "aws-amplify-react";

const MyTheme = {
	container: { height: "100%" },
};

const withAuthentication = (Component) => {
	class WithAuthentication extends React.Component {
		render() {
			return (
				<AuthUserContext.Provider>
					<Authenticator hideDefault={true} theme={MyTheme}>
						<Component {...this.props} />
					</Authenticator>
				</AuthUserContext.Provider>
			);
		}
	}

	return WithAuthentication;
};

export default withAuthentication;
