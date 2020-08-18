import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Layout from "./Layout";
import AmplifyClass, { AmplifyContext } from "./contexts/Amplify";
import { BrowserRouter } from "react-router-dom";
import Firebase, { FirebaseContext } from "./contexts/Firebase";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { UserProvider } from "./contexts/User";

Amplify.configure(awsconfig);

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
		<AmplifyContext.Provider value={new AmplifyClass()}>
			<UserProvider>
				<BrowserRouter>
					<Layout />
				</BrowserRouter>
			</UserProvider>
		</AmplifyContext.Provider>
	</FirebaseContext.Provider>,

	document.getElementById("root")
);

serviceWorker.register();
