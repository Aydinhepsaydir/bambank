import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Layout from "./Layout";
import Firebase, { FirebaseContext } from "./contexts/Firebase";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	</FirebaseContext.Provider>,

	document.getElementById("root")
);

serviceWorker.register();
