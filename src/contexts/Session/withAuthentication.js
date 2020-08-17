import React from "react";
import AuthUserContext from "./context";
import { Authenticator } from "aws-amplify-react";

import { Hub } from "aws-amplify";

const withAuthentication = (Component) => {
	class WithAuthentication extends React.Component {
		// constructor(props) {
		// 	super(props);
		// 	this.state = {
		// 		authUser: null,
		// 	};
		// }

		// componentDidMount() {
		// 	Hub.listen("auth", (data) => {
		// 		const { payload } = data;
		// 		this.setState({ authUser: payload });
		// 		this.onAuthEvent(payload);
		// 		console.log(
		// 			"A new auth event has happened: ",
		// 			data.payload.data.username + " has " + data.payload.event
		// 		);
		// 	});
		// }

		// onAuthEvent(payload) {
		// 	console.log("payload: ", payload);
		// 	if (payload.event === "signIn") {
		// 		this.setState({
		// 			authUser: payload.data.attributes,
		// 		});
		// 	} else if (payload.event === "signOut") {
		// 		this.setState({
		// 			authUser: null,
		// 		});
		// 	}
		// }

		render() {
			return (
				// <AuthUserContext.Provider value={this.state.authUser}>
				<AuthUserContext.Provider>
					<Authenticator hideDefault={false}>
						<Component {...this.props} />
					</Authenticator>
				</AuthUserContext.Provider>
			);
		}
	}

	return WithAuthentication;
};

export default withAuthentication;
