import app from "firebase/app";
import firebase from "firebase";
import moment from "moment";

var config = {
	apiKey: "AIzaSyCYutN1ugqKL3uPDdUJI1WL7TLMY1gSYYU",
	authDomain: "bambank-b735b.firebaseapp.com",
	databaseURL: "https://bambank-b735b.firebaseio.com",
	projectId: "bambank-b735b",
	storageBucket: "bambank-b735b.appspot.com",
	messagingSenderId: "405500871120",
	appId: "1:405500871120:web:8b889d3ef225ed43acf9d5",
	measurementId: "G-XVBN8ZV7B3",
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		// this.auth = app.auth();
		this.store = app.firestore();
	}

	// // *** Auth API ***
	// doCreateUserWithEmailAndPassword = (email, password) =>
	// 	this.auth.createUserWithEmailAndPassword(email, password);

	// doSignInWithEmailAndPassword = (email, password) =>
	// 	this.auth.signInWithEmailAndPassword(email, password);

	// doSignOut = () => this.auth.signOut();

	// doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

	// doPasswordUpdate = (password) =>
	// 	this.auth.currentUser.updatePassword(password);

	// *** User API ***
	createUser = (uid, name, email) => {
		//initialise with 100 free bambeuros
		const transactions = [
			{
				date: moment().format("MMM Do"),
				amount: 100,
				who: "Bamboo",
				transactionType: "receive",
				message: "First 100 on us.",
			},
		];
		const balance = 100;

		this.store.collection("users").doc(uid).set({
			uid,
			name,
			email,
			transactions,
			balance,
		});
	};

	// *** Cloud Firestore User API ***
	getUsers = () => this.store.collection("users");

	getUser = (userId) => this.store.collection("users").doc(userId);

	updateUser = (userId, updatedInfo) =>
		this.store.collection("users").doc(userId).update(updatedInfo);
}

export default Firebase;

export { firebase };
