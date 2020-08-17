import { Auth } from "aws-amplify";

class AmplifyClass {
	doSignUp = async (username, password, name) => {
		try {
			const { user } = await Auth.signUp({
				username,
				password,
				attributes: {
					name,
				},
			});
			console.log("user from amplify class: ", user);
			return user;
		} catch (error) {
			console.log("error signing up:", error);
			const signUpError = {
				error,
			};
			return signUpError;
		}
	};

	doConfirmSignUp = async (username, code) => {
		console.log("username", username);
		console.log("code", code);
		try {
			await Auth.confirmSignUp(username, code);
		} catch (error) {
			console.log("error confirming sign up", error);
			const signUpConfirmError = {
				error,
			};
			return signUpConfirmError;
		}
	};

	resendConfirmationCode = async (username) => {
		try {
			await Auth.resendSignUp(username);
			console.log("code resent successfully");
		} catch (err) {
			console.log("error resending code: ", err);
		}
	};

	doSignIn = async (email, password) => {
		try {
			const user = await Auth.signIn(email, password);
			return user;
		} catch (error) {
			console.log("error signing in", error);
			const signInError = {
				error,
			};
			return signInError;
		}
	};

	doSignOut = async () => {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log("error signing out: ", error);
			const signOutError = {
				error,
			};
			return signOutError;
		}
	};

	doForgotPassword = (email) => {
		return Auth.forgotPassword(email)
			.then((data) => console.log(data))
			.catch((error) => {
				console.log(error);
				const forgotPasswordError = {
					error,
				};
				return forgotPasswordError;
			});
	};

	doForgetPasswordSubmit = (email, code, new_password) => {
		return Auth.forgotPasswordSubmit(email, code, new_password)
			.then((data) => console.log(data))
			.catch((error) => {
				console.log(error);
				const forgotPasswordError = {
					error,
				};
				return forgotPasswordError;
			});
	};

	getCurrentUser = async () => {
		try {
			const user = await Auth.currentAuthenticatedUser();
			return user;
		} catch (error) {
			console.log("error getting user", error);
			const userError = {
				error,
			};
			return userError;
		}
	};
}

export default AmplifyClass;
