import app from "firebase/app";
import firebase from "firebase";
import moment from "moment";
import { FIREBASE_CONFIG } from "../../constants";

class Firebase {
  constructor() {
    app.initializeApp(FIREBASE_CONFIG);

    this.store = app.firestore();
  }

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
