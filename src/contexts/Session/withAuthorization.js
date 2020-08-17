import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withAmplify } from "../Amplify";
import AuthUserContext from "./context";

import { Hub } from "aws-amplify";

const withAuthorization = (condition) => (Component) => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			Hub.listen("auth", (data) => {
				console.log("data;", data);
				const { payload } = data;
				this.onAuthEvent(payload);
				console.log(
					"A new auth event has happened: ",
					data.payload.data.username + " has " + data.payload.event
				);
			});

			// this.listener = this.props.firebase.auth.onAuthStateChanged(
			// 	(authUser) => {
			// 		if (!condition(authUser)) {
			// 			this.props.history.push("/");
			// 		}
			// 	}
			// );
		}

		render() {
			return (
				<AuthUserContext.Consumer>
					{(authUser) =>
						condition(authUser) ? <Component {...this.props} /> : null
					}
				</AuthUserContext.Consumer>
			);
		}
	}

	return compose(withRouter, withAmplify)(WithAuthorization);
};

export default withAuthorization;
