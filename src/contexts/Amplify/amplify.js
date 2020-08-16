import { Auth } from "aws-amplify";

class AmplifyClass {
	doSignUp = async (email, password) => {
		try {
			const { user } = await Auth.signUp({
				email,
				password,
			});
			console.log(user);
		} catch (error) {
			console.log("error signing up:", error);
		}
	};

	doSignIn = async (email, password) => {
		try {
			const user = await Auth.signIn(email, password);
		} catch (error) {
			console.log("error signing in", error);
		}
	};

	doSignOut = async () => {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log("error signing out: ", error);
		}
	};

	doForgotPassword = (email) => {
		return Auth.forgotPassword(email)
			.then((data) => console.log(data))
			.catch((err) => {
				console.log(err);
				return err;
			});
	};

	doForgotPasswordSubmit = (email, code, new_password) => {
		// Collect confirmation code and new password, then
		return Auth.forgotPasswordSubmit(email, code, new_password)
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	test = () => {
		return "hello";
	};
}

export default AmplifyClass;
