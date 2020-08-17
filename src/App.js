import React from "react";

import Routes from "./Routes";
import { withAuthentication } from "./contexts/Session";

function App() {
	return (
		<>
			<Routes />
		</>
	);
}

export default withAuthentication(App);
