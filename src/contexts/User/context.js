import React, { Component } from "react";

import { Hub } from "aws-amplify";

import { compose } from "recompose";
import { withAuthentication } from "../Session";
import { withFirebase } from "../Firebase";

const UserContext = React.createContext(null);

class UserProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: JSON.parse(localStorage.getItem("user")),
		};
	}

	onAuthEvent = async (payload) => {
		if (payload.event === "signIn") {
			const { firebase } = this.props;
			const userId = payload.data.username;
			const userRef = await firebase.getUser(userId);

			userRef.onSnapshot(async (doc) => {
				this.setState({
					user: doc.data(),
				});

				localStorage.setItem("user", JSON.stringify(doc.data()));
			});
		} else if (payload.event === "signOut") {
			this.setState({
				user: null,
			});
			localStorage.setItem("user", null);
		}
	};

	onTransactionEvent = async () => {
		const userId = this.state.user.uid;
		const { firebase } = this.props;
		const userRef = await firebase.getUser(userId);

		userRef.onSnapshot(async (doc) => {
			this.setState({
				user: doc.data(),
			});

			localStorage.setItem("user", JSON.stringify(doc.data()));
		});
	};

	componentDidMount() {
		Hub.listen("auth", (data) => {
			const { payload } = data;
			this.onAuthEvent(payload);
		});

		Hub.listen("transactions", () => {
			this.onTransactionEvent();
		});
	}

	render() {
		const { children } = this.props;

		return (
			<UserContext.Provider
				value={{
					user: this.state.user,
				}}
			>
				{children}
			</UserContext.Provider>
		);
	}
}

const withUser = (Component) => {
	return (props) => {
		return (
			<UserContext.Consumer>
				{(state) => {
					return <Component user={state.user} {...props} />;
				}}
			</UserContext.Consumer>
		);
	};
};

export default compose(withFirebase, withAuthentication)(UserProvider);
export { UserContext, withUser };
