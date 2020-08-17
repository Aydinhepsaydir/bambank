import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Layout from "./Layout";
import AmplifyClass, { AmplifyContext } from "./contexts/Amplify";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

ReactDOM.render(
	<AmplifyContext.Provider value={new AmplifyClass()}>
		<UserProvider>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</UserProvider>
	</AmplifyContext.Provider>,

	document.getElementById("root")
);

serviceWorker.register();
